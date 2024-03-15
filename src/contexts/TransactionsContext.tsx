import { ReactNode, createContext, useEffect, useState } from "react";

interface TransactionType {
  id: number;
  description: string;
  category: string;
  createdAt: Date;
  price: number;
  type: "income" | "outcome";
}

interface TransactionContextType {
  transactions: TransactionType[];
  fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<TransactionContextType>(
  {} as TransactionContextType
);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  async function fetchTransactions(query?: string) {
    const url = new URL("http://localhost:3000/transactions");
    console.log("cheguei aqui");
    if (query) {
      url.searchParams.append("q", query);
    }

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setTransactions(data);
  }
  useEffect(() => {
    fetchTransactions();
  }, []); //chamada para a API

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}

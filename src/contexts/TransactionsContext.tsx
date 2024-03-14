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
}
interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<TransactionContextType>(
  {} as TransactionContextType
);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  async function loadTransactions() {
    const response = await fetch("http://localhost:3000/transactions");
    const data = await response.json();
    console.log(data);
    setTransactions(data);
  }
  useEffect(() => {
    loadTransactions();
  }, []); //chamada para a API

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}

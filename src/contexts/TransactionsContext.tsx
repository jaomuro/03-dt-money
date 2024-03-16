import { ReactNode, useEffect, useState, useCallback } from "react";
import { api } from "../lib/axios";
import { createContext } from "use-context-selector";

interface TransactionType {
  id: number;
  description: string;
  category: string;
  createdAt: Date;
  price: number;
  type: "income" | "outcome";
}

interface newTransactionProps {
  description: string;
  price: number;
  category: string;
  type: "income" | "outcome";
}
interface TransactionContextType {
  transactions: TransactionType[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: newTransactionProps) => Promise<void>;
}

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<TransactionContextType>(
  {} as TransactionContextType
);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get("transactions", {
      params: { q: query, _sort: "createdAt", _order: "desc" },
    });
    setTransactions(response.data);
  }, []);

  const createTransaction = useCallback(async (data: newTransactionProps) => {
    const { category, description, price, type } = data;

    const response = await api.post("transactions", {
      description,
      category,
      type,
      price,
      createdAt: new Date(),
    });

    setTransactions((state) => [response.data, ...state]);
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]); // chamada para a API

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

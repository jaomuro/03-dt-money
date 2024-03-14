import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { Summary } from "../../components/Summary/Summary";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

interface TransactionType {
  id: number;
  description: string;
  category: string;
  createdAt: Date;
  price: number;
  type: "income" | "outcome";
}

export function Transactions() {
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
    <div>
      <Header></Header>
      <Summary></Summary>
      <TransactionsContainer>
        <SearchForm></SearchForm>
        <TransactionsTable>
          <tbody>
            {transactions.map((t) => {
              return (
                <tr key={t.id}>
                  <td width="50%">{t.description}</td>
                  <td>
                    <PriceHighlight variant={t.type}>{t.price}</PriceHighlight>
                  </td>
                  <td>{t.category}</td>
                  <td>{t.createdAt.toString()}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}

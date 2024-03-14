import { Header } from "../../components/Header/Header";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { Summary } from "../../components/Summary/Summary";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header></Header>
      <Summary></Summary>
      <TransactionsContainer>
        <SearchForm></SearchForm>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 10.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/03/2024</td>
            </tr>
            <tr>
              <td width="50%">Hospedagem de site</td>
              <td>
                <PriceHighlight variant="outcome">R$ -2.000,00</PriceHighlight>
              </td>
              <td>Compra</td>
              <td>13/03/2024</td>
            </tr>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                {" "}
                <PriceHighlight variant="income">R$ 2.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/03/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}

import { useContext } from 'react'
import { Header } from '../../components/Header/Header'
import { SearchForm } from '../../components/SearchForm/SearchForm'
import { Summary } from '../../components/Summary/Summary'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)
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
                    <PriceHighlight variant={t.type}>
                      {t.type === 'outcome' && '- '}
                      {priceFormatter.format(t.price)}
                    </PriceHighlight>
                  </td>
                  <td>{t.category}</td>
                  <td>{dateFormatter.format(new Date(t.createdAt))}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}

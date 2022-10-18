import Transaction from "./TransactionItem"
import { TableRow, TransactionTable, TableHeader } from "./Transactions.styled"

export default function TransactionHistory({transactions}) {
    return (<TransactionTable>
  <thead>
    <TableRow>
      <TableHeader>Type</TableHeader>
      <TableHeader>Amount</TableHeader>
      <TableHeader>Currency</TableHeader>
    </TableRow>
  </thead>
      
      {transactions.map(transaction => (
          <tbody key={transaction.id}>
          <Transaction
                        type={transaction.type}
                        amount={transaction.amount}
                        currency={transaction.currency}
                    />
          </tbody>
            ))}
  
</TransactionTable>)
}


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
      <tbody>
      {transactions.map(transaction => (
            <Transaction key={transaction.id}
                        type={transaction.type}
                        amount={transaction.amount}
                        currency={transaction.currency}
                    />
          
            ))}
  </tbody>
</TransactionTable>)
}


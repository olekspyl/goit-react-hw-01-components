import styled from '@emotion/styled'

export const TransactionTable = styled.table`
table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid white;
`

export const TableRow = styled.tr`
background-color: rgb(119, 177, 190);
color: white;
`

export const TableHeader = styled.th`
border: 1px solid white;
`

export const TableData = styled.td`
text-align: center;
`

export const BodyRow = styled.tr`
&:nth-child(odd) {
  background-color: rgb(182, 188, 190);
};

&:nth-child(even) {
  background-color: white;
}
`


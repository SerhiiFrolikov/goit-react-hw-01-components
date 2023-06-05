import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  border-collapse: collapse;
  border: 2px solid black;
  width: 300px;
  margin: 60px auto;
  padding: 5px;
  background-color: silver;
`;

export const TableHeader = styled.th`
  padding: 8px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  background-color: aquamarine;
`;
export const TableData = styled.td`
  padding: 8px;
  text-align: center;
  border-bottom: 1px solid #ddd;
`;
export const TableRow = styled.tr`
  :nth-of-type(even) {
    background-color: grey;
  }
  :hover {
    background-color: green;
  }
`;

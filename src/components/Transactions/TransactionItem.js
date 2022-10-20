import PropTypes from 'prop-types';
import { TableData, BodyRow} from './Transactions.styled';

export default function Transaction({  type, amount, currency }) { 
    return(<BodyRow>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </BodyRow>
    )
}

Transaction.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
}
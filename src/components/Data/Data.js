import PropTypes from 'prop-types';
import { Statistic } from './Data.styled'
import { Title } from './Data.styled'
import { Statlist } from './Data.styled'
import { Item } from './Data.styled'
import { Label } from './Data.styled'
import { Percentage } from './Data.styled'

export default function Data({title=" ", stats }) {
    return (
        <Statistic>
            {title && <Title>{title }</Title>}
            <Statlist> {stats.map(stat => {
                return (
                    <Item key={stat.id}>
                    <Label>{stat.label}</Label>
                    <Percentage>{stat.percentage}</Percentage>
                    </Item>
                )
            })             
  }
  </Statlist>
</Statistic>
    )
}

Data.propTypes = {
    title: PropTypes.string.isRequired, 
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }
    ))

}
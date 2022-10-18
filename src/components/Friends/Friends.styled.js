import styled from '@emotion/styled'
import {theme} from './Theme'

export const List = styled.ul`
padding: 0px;
`

export const Item = styled.li`
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 0px 0px 4px 4px;
display: flex;
align-items: center;
`

export const Status = styled.span`
display: block;

svg{
    fill: ${props => props.isOnline ? theme.colors.green : theme.colors.red };
    margin-left: 10px;
}

`

export const Avatar = styled.img`
display: block;
width: 40px;
height: 40px;
margin-right: 15px;
margin-left: 15px;
`

export const Name = styled.p`
`

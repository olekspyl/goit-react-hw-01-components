import PropTypes from 'prop-types';
import {Item} from './Friends.styled';
import {Status} from './Friends.styled';
import {Avatar} from './Friends.styled';
import { Name } from './Friends.styled';
import {BsFillCircleFill} from 'react-icons/bs';


export default function Friends({id, avatar, name, isOnline}) {
    return (<Item id={id}>
        <Status isOnline={isOnline}><BsFillCircleFill /> {isOnline }</Status>
  <Avatar src={avatar} alt="User avatar"/>
        <Name>{name}</Name>
</Item>)
}

Friends.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
import PropTypes from 'prop-types';
import { Profile } from './User.styled'
import {Avatar} from './User.styled'
import { Description } from './User.styled'
import { Name } from './User.styled'
import { Tag } from './User.styled'
import { Location } from './User.styled'
import { Stats } from './User.styled'
import { Label } from './User.styled'
import { Quantity } from './User.styled'
import { Item } from './User.styled'

export default function User({ username, tag, location, avatar, followers, views, likes }) {
    return (
        <Profile>
  <Description>
    <Avatar
      src={avatar}
      alt="User avatar"
      class="avatar"
    />
    <Name>{username}</Name>
    <Tag>@{tag}</Tag>
    <Location>{location}</Location>
  </Description>

  <Stats>
    <Item>
      <Label>Followers </Label>
      <Quantity>{followers}</Quantity>
    </Item>
    <Item>
      <Label>Views </Label>
      <Quantity>{views}</Quantity>
    </Item>
    <Item>
      <Label>Likes </Label>
      <Quantity>{likes}</Quantity>
    </Item>
  </Stats>
</Profile>
    )
}

User.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired
}
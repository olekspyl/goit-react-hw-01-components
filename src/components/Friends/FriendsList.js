import Friends from "./Friends" 
import {List} from './Friends.styled'

export default function FriendsList({ friends }) { 
    return(
    <List>
        {friends.map(friend => (
            <Friends
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />
            
        ))
        }
    </List>)
}


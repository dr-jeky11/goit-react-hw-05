import s from './FriendList.module.css'
import FriendListItem from '../FriendListItem/FriendListItem'

const Friendlist = ({friends}) => {
  return (
    <ul className={s.friendList}>
      {friends.map((friend) => {
        return (
          <li key={friend.id} className={s.friendListItem}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default Friendlist;
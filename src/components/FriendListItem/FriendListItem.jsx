import s from './FriendListItem.module.css'

const FriendListItem = ({ avatar, name, isOnline, id}) => {
  return (
    <div className={s.friendInfo}>
          <img className={s.friendAvatar} src={avatar} alt="Avatar" width="48" />
          <p className={s.friendName}>{name}</p>
          {isOnline ? (
              <p className={s.statusOnline}>Online</p>) : (
              <p className={s.statusOffline}>Offline</p>)}
</div>
  )
}

export default FriendListItem
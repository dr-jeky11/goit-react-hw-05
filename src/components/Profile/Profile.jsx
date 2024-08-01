import s from "./Profile.module.css";

const Profile = ({name, tag, location, image, stats}) => {
  return (
    <div className={s.profileContainer}>
  <div className={s.profileInfo}>
    <img className={s.profileAvatar}
      src={image}
      alt={`${name} avatar`}
    />
        <p className={s.profileUsername}>{name}</p>
    <p className={s.profileTag}>{tag}</p>
    <p className={s.profileLocation}>{location}</p>
  </div>

  <ul className={s.profileList}>
        <li className={s.profileListItem}>
      <span className={s.profileListTitle}>Followers</span>
      <span className={s.profileListNumber}>{stats.followers}</span>
    </li>
    <li className={s.profileListItem}>
      <span className={s.profileListTitle}>Views</span>
          <span className={s.profileListNumber}>{stats.views}</span>
    </li>
    <li className={s.profileListItem}>
      <span className={s.profileListTitle}>Likes</span>
      <span className={s.profileListNumber}>{stats.likes}</span>
    </li>
  </ul>
</div>
  )
}

export default Profile;
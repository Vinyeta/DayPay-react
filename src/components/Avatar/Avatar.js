import "./Avatar.css";

const Avatar = ({ user }) => {
  if (!!user.avatar) {
    return <img className="avatar_image_container" src="https://static1.abc.es/media/play/2017/09/28/avatar-kVmB--620x349@abc.jpeg" alt="Avatar" />} 
  else {
    return <div className="avatar_text__container">{user.firstName.slice(0,1)}</div>
  }

};

export default Avatar;

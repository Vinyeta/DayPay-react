import { useContext } from "react";
import { UserContext } from "../../user-context";
import "./Avatar.css";

const Avatar = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      {user && (
        <div className="avatar_text__container">{user.name.slice(0, 1)}</div>
      )}
    </>
  );
};

export default Avatar;

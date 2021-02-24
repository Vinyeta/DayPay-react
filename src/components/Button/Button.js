import "./Button.css";

const Button = ({ buttonClass, value, onClick }) => {
  return (
    <div className={buttonClass} onClick={onClick} >
      {value}
    </div>
  );
};

export default Button;

import "./Button.css";

const Button = ({ style, value, onClick }) => {
  return (
    <div className={`${style}`} onClick={onClick} >
      {value}
    </div>
  );
};

export default Button;

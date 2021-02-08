import {useHistory} from "react-router"
import "./logo.css";

const Logo = () => {
    const history = useHistory();

    return (

        <div>
            <div className="logoDayPay" onClick={/*() => history.push("/")*/}></div>
        </div>
    )
};
export default Logo;
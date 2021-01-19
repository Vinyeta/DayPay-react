import "./FooterList.css";

const FooterList = ({menu}) => {

    console.log(menu.items)

    return (
        <div className="footerList__container">
            <span className="principalText"> {menu.tittle} </span>
            {menu.items.map(item => <p className="subtittles"> {item.subtittle} </p>)}
        </div>
    );
};

export default FooterList;
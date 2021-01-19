import "./newsletter.css";

const Newsletter = ({ }) => {
    return (
        <div className="newsletter__container" >
            <div className="newsletter__title__container">
            <span>Suscribe to Our Newsletter </span>
            </div>
            <div className="newsletter__text__container">
            <span> Time is the most precious thing you have when Bootstrapping. You can't take time.</span>
            </div>
            <div className="newsletter__bottom__container">
            <span className="newsletter__email" > ✉ Enter your email </span>
            <button className="newsletter__suscribe__button"> Subscribe! </button>
            </div>
        </div>
    );
};

export default Newsletter;
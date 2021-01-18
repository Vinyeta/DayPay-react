import "./Footer.css";
import FooterList from "../footerList/FooterList";

const Footer = () => {
    return ( 
        <div> 
            <div  className="Footer__container">
                    <FooterList menu={{
                        tittle: "Community",
                        items: [ 
                            {subtittle: "For Talents"},
                            {subtittle: "For Companies"},
                            {subtittle: "Facebook Group"},
                            {subtittle: "FAQ"}
                        ]
                    }}
                    />
                    <FooterList menu={{
                        tittle: "About Us",
                        items: [ 
                            {subtittle: "Meet The Team"},
                            {subtittle: "Our Story"},
                            {subtittle: "Career"},
                        ]
                    }}
                    />
                    <FooterList menu={{
                        tittle: "Useful",
                        items: [ 
                            {subtittle: "Free Resume Builder"},
                            {subtittle: "Free Graphics"},
                            {subtittle: "Career Blog"},
                        ]
                    }}
                    />
            </div>
        </div>
    );
};

export default Footer;
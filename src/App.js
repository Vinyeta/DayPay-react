
import './App.css';
import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";
import BoxInfo from "./components/BoxInfo/BoxInfo";
import SecondPicture from "./assets/imgmorena.png"
import TrustBox from "./components/TrustBox/TrustBox";
import IntroducePage from "./components/introducePage/IntroducePage"
import LoginForm from "./components/LoginForm/loginForm";


function App() {
  return (
    <div className="App">
      <>
      <LoginForm/>
      
      </>
    </div>
  );
}

export default App;

/* function App() {
  return (
    <div className="App">
      <>
       <Header/>
      <IntroducePage/>
      <TrustBox/>
      <div className="secondprincipal__container">
      <BoxInfo/>
      <img src={SecondPicture} alt="sexy lady" className="sexyLady"/>
      </div>
      <Footer/>
      </>
    </div>
  );
} */
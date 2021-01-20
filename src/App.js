import './App.css';
import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";
import BoxInfo from "./components/BoxInfo/BoxInfo";
import SecondPicture from "./assets/imgmorena.png"
import TrustBox from "./components/TrustBox/TrustBox";



function App() {
  return (
    <div className="App">
      <>
      <Header/>
      <TrustBox/>
      <div className="secondprincipal__container">
      <BoxInfo/>
      <img src={SecondPicture} alt=" sexy lady"/>
      </div>
      <Footer/>
      </>

    </div>
  );
}

export default App;

// import logo from './logo.svg';
import React, {useState} from 'react';

import '../App.css';

import 'bootstrap/dist/css/bootstrap.css';

import HomeEnglish from '../components/Home_English';
import HomeItalian from '../components/Home_Italian';

import Italy from '../img/italy.jpg';
import English from '../img/english.jpg';

function Home() {
  const [lang, setLang] = useState("ita")

  function ChangeLang (event, param) {
    setLang(param)
  }

  return (
    <>
      <center>
        <button onClick={ event => ChangeLang(event, "ita") } className="btn" style={{ backgroundImage: `url(${Italy})`, width: "24px", height: "18px", margin: "5px" }}></button>
        <button onClick={ event => ChangeLang(event, "eng") } className="btn" style={{ backgroundImage: `url(${English})`, width: "24px", height: "18px", margin: "5px" }}></button>
      </center>
      { lang === "eng" ? <HomeEnglish /> : <HomeItalian /> }
    </>
  );
}

export default Home;
// import logo from './logo.svg';
import React, {useState} from 'react';

import '../App.css';

import 'bootstrap/dist/css/bootstrap.css';

import Home_English from '../components/Home_English';
import Home_Italian from '../components/Home_Italian';

import italy from '../img/italy.jpg';
import english from '../img/english.jpg';

function Home() {
  const [lang, setLang] = useState("eng")

  function ChangeLang (event, param) {
    setLang(param)
  }

  return (
    <>
      <center>
        <button onClick={ event => ChangeLang(event, "ita") } className="btn" style={{ backgroundImage: `url(${italy})`, width: "24px", height: "18px", margin: "5px" }}></button>
        <button onClick={ event => ChangeLang(event, "eng") } className="btn" style={{ backgroundImage: `url(${english})`, width: "24px", height: "18px", margin: "5px" }}></button>
      </center>
      { lang === "eng" ? <Home_English /> : <Home_Italian /> }
    </>
  );
}

export default Home;
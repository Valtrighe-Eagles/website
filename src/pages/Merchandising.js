import React, { useState } from 'react';

import MerchandisingEnglish from '../components/Merchandising_English';
import MerchandisingItalian from '../components/Merchandising_Italian';

import Italy from '../img/italy.jpg';
import English from '../img/english.jpg';

const Merchandising = () => {
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
      { lang === "eng" ? <MerchandisingEnglish /> :<MerchandisingItalian /> }
      </>
    )
  };
  
export default Merchandising;
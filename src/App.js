import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Section from './Components/CountriesSection';
import Add from './Components/Adder/Add';
import React, { useState } from 'react';
import Popup from './Components/Popup/Popup';

function App() {
  const [info,setInfo] = useState([]);
  const [loading,setLoading] = useState(false);
  const [err,setErr] = useState(null);
  const [popup,setPopup] = useState(false);
  const [popupInfo,setPopupInfo] = useState({});

  const Search = (item)=>{
    setLoading(true);
    HttpRequest(item);
  }

  const HttpRequest = async (name)=>{
    try{
      let response = await fetch(`https://restcountries.com/v3.1/region/${name}`);
      if(!response.ok){
        throw new Error('Something went wrong...');
      }
      let data = await response.json();
      setInfo(data);
    }catch(error){
      setErr(error.message);
    }
    setLoading(false);
  }

  const PopupOpen = (info,bool)=>{
    setPopup(bool);
    setPopupInfo(info);
  }

  const PopupClose = (bool)=>{
    setPopup(bool);
  }

  return (
      <Add.Provider value={{search:Search,Info:info,Loading:loading,Error:err,Open:PopupOpen,Close:PopupClose,Popup:popup,PopupInfo:popupInfo}}>
        <Popup />
        <Header />
        <Navigation />
        <Section />
      </Add.Provider>
  );
}

export default App;

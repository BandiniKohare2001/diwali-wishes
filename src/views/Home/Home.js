import "./Home.css";
import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import kandil from "./kandil.png";
import diya from "./diya.png";
import copy from "./../Home/copy.png";

const GREETINGS = [
    "Wishing you a very happy and prosperous Diwali! May the light of the diyas guide you towards the path of happiness and success.",
    " On this Diwali, I pray to Lakshmi to bless you with wealth, health, and happiness. May you and your family enjoy this festive season with peace and joy.",
    "I pray to God on this Diwali to bless you with peace, prosperity, and fortune. Happy Diwali to you and your family!",
    "May the blessings of Goddess Lakshmi fill your heart with love and gratitude. May the brightness of the festival bring light to your life. Happy Diwali."
]

function Home() {
    const [searchParams] = useSearchParams();

    const [to, setTo] = useState(searchParams.get('to'));
    const [from ,setFrom] = useState(searchParams.get('from'));
    const [greetingCardNumber, setGreetingCardNumber] = useState(searchParams.get("g") >= GREETINGS.length ? 0 : searchParams.get("g") || 0);
    const [themeNumber, setThemeNumber] = useState(searchParams.get('t'))

  return (
    <>
    <div className={`greeting-container ${`theme-${themeNumber}`} `}>
  
      <img src={kandil} className='lamp-img right-lamp'/>
      <p className='to-text'>Dear {to} </p>

      <p className='greeting-text'>
        {GREETINGS[greetingCardNumber]}
      </p>

      <img src={diya} className='diya-img'/>
        <p className="from-text"> 
            From {from}</p> 
            
    </div>

    <p className='create-your-own'>Do you want to create your own Diwali Greeting? Customized it here 👇</p>

    <p className='link-generate' onClick={()=>{
        const url = `${process.env.REACT_APP_BASE_URL}?to=${to}&from=${from}&g=${greetingCardNumber}&t=${themeNumber}`
        navigator.clipboard.writeText(url);
        alert(`Copied to clipboard: ${url}`);
      }}>
      {`${process.env.REACT_APP_BASE_URL}?to=${to}&from=${from}&g=${greetingCardNumber}&t=${themeNumber}`}
      <img src={copy}  className='copy-img'/>
      </p>
 
    <div className='input-container'>
      <input 
      type='text'
      placeholder='To'
      className='input-box'
      value={to}
      onChange={(e)=>{
        setTo(e.target.value);

      }}
      />
       <input 
      type='text'
      placeholder='From'
      className='input-box'
      value={from}
      onChange={(e)=>{
        setFrom(e.target.value);
      }}
      />
       
      <select  
        onChange={(e)=>{
        setGreetingCardNumber(e.target.value);
      }}
      className='input-box'>
        <option value={0}>Card-1</option>
        <option value={1}>Card-2</option>
        <option value={2}>Card-3</option>
        <option value={3}>Card-4</option>
      </select>

      <select 
      onChange={(e)=>{
      setThemeNumber(e.target.value);
      }}
      className='input-box'>
      <option value="1">Theme-1</option>
        <option value="2">Theme-2</option>
        <option value="3">Theme-3</option>
        <option value="4">Theme-4</option>
        <option value="5">Theme-5</option>
      </select>
      
    </div>
    </>
  )
}

export default Home

import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

const HeaderText = ({firstName, text}) => (
  <div className='header-style'>
    <div>
      <p className='header-name'>{firstName}</p>
      <p className='header-text'>{text}</p>
    </div>
    <div>
      <img className='img' src='eg.jfif'/>
    </div>  
  </div>
)

const RenderJobs = ({job: {name, time, desc}}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{time}</p>
      <p>{desc}</p>
    </div>
  )
}

const myCV = {
  firstName: 'Kai Fletcher',
  text: 'Js,React,Git',
  jobs: [
    {
      name:'Borgarhjól',
      time: '2010- Enn að',
      desc: 'Reiðhjólaviðgerðum, málmsmíði og afgreiðsla kúnna. Full vinna á sumrin og afleysingar utan þess.',
    },
    {
      name:'Heimkaup',
      time: '2020-2021',
      desc: 'Tiltekt pantana, útkeyrsla og almenn lagervinna',
    },
    {
      name:'IceTransport',
      time: '2019-2020',
      desc: 'Bílstjóri og vöruhússtarfsmaður',
    },

  ]
}



const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <HeaderText firstName={myCV.firstName} text={myCV.text}/>
        </div>
        <hr className='line'/>
        <RenderJobs job={myCV.jobs[0]}/>
        <RenderJobs job={myCV.jobs[1]}/>
        <RenderJobs job={myCV.jobs[2]}/>
      </header>
    </div>
  );
}

export default App;

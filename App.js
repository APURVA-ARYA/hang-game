
import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Figure from './components/Figure';
import Wrongletter from './components/Wrongletter';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';
import {showNotification as show} from './components/Helpers';

const words = ['application', 'programming', 'interface','inheritance', 'wizard','overloading','joker','apple','random','interchange','singing','computing','calculator','music','gaming','book','crash','abstract','object'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

// let playable = true;

// const correctLetters = [];
// const wrongLetters = [];




function App() {
const [playable, setPlayable] = useState(true);
const [correctLetters, setCorrectLetters] = useState([]);
const [wrongLetters, setWrongLetters] = useState([]);
const [showNotification, setShowNotification] = useState(false);

useEffect(()=>{
const handleKeydown= event =>{
const { key , keyCode} = event;


  if (playable && keyCode >= 65 && keyCode <= 90) {
    const letter = key.toLowerCase();

    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        setCorrectLetters(currentLetters=>[...currentLetters,letter]);

      } else {
        show(setShowNotification);
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        setWrongLetters(wrongLetters=>[...wrongLetters,letter]);

       
      } else {
        show(setShowNotification);
      }
    }
  }
}

window.addEventListener('keydown', handleKeydown);

return () => window.removeEventListener('keydown',handleKeydown);

},[correctLetters,wrongLetters,playable]);



function playagain(){
  setPlayable(true);
  setWrongLetters([]);
  setCorrectLetters([]);
  const random=Math.floor(Math.random() * words.length);
  selectedWord = words[random];
}



  
  return (
    <div >
         <Header/>
         <div className="game-container">
            <Figure wrongLetters={wrongLetters}/>
            <Wrongletter wrongLetters={wrongLetters}/>
            <Word selectedWord={selectedWord} correctLetters={correctLetters} />
         </div>
         <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playagain={playagain}/>
            <Notification showNotification={showNotification}/>
    </div>
  );
}

export default App;

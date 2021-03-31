import React ,{useEffect}from 'react'
import {checkWin  } from "./Helpers";

// sound functn to play sound
function sound(src) {
  this.sound = document.createElement("audio");          //ignore this function
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}




const Popup= ({correctLetters,wrongLetters,selectedWord,setPlayable,playagain})=> {
  let finalMessage='';
  let finalMessageRevealWord= "";
  let playable=true;
  //  let mylose=new sound(lose.mp3);
  //  let mywin=new sound(win.mp3);
  if(checkWin(correctLetters,wrongLetters,selectedWord)==='win'){
    finalMessage="CONGRATULATIONS!! YOU WON 🥳🥳";
    playable=false;
    //  mywin.play();

  }
  else if(checkWin(correctLetters,wrongLetters,selectedWord)==='lose'){
    
    finalMessage="BETTER LUCK NEXT TIME 😜😜";
     finalMessageRevealWord= `The word was :${selectedWord}`;
     playable= false;
    mylose.play();
  }

  useEffect(()=>setPlayable(playable));
    return (
        <div className="popup-container" id="popup-container" style={finalMessage!==''?{display:'flex'}:{}}>
      <div className="popup">
        <h2 >{finalMessage}</h2>
        <h3 >{finalMessageRevealWord}</h3>
        <button onClick={playagain}>Play Again</button>
      </div>
    </div>
    )
}

export default Popup

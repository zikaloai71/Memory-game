import { useState,useEffect } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages = [
  {"src":"/images/helmet-1.png",matched:false},
  {"src":"/images/potion-1.png",matched:false},
  {"src":"/images/ring-1.png",matched:false},
  {"src":"/images/scroll-1.png",matched:false},
  {"src":"/images/shield-1.png",matched:false},
  {"src":"/images/sword-1.png",matched:false}
]

function App() {

  const [cards,setCards]=useState([])
  const [turns,setTurns]=useState(0)
  const [choiceOne,setChoiceOne] = useState(null);
  const [choiceTwo,setChoiceTwo] = useState(null);
  const [disabled,setDisabled] = useState(false);
  const [showCards,setShowCards] = useState(true);

  useEffect(()=>{
   
    if(choiceOne && choiceTwo){
      setDisabled(true)
      if(choiceOne.src === choiceTwo.src)
       {
        setCards(prevCards=>{
          return prevCards.map(card =>{
            if(card.src === choiceOne.src){
              return{...card, matched:true}
            }else{
              return card
            }
          })
        })
        resetTurn()
       }
       else {
        setTimeout(()=>resetTurn(),1000)
        
       }
    }
  }
    ,[choiceOne,choiceTwo])

  const shuffleCards = ()=>{
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(()=>Math.random() - 0.5)
      .map((card)=>({...card , id:Math.random()}));
    
    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }
   
   const handleChoice =(card)=>{
     choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
   }
   const resetTurn = ()=>{
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns+1)
    setDisabled(false)
   }

   useEffect(()=>{
    setTimeout(()=>setShowCards(false),2000)
   
    shuffleCards()
   },[])
  const winner = ()=>{
    let result = cards.filter(card=>card.matched);
    if(result.length === cards.length){
      return true
    }
    else{
      return false
    }
  }
  
  return (
    <div className="app">
     <h1 className='gameName'>Magic Game</h1>
     <button className='startBtn' onClick={()=>{shuffleCards();setShowCards(true);setTimeout(()=>setShowCards(false),2000)}}>start new game</button>
     <div className='cards'>
     { winner() && <h3 className='winner'>Congrats you have win</h3>}
     {cards.map(card => (
       <SingleCard  
       key={card.id} 
       card={card}
       handleChoice={handleChoice}
       flipped={card === choiceOne || card === choiceTwo || card.matched || showCards}
       disabled={disabled}
        />
     ))}
    </div>
    <h3>Turns:{turns}</h3>

    </div>
   
    
  );
}

export default App;

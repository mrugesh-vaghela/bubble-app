import React, { useState } from 'react';
import './App.css';
interface BubbleProps {
  number: number,
  color: string,
  showBubble: boolean,
}
/**
 * Component for Bubbles
 * @param param0 
 * @returns 
 */
const BubbleComponent: React.FC<BubbleProps> = ({ number, color, showBubble }) => {
  return (
    showBubble ? <div className={color}>{number}</div>: <></>
  );
};

/**
 * Main app component
 * @returns 
 */
function App() {
  const [ bubbleNumber, setBubbleNumber] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  
  const initialBubbleList : any  = {
    '1': false,
    '2': false,
    '3': false,
    '4': false,
    '5': false,
  };
  const [showBubble, setShowBubble] = useState(initialBubbleList);
  const handleChange = (event: any) => {
    setBubbleNumber(event.target.value);    
    if(Object.keys(initialBubbleList).includes(event.target.value)) {
      setButtonDisabled(false);      
    } else {
      setButtonDisabled(true);
    }
  };
  const transferBubble = () => {    
    setBubbleNumber(bubbleNumber);      
    if(bubbleNumber) {
      showBubble[bubbleNumber] = true;
      setShowBubble(showBubble);
      setBubbleNumber('');
    }    
  }
/**
 * This method resets bubble positions
 */
  const resetForm = () =>{
    setShowBubble(initialBubbleList); 
  }
  
  return (
    <div className="App">       
    <div className='main-container'>
    <div className='bubble-container'>
        <h1>Container</h1>
        <div className='bubble-table'>
          <BubbleComponent number = {1} color={'green-bubble'} showBubble={showBubble['1']}></BubbleComponent>
          <BubbleComponent number = {2} color={'pink-bubble'} showBubble={showBubble['2']}></BubbleComponent>
          <BubbleComponent number = {3} color={'red-bubble'} showBubble={showBubble['3']}></BubbleComponent>
          <BubbleComponent number = {4} color={'purple-bubble'} showBubble={showBubble['4']}></BubbleComponent>
          <BubbleComponent number = {5} color={'yellow-bubble'} showBubble={showBubble['5']}></BubbleComponent>
        </div>
        
      </div>
        <div className='bubble-stack'>          
          <BubbleComponent number = {1} color={'green-bubble'} showBubble={!showBubble['1']}></BubbleComponent>
          <BubbleComponent number = {2} color={'pink-bubble'} showBubble={!showBubble['2']}></BubbleComponent>
          <BubbleComponent number = {3} color={'red-bubble'} showBubble={!showBubble['3']}></BubbleComponent>
          <BubbleComponent number = {4} color={'purple-bubble'} showBubble={!showBubble['4']}></BubbleComponent>
          <BubbleComponent number = {5} color={'yellow-bubble'}showBubble={!showBubble['5']}></BubbleComponent>
        </div>
        <input type='text' name='bubbleNumber' placeholder={'Enter 1 to 5'} className='input' value={bubbleNumber} onChange={handleChange} ></input>
        <button type='button' className='button' onClick={transferBubble} disabled={buttonDisabled}>Transfer</button>
        <button type='button' className='button' onClick={resetForm} >Reset</button>
      </div>      
      
    </div>
  );
}

export default App;
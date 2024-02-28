import React, { useState } from "react";
import "./App.css";
interface BubbleProps {
  number: number;
  color: string;
  showBubble: boolean;
}
/**
 * Component for Bubbles
 * @param param0
 * @returns
 */
const BubbleComponent: React.FC<BubbleProps> = ({
  number,
  color,
  showBubble,
}) => {
  const testId = `test-${number}-${showBubble}`;
  return showBubble ? (
    <div className={color} data-testid={testId}>
      {number}
    </div>
  ) : (
    <></>
  );
};

/**
 * Main app component
 * @returns
 */
function App() {
  const [bubbleNumber, setBubbleNumber] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const bubbleStack = [
    {
      id: 1,
      color: "green-bubble",
      show: false,
    },
    {
      id: 2,
      color: "pink-bubble",
      show: false,
    },
    {
      id: 3,
      color: "red-bubble",
      show: false,
    },
    {
      id: 4,
      color: "purple-bubble",
      show: false,
    },
    {
      id: 5,
      color: "yellow-bubble",
      show: false,
    },
  ];
  const initialBubbleList: any = {
    "1": false,
    "2": false,
    "3": false,
    "4": false,
    "5": false,
  };
  const [showBubble, setShowBubble] = useState(initialBubbleList);
  const handleChange = (event: any) => {
    setBubbleNumber(event.target.value);
    if (Object.keys(initialBubbleList).includes(event.target.value)) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };
  const transferBubble = () => {
    setBubbleNumber(bubbleNumber);
    if (bubbleNumber) {
      showBubble[bubbleNumber] = true;
      setShowBubble(showBubble);
      setBubbleNumber("");
    }
  };
  /**
   * This method resets bubble positions
   */
  const resetForm = () => {
    setShowBubble(initialBubbleList);
  };

  return (
    <div className="App">
      {" "}
       
      <div className="main-container">
        <div className="bubble-container">
          <h1>Container</h1>
          {bubbleStack.map((bubble) => {
            return (
              <BubbleComponent
                number={bubble.id}
                color={bubble.color}
                showBubble={showBubble[bubble.id]}
              ></BubbleComponent>
            );
          })}
        </div>
        <div className="bubble-stack">
          {bubbleStack.map((bubble) => {
            return (
              <BubbleComponent
                number={bubble.id}
                color={bubble.color}
                showBubble={!showBubble[bubble.id]}
              ></BubbleComponent>
            );
          })}
        </div>
        <input
          data-testid="bubble-number"
          type="text"
          name="bubbleNumber"
          placeholder={"Enter 1 to 5"}
          className="input"
          value={bubbleNumber}
          onChange={handleChange}
        ></input>
        <button
          data-testid="swap-button"
          type="button"
          className="button"
          onClick={transferBubble}
          disabled={buttonDisabled}
        >
          Transfer
        </button>
        <button
          data-testid="reset-button"
          type="button"
          className="button"
          onClick={resetForm}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";

const Sandbox = () => {
  const [num, setNum] = useState<number>(5);

  return (
    <div>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        number: {num}
      </button>
    </div>
  );

  // const [word, setWord] = useState<string>("word");
  // const [num2, setNum2] = useState<number>(5);

  // return (
  //   <div>
  //     <p>Number 1:</p>
  //     <button
  //       onClick={() => {
  //         setWord(word + word);
  //       }}
  //     >
  //       {word}
  //     </button>
  //     <p>Number 2:</p>
  //     <button
  //       onClick={() => {
  //         setNum2(num2 + 1);
  //       }}
  //     >
  //       {num2}
  //     </button>
  //     <p>
  //       a word and a number: {word} + {num2}
  //     </p>
  //   </div>
  // );
};

export default Sandbox;

const Sandbox = () => {
  const [num,setNum] = useState <number> (1);

  const [num2,setNum2] = useState <number> (2);
  const [word,setWord] = useState <string> ("meow"); 
  return <div>
    <p>number 1</p>
    <p><button onClick={()=> {
      setNum(num+1);
    }}>{num}</button></p>

    <p>number 2</p>
    <p><button onClick={()=> {
      setNum2(num2+1);
    }}>{num2}</button></p>

    <p>the sum!</p>
    <p>{num+num2}</p>
    
    {word}
    </div>;
};

export default Sandbox;

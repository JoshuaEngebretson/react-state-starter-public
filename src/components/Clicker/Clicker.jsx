import { useState } from 'react'; // example of object destructuring

function Clicker(props) {
  //props will be an obj with property "name"
  
  const [count, setCount] = useState(0);

  const handleClickArrow = () => {
    console.log('clicked!');
    setCount(count + 1);
  }

  return (
    <>
      <p>Hello! My name is {props.name}.</p>
      <button onClick={handleClickArrow}>
        Click me!
      </button>
      <p>I've clicked the button {count} times.</p>
    </>
  )
}

export default Clicker;
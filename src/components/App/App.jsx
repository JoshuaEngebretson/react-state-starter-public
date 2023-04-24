import './App.css';
import Clicker from '../Clicker/Clicker'
import { useState } from 'react'; // example of object destructuring
// import React from 'react';
// const useState = React.useState;

function App() {
    // If a variable is shown on the DOM, it should live in state

    // pattern for useState:
    const [myStateVariable, setMyStateVariable] = useState('initial value'); // array destructuring
    // let whatUseStateReturns = useState(false);
    // let mything = whatUseStateReturns[0];
    // let setMyThing = whatUseStateReturns[1];

    // name is state variable
    // setName is function for how to change that state variable
    // "Make two variables, grabbing the first thing out of the array and call it name,
    //  and grab the second thing out of the array and call it setName"
    const [name, setName] = useState('Luke');
    // let name = 'Luke';

    // const [count, setCount] = useState(0);

    // firstNameUsed and setFirstNameUsed can both be passed as props to child components
    const [firstNameUsed, setFirstNameUsed] = useState('Luke')

    //const functionName = (arguments) => stuff the function does;
    // The below functions are the same
     const consoleFunc = () => console.log('clicked!'); // no {} required bc only doing one thing
     function consoleFuncSame() {
          console.log('clicked!');
     }

    // function handleClick() {
    //     console.log('clicked!');
    //     setCount(count + 1);
    // }

    // const handleClickArrow = () => {
    //     console.log('clicked!');
    //     setCount(count + 1);
    // }

    return (
        <div className="App">
            <Clicker name={firstNameUsed}/>
            <Clicker name="Andrew"/>
            <Clicker name="Liz"/>
            {/* <p>Hello! My name is {name}.</p>
            <button onClick={handleClickArrow}>
                Click me!
            </button>
            <p>I've clicked the button {count} times.</p> */}
        </div>
    );
}

export default App;

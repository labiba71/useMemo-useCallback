import React, { useState, useCallback, useMemo } from "react";
import logo from "./logo.svg";
import "./App.css";

const functions = new Set();

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementCount1 = useCallback(() => setCount1(count1 + 1), [count1]);
  const incrementCount2 = useCallback(() => setCount2(count2 + 1), [count2]);
  const logName = useCallback(() => console.log("Yihua"), []);

  // functions.add(logName);
  // console.log(functions);

  const doSomethingComplicated = useMemo(() => {
    console.log("I am computing something complex");
    return ((count1 * 1000) % 12.4) * 51000 - 4000;
  }, [count1]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Count1: {count1}
        <button onClick={incrementCount1}>Increase Count1</button>
        Count2: {count2}
        <button onClick={incrementCount2}>Increase Count2</button>
        <button onClick={logName}>Log Name</button>
        complexValue: {doSomethingComplicated}
      </header>
    </div>
  );
};

export default App;

// import Person from "./person.component";

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       count: 0,
//       person: { name: "Jack", age: 22 },
//     };
//   }

//   render() {
//     const { count, person } = this.state;

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <Person person={person} />
//           Button Count: {count}
//           <button onClick={() => this.setState({ count: count + 1 })}>
//             Increase Count
//           </button>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

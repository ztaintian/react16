import React, { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import BasicRoute from './router/index.js'
function App() {
  const [isShow, setIsShow] = useState(true);
  const [list, setList] = useState([
    {
      id: 1,
      name: "11",
    },
  ]);
  const onToggleShow = () => {
    setIsShow(!isShow);
    console.log("list", list);
    setList([
      ...list,
      ...[
        {
          id: 2,
          name: "22",
        },
      ],
    ]);
  };
  return (
    <BrowserRouter>
      <BasicRoute/>
    </BrowserRouter>
    // <div className="App">
    //   {list.map((item) => {
    //     return <div key={item.id}>{item.name}</div>;
    //   })}
    //   <button onClick={onToggleShow}>点击</button>
    //   {isShow ? <div>前端</div> : null}
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     {/* <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p> */}
    //     {/* <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a> */}
    //     {/* <Index /> */}
    //   </header>
    // </div>
  );
}

export default App;

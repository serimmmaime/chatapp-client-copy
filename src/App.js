import { useEffect } from "react";
import "./App.css";
import socket from "./server";


function App() {
useEffect(()=> {
  askUserName();

}, []);
  const askUserName=()=>{
    const userName = prompt("당신의 이름을 입력하세요.")
    console.log("uuu", userName);

    socket.emit("login",userName,(res)=>{
      console.log("Res", res);
    });
  };
  return (
    <div>
      <div className="App"></div>
    </div>
  );
}


export default App;

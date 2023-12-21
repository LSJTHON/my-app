// 시간 띄우기
import React from "react";


function Clock(props){
  return (
    <div>
      <h1>리액트 죽어!</h1>
      <h2>현재시간 : {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;
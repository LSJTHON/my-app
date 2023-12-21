//library라는 이름의 리액트 함수 컴포넌트

import React from "react";
import Book from "./Book";

function Library(props){
  return (
    <div>
      <Book name = "처음만난 파이썬" numOfPage = {300} />
      <Book name = "처음만난 AWS" numOfPage = {400} />
      <Book name = "처음만난 리액트"  numOfPage = {500} />
    </div>
  );
}
export default Library;
import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "이인제",
    comment : "안녕하세요. 안녕하세요",
  },
  {
    name: "이인제",
    comment : "안녕하세요. 안녕하세요2",
  },
  {
    name: "이인제",
    comment : "안녕하세요. 안녕하세요3",
  },
  {
    name: "이인제",
    comment : "안녕하세요. 안녕하세요4",
  },
  {
    name: "이인제",
    comment : "안녕하세요. 안녕하세요5",
  },
  {
    name: "이인제",
    comment : "안녕하세요. 안녕하세요6",
  },
  {
    name: "이인제",
    comment : "안녕하세요. 안녕하세요7",
  },
]

function CommentList(props){
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment} />
        );
      })}
    </div>
  );
}
export default CommentList;


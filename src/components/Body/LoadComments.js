import dateFormat from "dateformat";
import React from "react";
import Loading from "./Loading";

const Loadcommets = (props) => {
  if (props.commentisLoading) {
    return <Loading />;
  } else {
    return props.comment.map((comment) => {
      return (
        <div key={comment.id}>
          <h4>{comment.author}</h4>
          <span className="comment-date">
            {dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}
          </span>
          <p>{comment.comment}</p>
          <strong>Rating: {comment.rating}</strong>
        </div>
      );
    });
  }
};

export default Loadcommets;

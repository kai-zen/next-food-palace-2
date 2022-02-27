import React from 'react';
import { useSelector } from 'react-redux';
import SingleComment from './SingleComment';

const CommentsTabPanel = () => {
  let comments = useSelector((state) => state.comments.comments);
  comments = comments.filter((comment) => {
    return !comment.isDeleted;
  });
  const reversed = [...comments].reverse();
  return (
    <>
      {reversed.map((comment) => {
        return <SingleComment comment={comment} key={comment.id} />;
      })}
    </>
  );
};

export default CommentsTabPanel;

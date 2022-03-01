import React from 'react';
import SingleComment from './SingleComment';

const CommentsTabPanel = ({ comments }) => {
  const currentComments = comments.filter((comment) => {
    return !comment.isDeleted;
  });
  const reversed = [...currentComments].reverse();
  return (
    <>
      {reversed.map((comment) => {
        return <SingleComment comment={comment} key={comment.id} />;
      })}
    </>
  );
};

export default CommentsTabPanel;

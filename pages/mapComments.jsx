import { Paper } from '@mui/material';
import { useState } from 'react';

export default function MyShoppingCart() {
  const [comments, setComments] = useState(['hi']);
  const handle = async () => {
    const response = await fetch('http://localhost:3000/api/comments');
    const data = await response.json();
    setComments(data.comments);
    console.log(data.comments);
  };
  return (
    <Paper
      sx={{
        width: { sm: 'calc(100% - 260px)' },
        ml: { sm: '260px' },
        pt: '88px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 'calc(100vh - 68px)',
      }}
    >
      {comments.length}
      <button onClick={handle}>Click</button>
    </Paper>
  );
}

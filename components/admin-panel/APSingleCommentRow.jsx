import { Delete } from '@mui/icons-material';
import { IconButton, TableCell, TableRow } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

const APSingleCommentRow = ({ comment }) => {
  const [deleteColor, setDeleteColor] = useState(
    comment.isDeleted ? 'error' : 'action'
  );
  const deleteColorToggler = () => {
    if (deleteColor === 'action') {
      setDeleteColor('error');
    } else {
      setDeleteColor('action');
    }
  };

  return (
    <TableRow
      key={comment.id}
      sx={{
        '&:last-child td, &:last-child th': { border: 0 },
      }}
    >
      <TableCell component="th" scope="row" align="center">
        {comment.author}
      </TableCell>
      <TableCell align="center">{comment.chip}</TableCell>
      <TableCell align="center">{comment.body}</TableCell>
      <TableCell align="center">
        <IconButton
          onClick={async () => {
            deleteColorToggler();
            await axios(`/api/comments/${comment.id}`);
          }}
        >
          <Delete color={deleteColor} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default APSingleCommentRow;

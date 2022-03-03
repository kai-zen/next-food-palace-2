import { Delete, Person } from '@mui/icons-material';
import { IconButton, TableCell, TableRow } from '@mui/material';
import { useState } from 'react';

const APSingleUserRow = ({ user }) => {
  const [deleteColor, setDeleteColor] = useState(
    user.isDeleted ? 'error' : 'action'
  );
  const [adminColor, setAdminColor] = useState(
    user.isAdmin ? 'info' : 'action'
  );
  const deleteColorToggler = () => {
    if (deleteColor === 'action') {
      setDeleteColor('error');
    } else {
      setDeleteColor('action');
    }
  };
  const adminColorToggler = () => {
    if (adminColor === 'action') {
      setAdminColor('info');
    } else {
      setAdminColor('action');
    }
  };
  return (
    <TableRow
      key={user.id}
      sx={{
        '&:last-child td, &:last-child th': { border: 0 },
      }}
    >
      <TableCell component="th" scope="row" align="center">
        {user.firstName}
      </TableCell>
      <TableCell align="center">{user.lastName}</TableCell>
      <TableCell align="center">{user.email}</TableCell>
      <TableCell align="center">
        <IconButton
          onClick={() => {
            adminColorToggler();
          }}
        >
          <Person color={adminColor} />
        </IconButton>
      </TableCell>
      <TableCell align="center">
        <IconButton
          onClick={() => {
            deleteColorToggler();
          }}
        >
          <Delete color={deleteColor} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default APSingleUserRow;

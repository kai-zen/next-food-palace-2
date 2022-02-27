import { Close } from '@mui/icons-material';
import { Alert, Collapse, IconButton, Stack } from '@mui/material';
import React, { useState } from 'react';

const InfoAlert = () => {
  const [open, setOpen] = useState(true);
  return (
    <Stack sx={{ width: '80%', mt: '50px' }} spacing={2}>
      <Collapse in={open}>
        <Alert
          severity="info"
          variant="filled"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <Close fontSize="inherit" />
            </IconButton>
          }
        >
          Admin email:&nbsp;&nbsp;&nbsp;&nbsp;razipurali@gmail.com <br />
          Admin password:&nbsp;&nbsp;&nbsp;&nbsp;12345678
        </Alert>
      </Collapse>
    </Stack>
  );
};

export default InfoAlert;

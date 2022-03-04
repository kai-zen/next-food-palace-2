import {
  Button,
  Dialog,
  DialogContent,
  Rating,
  TextField,
} from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
// import { useSelector } from 'react-redux';

const AddCommentDialog = ({
  open,
  setOpen,
  // foodId,
  // chip,
  setOpenSnack,
  // comments,
}) => {
  // const loggedInUser = useSelector((state) => state.users.loggedInUser);
  const [rateInForm, setRateInForm] = useState(0);
  const [body, setBody] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(false);
    // dispatch(
    //   addComment({
    //     id: comments.length,
    //     foodId,
    //     author: loggedInUser[0].firstName,
    //     body: body,
    //     chip,
    //     rate: rateInForm,
    //     isDeleted: false,
    //   })
    // );
    setOpenSnack(true);
  };
  return (
    <Dialog
      onClose={() => {
        setOpen(false);
      }}
      open={open}
    >
      <DialogContent>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            rows={4}
            multiline
            required
            fullWidth
            id="body"
            label="Comment text"
            name="body"
            autoFocus
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
          <Rating
            name="rate"
            precision={0.5}
            value={rateInForm}
            onChange={(e) => {
              setRateInForm(e.target.value);
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={body.length === 0}
          >
            Add comment
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AddCommentDialog;

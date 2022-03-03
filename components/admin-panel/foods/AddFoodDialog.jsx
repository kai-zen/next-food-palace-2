import { Dialog, DialogContent } from '@mui/material';
import AddFoodFormik from './AddFoodFormik';

const AddFoodDialog = ({ open, setOpen, allFoods }) => {
  return (
    <Dialog
      onClose={() => {
        setOpen(false);
      }}
      open={open}
    >
      <DialogContent>
        <AddFoodFormik setOpen={setOpen} allFoods={allFoods} />
      </DialogContent>
    </Dialog>
  );
};

export default AddFoodDialog;

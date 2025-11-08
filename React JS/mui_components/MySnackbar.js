import React, { useState } from 'react';
import { Button, Snackbar } from '@mui/material';

function MySnackbar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(true);
  const handleClose = (_, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClick}>Show Snackbar</Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} message="Note archived" />
    </div>
  );
}

export default MySnackbar;

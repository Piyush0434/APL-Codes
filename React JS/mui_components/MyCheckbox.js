import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

function MyCheckbox() {
  return <FormControlLabel control={<Checkbox />} label="Accept terms and conditions" />;
}

export default MyCheckbox;

import React from 'react';
import Grid from '@mui/material/Grid';

function MyGrid() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <div style={{ backgroundColor: 'lightblue', height: 100 }}>Item 1</div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div style={{ backgroundColor: 'lightgreen', height: 100 }}>Item 2</div>
      </Grid>
    </Grid>
  );
}

export default MyGrid;

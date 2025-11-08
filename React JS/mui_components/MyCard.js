import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function MyCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Card Title</Typography>
        <Typography variant="body2" color="text.secondary">
          This is some card content.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MyCard;

import React from 'react';
import { Paper, Typography } from '@mui/material/';

const Slice = ({ title, description }) => {
  return (
    <Paper elevation={3} style={{ padding: 16, marginBottom: 16 }}>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body1">{description}</Typography>
    </Paper>
  );
}

export default Slice;
import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LoadingIndicator() {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.1)', // Optional: Set background color
          '& .MuiLinearProgress-bar': {
            backgroundColor: 'hsl(13, 88%, 44%)', // Set the progress bar color using HSL
          },
        }}
      />
    </Box>
  );
}
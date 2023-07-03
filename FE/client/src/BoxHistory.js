import React from 'react';
import { Box, Typography } from '@mui/material';

const BeautifulBox = ({ data }) => {
  return (
    <Box sx={{ padding: 2, border: '1px solid #ccc', borderRadius: 4, backgroundColor: '#f5f5f5' }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>{data.tipecompress}</Typography>
      <Typography variant="body1" sx={{ marginBottom: 1, textAlign: 'left', wordWrap: 'break-word' }}>
        Algoritma: {data.algoritma}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 1, textAlign: 'left', wordWrap: 'break-word' }}>
        Input: {data.input}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 1, textAlign: 'left', wordWrap: 'break-word' }}>
        Tipe: {data.pilihan}
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'left', wordWrap: 'break-word' }}>
        Output: {data.output}
      </Typography>
    </Box>
  );
};

export default BeautifulBox;

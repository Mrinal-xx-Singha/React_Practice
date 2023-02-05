import { Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { VolumeDown } from '@mui/icons-material';
import Slider from '@mui/material/Slider';
import { VolumeUp } from '@mui/icons-material';
import React from 'react'
import {Card} from '@mui/material';

const Player = () => {
  return (
   <>
  <Card variant="outlined" sx={{ 
    bgcolor:'background.paper',
    boxShadow:1,
    borderRadius:2,
    p:2,
    minWidth:300,
    minHeight:200
}}>
  <Typography variant='h2'>
    Mrinal Singha
  </Typography>
  <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
<VolumeDown />
<Slider aria-label="Volume" />
<VolumeUp />
</Stack>
</Card>
   </>
  )
}

export default Player

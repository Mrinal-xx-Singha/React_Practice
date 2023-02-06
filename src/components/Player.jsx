import { Grid, Typography } from '@mui/material';
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
  <Typography variant='h2' >
    Mrinal Singha
  </Typography>
  <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
<VolumeDown />
<Slider aria-label="Volume" />
<VolumeUp />
</Stack>
</Card>
<Box sx={{ width:300,height:400, background:'black' ,p:4, m:4 , fontSize:20}}>
  <Typography variant='h2' color='#fff'sx={{gap:2,boxShadow:1}}>
    This is to try out the box in material ui components
    </Typography>
</Box>
<Box p='2' m='2'>
  <Grid xs={6} md={4} width='20' bgcolor='black' p='3' m='3'>
    1
  </Grid>
</Box>
   </>
  )
}

export default Player

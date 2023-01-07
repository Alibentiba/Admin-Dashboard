import React from 'react'
import { IoIosArrowUp } from 'react-icons/io';
import Box from '@mui/material/Box';
import { Stack, Typography } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';




const Widget = ({title,percentag,number,icone,bgcolor,color}) => {
  return (
    <Box flexDirection='column' border='solid 1px white' width="25%" borderRadius='5px' px='5px' py='8px'>
   
    <Stack  direction='row' alignItems='center' justifyContent='space-between' sx={{width:'100%'}}>
             <Typography variant='h6' textTransform='uppercase' color='white'>
                {title}
                </Typography>
                
             <Typography  variant='body1' color='green'>
               {percentag}%
            </Typography>
    </Stack>


    <Stack fontSize='500' color='white'>
        
            <Typography variant='h6'>
            {number}
            </Typography>
    </Stack>

    <Stack  direction='row' alignItems='center' justifyContent='space-between' sx={{width:'100%'}}>
        <Typography  color="white" variant='body1' >See All {title}</Typography>
        <Typography 
        style={{background:bgcolor,color:color}}
         className='rounded-md p-2'>
            {icone}
            </Typography>
    </Stack>

  </Box>
  )
}

export default Widget
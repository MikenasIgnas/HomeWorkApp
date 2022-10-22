import { Box, Button, Paper } from '@mui/material';
import React from 'react';
import { get } from '../../../Plugins/http';

type PostProps = {

    title:string,
    photo:string,
    _id: string
    postRemoved: (_id:string) => void
};
const UsersPost = ({
 title, photo, _id, postRemoved,
}:PostProps) => {
    const deletePost = async () => {
        await get(`deletePost/${_id}`);
        postRemoved(_id);
    };
   return (
     <Paper sx={{
              width: '300px',
              padding: '20px',
              mb: '20px',
          }}
     >
       <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

         <Box
           sx={{
                  height: '100px',
                  width: '100px',
                  border: '2px solid black',
              }}
           component="img"
           alt="error"
           src={photo}
         />
         <Box>
           <Box>
             Title:
             {' '}
             {title}
           </Box>
           <Box>
             User:
             Username
           </Box>
           <Button onClick={deletePost} variant="outlined">Delete</Button>
         </Box>
       </Box>
     </Paper>
        );
};

export default UsersPost;

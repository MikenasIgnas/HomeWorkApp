import {
 Box, Paper, Button, TextField,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { post } from '../../../Plugins/http';

const CreatePost = () => {
  const postPhotoRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const postTitleRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const navigate = useNavigate();
  const secret = localStorage.getItem('secret');
  const handleCreate = async () => {
    if (postPhotoRef.current.value !== '' && postTitleRef.current.value !== '') {
      const postData = {
        title: postTitleRef.current.value,
        photo: postPhotoRef.current.value,
        secret,
      };

       await post('createPost', postData);
      postTitleRef.current.value = '';
      postPhotoRef.current.value = '';
      navigate('/AllPosts');
    }
  };

  const handleCancel = () => {
    navigate('/AllPosts');
  };
  return (
    <Box>
      <Box sx={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
      >
        <Paper
          elevation={6}
          sx={{
            width: '400px',
            height: '500px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box sx={{
            height: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          >
            <TextField inputRef={postPhotoRef} placeholder="photo URL" type="text" label="photo" />
            <TextField inputRef={postTitleRef} placeholder="Title" type="text" label="Title" />
            <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100px',
            justifyContent: 'space-between',
          }}
            >
              <Button onClick={handleCancel} variant="contained">Cancel</Button>
              <Button onClick={handleCreate} variant="contained">Create</Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
      );
};

export default CreatePost;

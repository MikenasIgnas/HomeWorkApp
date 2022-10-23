import React from 'react';
import Typography from '@mui/material/Typography';
import {
  Avatar,
 Box, Button, Paper, TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { get, post } from '../../Plugins/http';

const HomePage = () => {
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [photo, setPhoto] = React.useState('');
  const secret = localStorage.getItem('secret');
  const photoRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const navigate = useNavigate();
  React.useEffect(() => {
    (async () => {
      const response = await get(`getUserData/${secret}`);
      if (!response.error) {
        setEmail(response.data.email);
        setUsername(response.data.username);
      }
      const userPhoto = await get(`getUserPhoto/${secret}`);
      setPhoto(userPhoto.data.photo);
    })();
  }, []);
  const updatePhoto = async () => {
    const updatedPhoto = photoRef.current.value;
    if (photoRef.current.value !== '') {
      const res = await post('updatePhoto', {
        photo: updatedPhoto,
        secret,
      });
      setPhoto(res.newPhoto.photo);
      photoRef.current.value = '';
    }
    };

    const showAllPosts = () => {
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
            <Avatar
              alt={username[0]}
              src={photo}
              sx={{ width: 56, height: 56 }}
            />
            <Typography variant="h4">
              {`Welcome  ${username}`}
            </Typography>
            <Typography>{email}</Typography>
            <TextField placeholder="photo URL" type="text" inputRef={photoRef} label="Update Your Photo" />
            <Button onClick={updatePhoto}>Update Photo</Button>
            <Button onClick={showAllPosts} variant="contained">All Posts</Button>
          </Box>
        </Paper>
      </Box>
    </Box>
    );
};

export default HomePage;

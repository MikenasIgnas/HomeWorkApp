import {
 Box, Paper, TextField, Button, Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { post } from '../../Plugins/http';

const RegisterPage = () => {
    const emailRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const passwordRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const repeatPasswordRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const userNameRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
    const [errorMsg, setErrorMsg] = React.useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const registerData = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            repeatPassword: repeatPasswordRef.current.value,
            username: userNameRef.current.value,
            photo: '',
        };
            const res = await post('userRegistration', registerData);
            if (!res.error) {
              navigate('/LoginPage');
            } else {
              setErrorMsg(res.message);
            }
    };
    return (
      <Box sx={{
                  width: '100%',
                  height: '100vh',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
              }}
      >

        <Paper
          elevation={5}
          component="form"
          onSubmit={handleSubmit}
          sx={{
                  width: '400px',
                  height: '600px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '20px',
              }}
        >
          <Typography variant="h4">Register</Typography>
          <TextField type="text" inputRef={emailRef} label="Email" />
          <TextField type="text" inputRef={userNameRef} label="User Name" />
          <TextField type="password" inputRef={passwordRef} label="Password" />
          <TextField type="password" inputRef={repeatPasswordRef} label="Repeat Password" />
          <Button type="submit" variant="contained">Register</Button>
          {errorMsg && <Typography color="red" variant="h6">{errorMsg}</Typography>}
          <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-evenly' }}>
            <Typography variant="h6">Already Have an account?</Typography>
            <Button variant="text" href="/LoginPage">Log In</Button>
          </Box>
        </Paper>
      </Box>
        );
};

export default RegisterPage;

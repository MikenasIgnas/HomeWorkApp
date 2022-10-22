import {
    Box, Paper, TextField, Button, Typography,
   } from '@mui/material';
   import React from 'react';
import { useNavigate } from 'react-router-dom';
import { post } from '../../Plugins/http';

   const LoginPage = () => {
       const emailRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
       const passwordRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
       const [msg, setMsg] = React.useState('');
       const navigate = useNavigate();
       const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
           e.preventDefault();
           const user = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
           };
           const res = await post('logInUser', user);
           if (!res.error) {
             localStorage.setItem('secret', res.data.secret);
             navigate('/HomePage');
            } else {
              setMsg(res.message);
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
                     height: '500px',
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'center',
                     alignItems: 'center',
                     gap: '20px',
                 }}
           >
             <Typography variant="h4">Log In</Typography>
             <TextField type="text" inputRef={emailRef} label="Email" />
             <TextField type="password" inputRef={passwordRef} label="Password" />
             {msg && <Typography color="red" variant="h6">{msg}</Typography>}
             <Button type="submit" variant="contained">Log In</Button>
             <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-evenly' }}>
               <Typography variant="h6">Dont have an account?</Typography>
               <Button variant="text" href="/">Register</Button>
             </Box>
           </Paper>

         </Box>
           );
   };

   export default LoginPage;

import React, { useEffect } from 'react'
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import * as authService from "../../services/authService";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

export default function Login() {
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [usernameValidation, setUsernameValidation] = useState(null);
  const [passwordValidation, setPasswordValidation] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const {
      username,
      password
    } = Object.fromEntries(new FormData(event.currentTarget));

    authService.login(username, password)
      .then(authData => {
        userLogin(authData.accessToken);
        navigate('/');
      })
      .catch(() => {
        navigate('/404');
      });
  };

  const validateUsername = (event) => {
    
    const value = event.target.value;
  
    if (!value) {
        setUsernameValidation({
          error: 'Username cannot be empty'
        })
    } else {
      setUsernameValidation(null);
    }
  }

  const validatePassword = (event) => {
    
    const value = event.target.value;
  
    if (!value) {
        setPasswordValidation({
          error: 'Password cannot be empty'
        })
    } else {
      setPasswordValidation(null);
    }
  }


  return (
    <Container component='section' sx={{
      backgroundColor: 'white',
      textAlign: 'center',
      marginTop: 2
    }}>
      <Typography variant='h3'>Login</Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          onBlur={validateUsername}
          error={usernameValidation && usernameValidation.error}
          helperText={usernameValidation && usernameValidation.error ? usernameValidation.error : ''}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onBlur={validatePassword}
          error={passwordValidation && passwordValidation.error }
          helperText={passwordValidation && passwordValidation.error ? passwordValidation.error : ''}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={usernameValidation || passwordValidation}
        >
          Sign In
        </Button>
      </Box>
    </Container>
  )
}
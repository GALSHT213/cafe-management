import React, { useEffect } from 'react'
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import * as authService from "../../services/authService";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

// const loginUrl = 'http://localhost:8080/auth/realms/cafe-management/protocol/openid-connect/auth?client_id=cafe-management-server&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Fapi%2Fauth%2Fcallback&response_type=code'

export default function Login() {
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

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
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </Box>
    </Container>
  )
}
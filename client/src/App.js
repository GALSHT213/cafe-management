import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import Home from './components/home/Home';
import Menu from './components/menu/Menu'
import Tenants from './components/tenants/Tenants'
import Navigation from './components/layout/Navigation';
import Login from './components/authentication/Login';
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useRoles } from "./hooks/useRoles";
import { AuthContext } from './contexts/AuthContext';
import LoginGuard  from './guards/LoginGuard';
import TenantsGuard  from './guards/TenantsGuard';

const Container = styled('div')(
  () => ({
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
    width: '100%',
    margin: '0 auto',
    height: '100vh',
    backgroundColor: '#2b2b2b'
  })
);

const ContainerContent = styled('div')(
  () => ({
    width: '50%',
    height: '100%'
  })

);

export default function App() {

  const [auth, setAuth] = useLocalStorage('auth', {});
  const [roles, setRoles] = useRoles([]);
  const userLogin = (authData) => {
    setAuth(authData);
    setRoles(authData);
  };
  

  return (
    <>
      <AuthContext.Provider value={{ user: auth, userLogin, roles }}>
        <BrowserRouter>
          <Navigation>
            <Container>
              <ContainerContent>
                <Routes>
                  <Route element={<LoginGuard />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/menu' element={<Menu />} />
                  </Route>
                  <Route element={<TenantsGuard />}>
                    <Route path='/tenants' element={<Tenants />} />
                  </Route>
                  <Route path='/login' element={<Login />} />
                </Routes>
              </ContainerContent>
            </Container>
          </Navigation>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}


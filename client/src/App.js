import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import Home from './components/home/Home';
import Menu from './components/menu/Menu'
import Navigation from './components/layout/Navigation';
import Login from './components/authentication/Login';

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
  return (
    <>
      <BrowserRouter>
        <Navigation>
          <Container>
            <ContainerContent>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/menu' element={<Menu />} />
                <Route path='/login' element={<Login />} />
              </Routes>
            </ContainerContent>
          </Container>
        </Navigation>
      </BrowserRouter>
    </>
  );
}


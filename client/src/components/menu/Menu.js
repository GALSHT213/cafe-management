import React from 'react';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import MenuTabs from './MenuTabs';

// TODO: Load from backend

const menuTabsData = [
    {
        title: 'Drinks',
        items: [
            {
                title: 'Coffee',
                price: 1.01,
            }
        ]
    },
    {
        title: 'Main dishes',
        items: [
            {
                title: 'Chicken',
                price: 10.99
            },
            {
                title: 'Bob',
                price: 3.59
            }
        ]
    },
    {
        title: 'Main dishes',
        items: [
            {
                title: 'Chicken',
                price: 10.99
            },
            {
                title: 'Bob',
                price: 3.59
            },
            {
                title: 'Bob',
                price: 3.59
            },
            {
                title: 'Bob',
                price: 3.59
            }
        ]
    }
]

const currency = 'EUR'


export default function Menu() {
    return (
        <Container sx={{
            backgroundColor: 'white',
            textAlign: 'center',
            marginTop: 2
        }}>
            <Typography variant='h3'>Menu</Typography>
            <MenuTabs menuTabs={menuTabsData} currency={currency} />
        </Container>

    );
}
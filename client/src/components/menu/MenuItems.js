import * as React from 'react';
import { Container, Box } from '@mui/system';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

export default function MenuItems({ items, currency }) {
    return (
        <Grid container spacing={2} sx={{ maxWidth: 1}}>
            {items.map((item, index) => (
                <>
                    <Grid item container xs={8} sx={{ textAlign: 'left' }}>
                        <Grid item xs={4} sx={{ textAlign: 'left' }}>
                        <Typography component='span' sx={{ padding: 1}} >{item.title}</Typography>    
                        </Grid>
                        <Divider orientation='vertical' component='span' flexItem/>
                        <Grid item xs={4} sx={{textAlign: 'right'}}>
                        <Typography component='span' sx={{ padding: 1}}>{item.price +  currency}</Typography>    
                        </Grid>                
                    </Grid>
                    <Grid item xs={4} sx={{ textAlign: 'right' }}>
                        <Button>Edit</Button>
                        <Button>Delete</Button>
                    </Grid>
                </>
            ))}
        </Grid>
    );
}

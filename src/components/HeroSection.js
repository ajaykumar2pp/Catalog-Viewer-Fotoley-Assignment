import React from 'react'
import { AppBar, Typography, Button, Toolbar, Grid } from '@mui/material'
const HeroSection = () => {
    return (
        <Grid container>
            <Grid item xs={12} sm={6} >
                <Typography variant="h3">
                    Ajay Kumar PP
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} >
Vijay Kumar PP
            </Grid>
        </Grid>
    )
}

export default HeroSection
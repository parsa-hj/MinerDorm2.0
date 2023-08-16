import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import tj from '../assets/images/tj.jpg';
import Grid from '@mui/material/Unstable_Grid2';

export default function DormCard() {
  const [value, setValue] = React.useState(2);

  return (
    <Grid container spacing={2} ml={15}>
      <Grid xs={3}>
        <Card sx={{ maxWidth: 345}}>
          <CardMedia
            sx={{ height: 200 }}
            image={tj}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Thomas Jefferson Hall
            </Typography>
            <Rating name="read-only" value={value} readOnly />
          </CardContent>
          <CardActions>
            <Button variant="contained" size="small" color="success" sx={{ backgroundColor: '#0C9A00' }}>Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
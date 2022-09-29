
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import { Card } from '@mui/material';
import { CardContent }from '@mui/material';
import {Container} from '@mui/material';

const API_URL = process.env.REACT_APP_SERVER_URL;

export default function PhoneDetail() {
  const { id } = useParams();
  const [phoneData, setPhoneData] = useState(null);

  useEffect(() => {
    axios
    .get(`${API_URL}/api/phones/${id}`)
    .then(resposne => {
        console.log(resposne.data);
        console.log(phoneData);
        setPhoneData(resposne.data)
       
        console.log(phoneData);
        
    })
    // eslint-disable-next-line
}, [id])

  return (
    <div>
      <Container sx={{ py: 8 }} maxWidth="md">

      <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        </Box>
      </Box>
   
    </Card>
      </Container>
     
    </div>
  );
}
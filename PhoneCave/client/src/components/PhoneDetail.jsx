import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import {Container} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const API_URL = process.env.REACT_APP_SERVER_URL;

function PhoneDetail() {
  const { id } = useParams();
  const [phoneData, setPhoneData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
    .get(`${API_URL}/api/phones/${id}`)
    .then(resposne => {
        console.log(resposne.data);
        console.log(phoneData);
        setPhoneData(resposne.data)
        setLoading(false)
       
        console.log(phoneData);
        
    })
    // eslint-disable-next-line
}, [id])

  return (
    <div>
      {loading && 
        <Box sx={{ display: 'flex', width:'100%', justifyContent:'center', top:'calc(50% - 93px)', position:'absolute'}}>
          <CircularProgress />
        </Box>
      }
      {!loading && 
        <Container sx={{ py: 8 }} maxWidth="md">
          <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  {phoneData[0].name} - {phoneData[0].manufacturer}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                {phoneData[0].description}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                $ {phoneData[0].price}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                {phoneData[0].screen}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                {phoneData[0].processor} Processor
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                {phoneData[0].ram} GB RAM
                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              </Box>
            </Box>
          </Card>
        </Container>
      }
    </div>
  );
}


export default PhoneDetail;
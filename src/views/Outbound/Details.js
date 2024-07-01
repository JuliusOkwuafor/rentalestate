import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import { IconPhone, IconUser } from '@tabler/icons';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { useNavigate, useParams } from 'react-router';
import { getApi, postApi } from 'views/services/api';

function DetailsOutbound() {
  const params = useParams();

  const OuboundId = params.id;
  const [callData, setCallData] = useState([]);
  const fetchInboundDetails = async () => {
    try {
      const res = await getApi(`api/phoneCall/viewlead/${OuboundId}`);
      console.log(res.data);
      setCallData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchInboundDetails();
  }, []);

  const formatCallDuration = (duration) => {
    duration = Math.round(duration);
    if (duration < 60) {
      return `${duration} seconds`;
    } else if (duration < 3600) {
      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;
      return `${minutes} minutes ${seconds > 0 ? `${seconds} seconds` : ''}`;
    } else {
      const hours = Math.floor(duration / 3600);
      const minutes = Math.floor((duration % 3600) / 60);
      const seconds = duration % 60;
      return `${hours} hours ${minutes > 0 ? `${minutes} minutes` : ''} ${seconds > 0 ? `${seconds} seconds` : ''}`;
    }
  };
  return (
    <Grid item xs={12} md={5}>
      <Card>
        <CardContent>
          <Typography variant="h5" mb="4" gutterBottom>
            Call View
          </Typography>
          <Box display={{ base: 'block', md: 'flex' }} w="100%">
            <Box width={{ base: '100%', md: '50%' }} mt={{ base: 3, md: 0 }} mr={{ base: 0, md: 3 }}>
              <Box display="flex" alignItems="center" gap={2}>
                <Box
                  width="50px"
                  height="50px"
                  borderRadius={4}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  style={{ background: '#ede7f6', color: '#5e35b1' }}
                >
                  <IconUser />
                </Box>
                <Typography fontSize="18px" color="#5e35b1">
                  Basic Information
                </Typography>
              </Box>

              <Box py={3}>
                <Box display={'flex'} gap={1} py={2}>
                  <Typography variant="h5">Call Id:</Typography>
                  <Typography style={{ color: 'black' }}>{callData?.call_id ? callData?.call_id : 'N/A'}</Typography>
                </Box>

                <Box display={'flex'} gap={1} py={2}>
                  <Typography variant="h5">Name:</Typography>
                  <Typography style={{ color: 'black' }}>{callData?.name}</Typography>
                </Box>

                <Box display={'flex'} gap={1} py={2}>
                  <Typography variant="h5">Phone Number:</Typography>
                  <Typography style={{ color: 'black' }}>{callData?.phoneNumber}</Typography>
                </Box>

                <Box display={'flex'} gap={1} py={2}>
                  <Typography variant="h5">Email Address:</Typography>
                  <Typography style={{ color: 'black' }}>{callData?.email}</Typography>
                </Box>

                <Box display={'flex'} gap={1} py={2}>
                  <Typography variant="h5">Property Type:</Typography>
                  <Typography style={{ color: 'black' }}>{callData?.property_type}</Typography>
                </Box>

                <Box display={'flex'} gap={1} py={2}>
                  <Typography variant="h5">Call Duration:</Typography>
                  <Typography style={{ color: 'black' }}>{formatCallDuration(callData?.call_duration)}</Typography>
                </Box>

                <Box display={'flex'} alignItems={'center'} gap={1} py={2}>
                  <Typography variant="h5">Call Status:</Typography>
                  <Box
                    sx={
                      callData?.call_status == 'completed'
                        ? {
                            backgroundColor: '#01B574',
                            color: 'white',
                            padding: '4px',
                            borderRadius: '5px'
                          }
                        : callData?.call_status == 'in progress'
                        ? {
                            backgroundColor: '#ECC94B',
                            color: 'white',
                            padding: '4px',
                            borderRadius: '5px'
                          }
                        : {
                            backgroundColor: '#eb7b74',
                            color: 'white',
                            padding: '4px',
                            borderRadius: '5px'
                          }
                    }
                  >
                    {callData?.call_status}
                  </Box>
                </Box>

                <Box display={'block'} gap={1} py={2}>
                  <Typography variant="h5">Call Audio Track:</Typography>
                  <Box paddingY={3}>
                    <ReactAudioPlayer src={callData?.call_recording} controls />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box width={{ base: '100%', md: '50%' }} mt={{ base: 3, md: 0 }} ml={{ base: 0, md: 3 }}>
              <Box display="flex" alignItems="center" gap={2}>
                <Box
                  width="50px"
                  height="50px"
                  borderRadius={4}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  style={{ background: '#ede7f6', color: '#5e35b1' }}
                >
                  <IconPhone />
                </Box>
                <Typography fontSize="18px" color="#5e35b1">
                  Call Logs
                </Typography>
              </Box>
              <Box py={3}>
                <Box display={'flex'} gap={1} py={2}>
                  <Typography variant="h5">Start Time:</Typography>
                  <Typography style={{ color: 'black' }}>{moment(callData?.start_date).format('h:mm A')}</Typography>
                </Box>

                <Box display={'flex'} gap={1} py={2}>
                  <Typography variant="h5">End Time:</Typography>
                  <Typography style={{ color: 'black' }}>{moment(callData?.end_date).format('h:mm A')}</Typography>
                </Box>

                <Box display={'flex'} alignItems={'center'} gap={1} py={2}>
                  <Typography variant="h5">Lead :</Typography>
                  <Box
                    sx={
                      callData?.lead_confirmed == true
                        ? {
                            backgroundColor: '#01B574',
                            color: 'white',
                            padding: '4px',
                            borderRadius: '5px'
                          }
                        : {
                            backgroundColor: '#eb7b74',
                            color: 'white',
                            padding: '4px',
                            borderRadius: '5px'
                          }
                    }
                  >
                    {callData?.lead_confirmed ? (callData?.property_type == 'personal' ? 'Lead' : 'Hot Lead') : 'No Lead'}
                  </Box>
                </Box>

                <Box display={'flex'} alignItems={'center'} gap={1} py={2}>
                  <Typography variant="h5">Call Back Later :</Typography>
                  <Box
                    sx={
                      callData?.call_back_later
                        ? {
                            backgroundColor: '#01B574',
                            color: 'white',
                            padding: '4px',
                            borderRadius: '5px'
                          }
                        : {
                            backgroundColor: '#eb7b74',
                            color: 'white',
                            padding: '4px',
                            borderRadius: '5px'
                          }
                    }
                  >
                    {callData?.call_back_later ? 'Yes' : 'No'}
                  </Box>
                </Box>

                <Box display={'flex'} flexDirection={'column'} gap={1} py={2}>
                  <Typography variant="h5">Transcript:</Typography>
                  {/* {callData.transcript &&
                    callData?.transcript.map((item, index) => {
                      return (
                        <Typography key={index} style={{ color: 'black' }}>
                          {item.speaker} : {item.message}
                        </Typography>
                      );
                    })} */}
                  {callData?.transcript}
                </Box>
                <Box display={'flex'} flexDirection={'column'} gap={1} py={2}>
                  <Typography variant="h5">Call Summary :</Typography>
                  <Typography style={{ color: 'black' }}>{callData?.call_summary ? callData?.call_summary : 'N/A'}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default DetailsOutbound;

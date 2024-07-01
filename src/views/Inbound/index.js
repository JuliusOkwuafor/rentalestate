import React, { useState, useEffect } from 'react';
import { Button, Grid, TextField, Typography, List, ListItem, Box, Divider, CircularProgress, Card, CardContent, Container } from '@mui/material';
import { getApi, postApi } from 'views/services/api';
import { documentSchema } from 'schema';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { IconActivityHeartbeat, IconHeartbeat, IconPhone, IconPlane, IconTextPlus } from '@tabler/icons';
import moment from 'moment';
import TableStyle from 'ui-component/TableStyle';
import { useNavigate } from 'react-router';

const Index = () => {
  const navigate = useNavigate();
  useEffect(() => {
    fetchCall();
  }, []);

  const [callData, setCallData] = useState([]);

  const fetchCall = async () => {
    try {
      const res = await getApi('api/llm//llmleadCalls');
      setCallData(res.data.result);
    } catch (err) {
      console.log(err);
    }
  };
  let count = 0;
  const columns = [
    {
      field: 'Call Id',
      headerName: 'Call Id',
      flex: 1,
      renderCell: (params) => {
        return <Box>{params?.row?.call_id.substring(0, 15 - 3) + '...'}</Box>;
      }
    },
    {
      field: 'Agent Id',
      headerName: 'Agent Id',
      flex: 1,
      renderCell: (params) => {
        return <Box>{params?.row?.agent_id.substring(0, 15 - 3) + '...'}</Box>;
      }
    },
    {
      field: 'Caller Number',
      headerName: 'Caller Number',
      flex: 1,
      renderCell: (params) => {
        return <Box>{params?.row?.caller_number}</Box>;
      }
    },
    {
      field: 'Lead',
      headerName: 'Lead',
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <>
              {params?.row?.call_analysis?.agent_sentiment == 'Positive' ? (
                <Box display={'flex'} alignItems={'center'} gap={1}>
                  <Box width="10px" borderRadius={'100%'} height="10px" style={{ background: '#90EE90', color: '#5e35b1' }}></Box>
                  <Typography style={{ color: '#90EE90' }}>Lead</Typography>
                </Box>
              ) : (
                <Box display={'flex'} alignItems={'center'} gap={1}>
                  <Box width="10px" borderRadius={'100%'} height="10px" style={{ background: '#850101', color: '#5e35b1' }}></Box>
                  <Typography style={{ color: '#850101' }}>No Lead</Typography>
                </Box>
              )}
            </>
          </>
        );
      }
    },
    {
      field: 'Details',
      headerName: 'Details',
      flex: 1,
      renderCell: (params) => {
        return (
          <Button
            padding={1}
            borderRadius={1}
            onClick={() => navigate(`/dashboard/inbound-calls/view/${params.row.call_id}`)}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            style={{ background: '#ede7f6', color: '#5e35b1' }}
          >
            View
          </Button>
        );
      }
    },
    {
      field: 'Date',
      headerName: 'Date',
      flex: 1,
      renderCell: (params) => {
        return <Typography style={{ color: 'black' }}>{moment(params?.row?.start_time).format('h:mm A DD-MM-YYYY')}</Typography>
      }
    },
  ];

  return (
    <Container>
      <TableStyle>
        <Card style={{ height: '750px', padding: '15px' }}>
          <Typography variant="h5" fontSize={'20px'} gutterBottom>
            Call Inbound
          </Typography>
          {callData && (
            <DataGrid
              rows={callData}
              columns={columns}
              getRowId={(row) => row?.call_id}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 }
                }
              }}
              slots={{ toolbar: GridToolbar }}
              pageSizeOptions={[5, 10]}
              slotProps={{ toolbar: { showQuickFilter: true } }}
            />
          )}
        </Card>
      </TableStyle>
    </Container>
  );
};

export default Index;

import { Box, Card, Container, Stack, Typography } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import moment from 'moment';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { getApi } from 'views/services/api';
import TableStyle from '../../ui-component/TableStyle';
// ----------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------

const NoAnswer = () => {
  // const navigate = useNavigate();
  // const user = JSON.parse(localStorage.getItem('user'));

  //-------------------------------------------
  // ----------------------------------------------------------------------

  // function for fetching all the leads data from the db

  const [badLeadData, setBadLeadData] = useState([]);
  const [filterLead, setFilterLead] = useState([]);
  const fetchCall = async () => {
    try {
      const res = await getApi('api/lead/badleads');
      setBadLeadData(res.data.data.leadsData);
    } catch (err) {
      console.log(err);
    }
  };
  const filterCallsByLeads = (badLeadData) => {
    const filteredCalls = badLeadData;

    // Define key mappings
    const keyMap = {
      caller_number: 'phoneNumber',
      caller_duration: 'call_duration',
      caller_summary: 'call_summary',
      created_at: 'created_at'
    };

    // Replace all keys in each object of the array
    const newArrayfiltered = filteredCalls.map((obj, index) => replaceAllKeys(obj, keyMap, index));
    setFilterLead(newArrayfiltered);
  };

  function replaceAllKeys(obj, keyMap) {
    const newObj = {};
    Object.keys(obj).forEach((oldKey) => {
      if (oldKey in keyMap) {
        newObj[keyMap[oldKey]] = obj[oldKey];
      } else {
        newObj[oldKey] = obj[oldKey];
      }
    });
    return newObj;
  }

  useEffect(() => {
    fetchCall();
  }, []);
  useEffect(() => {
    filterCallsByLeads(badLeadData);
  }, [badLeadData]);

  //---------------------
  const [newData, setNewData] = useState([]);
  useEffect(() => {
    updateData(filterLead);
  }, [filterLead]);
  const updateData = (filterLead) => {
    filterLead.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    setNewData(filterLead);
  };

  // Combine the arrays
  const columns = [
    {
      field: 'phoneNumber',
      headerName: 'Phone Number',
      flex: 1,
      cellClassName: 'name-column--cell name-column--cell--capitalize',
      renderCell: (params) => {
        return <Typography>{params?.value ? <a href={`tel:${params?.value}`}>{params?.value}</a> : 'N/A'}</Typography>;
      }
    },
    {
      field: 'call_duration',
      headerName: 'Call Duration',
      flex: 1,
      renderCell: (params) => {
        return <Box>{params?.value ? `${params?.value} mins` : 'N/A'}</Box>;
      }
    },
    {
      field: 'call_summary',
      headerName: 'Call Summary',
      flex: 2,
      renderCell: (params) => {
        return <Box style={{ textWrap: `wrap` }}>{params?.value ? params?.value : 'N/A'}</Box>;
      }
    },
    {
      field: 'created_at',
      headerName: 'Date',
      flex: 1,
      renderCell: (params) => {
        return <Typography style={{ color: 'black' }}>{moment(params?.row?.created_at).format('h:mm A DD-MM-YYYY')}</Typography>;
      }
    }
  ];

  return (
    <>
      <Container>
        <Stack direction="row" alignItems="center" mb={5} justifyContent={'space-between'}>
          <Typography variant="h4">No-Answer</Typography>
        </Stack>
        <TableStyle>
          <Box width="100%">
            <Card style={{ height: '600px', paddingTop: '10px' }}>
              {badLeadData && (
                <>
                  <Typography variant="h4" sx={{ margin: '2px 15px' }}>
                    Leads ( {badLeadData?.length} )
                  </Typography>
                  <DataGrid
                    rows={newData}
                    columns={columns}
                    checkboxSelection
                    getRowId={(row) => (row?._id ? row?._id : row?.call_id)}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 10 }
                      }
                    }}
                    slots={{ toolbar: GridToolbar }}
                    pageSizeOptions={[5, 20]}
                    slotProps={{ toolbar: { showQuickFilter: true } }}
                  />
                </>
              )}
            </Card>
          </Box>
        </TableStyle>
      </Container>
    </>
  );
};

export default NoAnswer;

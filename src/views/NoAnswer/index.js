import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Card, Container, Stack, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import moment from 'moment';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { deleteApi, getApi } from 'views/services/api';
import TableStyle from '../../ui-component/TableStyle';
// ----------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------

const NoAnswer = () => {
  // const navigate = useNavigate();
  // const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  //-------------------------------------------
  // ----------------------------------------------------------------------

  // function for fetching all the leads data from the db

  const [noAnswerData, setNoAnswerData] = useState([]);
  const [filterLead, setFilterLead] = useState([]);
  const fetchCall = async () => {
    try {
      const res = await getApi('api/contact/getAllAgentContacts');
      console.log(res.data.data.contacts);
      setNoAnswerData(res.data.data.contacts);
    } catch (err) {
      console.log(err);
    }
  };
  const filterCallsByLeads = (noAnswerData) => {
    const filteredCalls = noAnswerData;

    // Define key mappings
    const keyMap = {
      caller_name: 'name',
      caller_email: 'email',
      caller_phone: 'phoneNumber',
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
    filterCallsByLeads(noAnswerData);
  }, [noAnswerData]);

  //---------------------
  const [newData, setNewData] = useState([]);
  useEffect(() => {
    updateData(filterLead);
  }, [filterLead]);
  const updateData = (filterLead) => {
    // filterLead.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    setNewData(filterLead);
  };

  // Combine the arrays
  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell name-column--cell--capitalize'
    },
    {
      field: 'phoneNumber',
      headerName: 'Phone Number',
      flex: 1
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1
    },
    {
      field: 'created_at',
      headerName: 'Date',
      flex: 1,
      renderCell: (params) => {
        const returnDate = (date) => {
          console.log(date);
          const d = new Date(date);
          const dformat =
            [d.getMonth() + 1, d.getDate(), d.getFullYear()].join('/') + ' ' + [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
          return dformat;
        };
        return <Typography style={{ color: 'black' }}>{returnDate(params?.row?.created_at)}</Typography>;
      }
    },

    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      // eslint-disable-next-line arrow-body-style
      renderCell: (params) => {
        const handleDelete = async (id) => {
          const result = await deleteApi(`api/contact/deleteNoAnswerById?id=`, id);
          if (result && result.status === 200) {
            toast.success('file Deleted successful');
            setTimeout(() => {
              navigate(0);
            }, 700);
          } else if (result && result.response.status === 404) {
            toast.error('file Not Found');
          }
        };

        return (
          <IconButton aria-label="delete" onClick={() => handleDelete(params.row._id)}>
            <DeleteIcon />
          </IconButton>
        );
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
              {noAnswerData && (
                <>
                  <Typography variant="h4" sx={{ margin: '2px 15px' }}>
                    Not answered calls ( {noAnswerData?.length} )
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
                    slotProps={{ toolbar: { showQuickFilter: true, printOptions: { disableToolbarButton: true } } }}
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

import CallIcon from '@mui/icons-material/Call';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Button, Card, Container, Stack, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { alpha, styled } from '@mui/material/styles';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import moment from 'moment';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteApi, getApi } from 'views/services/api';
import TableStyle from '../../ui-component/TableStyle';
import Iconify from '../../ui-component/iconify';
import AddLead from './AddLead.js';
import CallDialog from './Components/LeadActivityDialogs/CallDialog';
import SendMailDialog from './Components/LeadActivityDialogs/sendMailDialog';
import EditLead from './EditLead';
import DeleteLead from './UploadCsvLead';
import ViewLead from './ViewLead';
// ----------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right'
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0'
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5)
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
      }
    }
  }
}));

const OutboundLead = () => {
  const navigate = useNavigate();
  const [openAdd, setOpenAdd] = useState(false);
  const [openView, setOpenView] = useState(false);
  const [viewData, setViewData] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openSendMail, setOpenSendMail] = useState(false);
  const [openCall, setOpenCall] = useState(false);
  const [leadData, setLeadData] = useState([]);
  const [propsData, setPropsData] = useState([]);
  const [leadId, setLeadId] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));

  //-------------------------------------------
  // ----------------------------------------------------------------------

  // function for fetching all the leads data from the db

  const [callData, setCallData] = useState([]);
  const [filterLead, setFilterLead] = useState([]);
  const fetchCall = async () => {
    try {
      const res = await getApi('api/phoneCall/getQualifiedLeads');
      console.log(res.data.Leads);
      setCallData(res.data.Leads);
    } catch (err) {
      console.log(err);
    }
  };
  const filterCallsByAgentSentiment = () => {
    // Filter calls with positive agent sentiment
    // const filteredCalls = callData.filter((call) => {
    //   if (call.call_analysis && call.call_analysis.agent_sentiment === 'Positive') {
    //     return true;
    //   }
    //   return false;
    // });
    const filteredCalls = callData;

    // Define key mappings
    // caller_number: 'phoneNumber',
    const keyMap = {
      caller_name: 'name',
      caller_email: 'email_address',
      created_at: 'created_at'
    };

    // Replace all keys in each object of the array
    const newArrayfiltered = filteredCalls.map((obj, index) => replaceAllKeys(obj, keyMap, index));
    setFilterLead(newArrayfiltered);
  };

  function replaceAllKeys(obj, keyMap, index) {
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
    filterCallsByAgentSentiment();
  }, [callData]);

  //---------------------
  let count = 0;
  const [newData, setNewData] = useState([]);
  useEffect(() => {
    updateData();
  }, [filterLead]);
  const updateData = () => {
    filterLead.sort((a, b) => new Date(a.start_date) - new Date(b.start_date));
    setNewData(filterLead);
  };

  // Combine the arrays
  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell name-column--cell--capitalize',
      renderCell: (params) => {
        const handleFirstNameClick = () => {
          setViewData(params?.row);
          setOpenView(true);
          // navigate(`/dashboard/outbound-calls/view/${params?.row._id ? params?.row._id : params?.row.call_id}`);
        };

        return <Box onClick={handleFirstNameClick}>{params?.value ? params?.value : 'No Name'}</Box>;
      }
    },
    {
      field: 'email_address',
      headerName: 'Email',
      flex: 1,
      renderCell: (params) => {
        return <Box>{params?.value ? params?.value : 'N/A'}</Box>;
      }
    },
    // {
    //   field: 'phoneNumber',
    //   headerName: 'Phone Number',
    //   flex: 1,
    //   renderCell: (params) => {
    //     return <Box>{params?.value ? params?.value : 'N/A'}</Box>;
    //   }
    // },
    {
      field: 'created_at',
      headerName: 'Date',
      flex: 1,
      renderCell: (params) => {
        const returnDate = (date) => {
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
          const result = await deleteApi(`api/phoneCall/deleteQualifiedLeadsById?id=`, id);
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
      <ViewLead open={openView} data={viewData} handleClose={() => setOpenView(false)} />
      <Container>
        <Stack direction="row" alignItems="center" mb={5} justifyContent={'space-between'}>
          <Typography variant="h4">Outbound-Lead-Management</Typography>
        </Stack>
        <TableStyle>
          <Box width="100%">
            <Card style={{ height: '600px', paddingTop: '10px' }}>
              {newData && (
                <>
                  <Typography variant="h4" sx={{ margin: '2px 15px' }}>
                    Leads ( {newData?.length} )
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

export default OutboundLead;

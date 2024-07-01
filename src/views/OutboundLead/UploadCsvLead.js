import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import Papa from 'papaparse';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Image } from '@mui/icons-material';
import { toast } from 'react-toastify';
import { postApi } from 'views/services/api';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
});

const UploadCsvLead = ({ open, handleClose }) => {
  const [uploadFiles , setUploadFiles] = useState(null)
  const [fileName, setFileName] = useState('');
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setUploadFiles(file)
    }
  };

  const HandleUpload = async () => {
    try {
      const formData = new FormData();
      // setIsLoding(true);
      formData.append('file' , uploadFiles)
      let response = await postApi('api/phoneCall/bulkImport', formData);
      if (response.status === 200) {
        handleClose();
        toast.success('Csv Uploaded Successfully');
      } else {
        toast.error(response?.response?.data?.msg);
      }
    } catch (e) {
      console.log(e.response?.data?.msg);
    } finally {
      // setIsLoding(false);
    }
  };
  return (
    <Dialog maxWidth={'xs'} fullWidth={true} open={open} onClose={handleClose}>
      <DialogTitle>Upload Csv</DialogTitle>
      <DialogContent display="flex">
        <Box display="flex" flexDirection={'column'} alignItems={'start'}>
          <p>Upload Leads for Outbound Calls</p>
          <Button component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUploadIcon />}>
            Upload file
            <input type="file" accept=".csv" style={{ display: 'none' }} onChange={handleFileUpload} />
          </Button>

          {fileName && <p>Uploaded Csv: {fileName}</p>}
          <Typography my={3}>CSV FORMAT</Typography>
          <Box component="img" src={require('../../assets/images/formatcsv.png')} sx={{ width: 350 }}></Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button color="primary"  onClick={HandleUpload} variant="contained">
          Upload
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UploadCsvLead;

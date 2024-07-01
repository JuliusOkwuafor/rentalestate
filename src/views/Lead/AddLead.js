/* eslint-disable react/prop-types */
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { FormControl, FormLabel, Grid, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import ClearIcon from '@mui/icons-material/Clear';
import { useFormik } from 'formik';
import { postApi } from 'views/services/api';
import * as yup from 'yup';
import moment from 'moment';
import { toast } from 'react-toastify';
import Palette from '../../ui-component/ThemePalette';
import { leadSchema } from 'schema';

const AddLead = (props) => {
  const { open, handleClose } = props;

  const initialValues = {
    // Lead Information:
    leadName: '',
    leadEmail: '',
    leadPhoneNumber: ''
  };

  const AddData = async (values) => {
    try {
      // setIsLoding(true);
      console.log(values);
      let response = await postApi('api/phoneCall/sigleCallUpload', values);
      if (response.status === 200) {
        formik.resetForm();
        toast.success('Outbound added successfully');
      }
    } catch (e) {
      console.log(e);
    } finally {
      // setIsLoding(false);
    }
  };
  const formik = useFormik({
    initialValues,
    validationSchema: leadSchema,
    onSubmit: async (values) => {
      console.log('hey');
      AddData(values);
      handleClose();
    }
  });

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description">
        <DialogTitle
          id="scroll-dialog-title"
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Typography variant="h6">Add New Outbound</Typography>
          <Typography>
            <ClearIcon onClick={handleClose} style={{ cursor: 'pointer' }} />
          </Typography>
        </DialogTitle>
        <DialogContent dividers>
          <form>
            <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
              {/* Basic Lead Information */}
              <Typography style={{ marginBottom: '15px' }} variant="h6">
                Basic Lead Information
              </Typography>
              <Grid container rowSpacing={3} columnSpacing={{ xs: 0, sm: 5, md: 4 }}>
                <Grid item xs={12} sm={4} md={6}>
                  <FormLabel>Lead Name</FormLabel>
                  <TextField
                    id="leadName"
                    name="leadName"
                    label=""
                    size="small"
                    fullWidth
                    placeholder="Enter Name"
                    value={formik.values.leadName}
                    onChange={formik.handleChange}
                    error={formik.touched.leadName && Boolean(formik.errors.leadName)}
                    helperText={formik.touched.leadName && formik.errors.leadName}
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={6}>
                  <FormLabel>Lead Phone Number</FormLabel>
                  <TextField
                    id="leadPhoneNumber"
                    name="leadPhoneNumber"
                    type="number"
                    size="small"
                    fullWidth
                    placeholder="Enter Number"
                    value={formik.values.leadPhoneNumber}
                    onChange={formik.handleChange}
                    error={formik.touched.leadPhoneNumber && Boolean(formik.errors.leadPhoneNumber)}
                    helperText={formik.touched.leadPhoneNumber && formik.errors.leadPhoneNumber}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <FormLabel>Lead Email</FormLabel>
                  <TextField
                    id="leadEmail"
                    name="leadEmail"
                    label=""
                    size="small"
                    fullWidth
                    placeholder="Enter Email"
                    value={formik.values.leadEmail}
                    onChange={formik.handleChange}
                    error={formik.touched.leadEmail && Boolean(formik.errors.leadEmail)}
                    helperText={formik.touched.leadEmail && formik.errors.leadEmail}
                  />
                </Grid>
              </Grid>
            </DialogContentText>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Cancel
          </Button>
          <Button
            onClick={formik.handleSubmit}
            variant="contained"
            sx={{
              backgroundColor: Palette.info,
              '&:hover': { backgroundColor: Palette.infoDark }
            }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddLead;

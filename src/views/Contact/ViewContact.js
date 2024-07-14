import ClearIcon from '@mui/icons-material/Clear';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import Palette from '../../ui-component/ThemePalette';

const ViewContact = (props) => {
  const { open, handleClose, data } = props;

  const returnDate = (date) => {
    const d = new Date(date);
    const dformat =
      [d.getMonth() + 1, d.getDate(), d.getFullYear()].join('/') + ' ' + [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
    return dformat;
  };

  console.log({ data });

  return (
    <Dialog open={open} fullWidth onClose={handleClose} aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description">
      <DialogTitle
        id="scroll-dialog-title"
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Typography style={{ textTransform: 'capitalize' }} variant="h2">
          {data?.name}
        </Typography>
        <Typography>
          <ClearIcon onClick={handleClose} style={{ cursor: 'pointer' }} />
        </Typography>
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
          {/* Basic Lead Information */}
          <Typography style={{ marginBottom: '15px' }} variant="h4">
            Information
          </Typography>
          <Grid style={{ marginBottom: '15px' }} container rowSpacing={3} columnSpacing={{ xs: 12 }}>
            <Grid item xs={4}>
              <Typography style={{ fontWeight: 'bold' }} variant="p">
                Email
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="p">{data?.email}</Typography>
            </Grid>
          </Grid>
          <Grid style={{ marginBottom: '15px' }} container rowSpacing={3} columnSpacing={{ xs: 12 }}>
            <Grid item xs={4}>
              <Typography style={{ fontWeight: 'bold' }} variant="p">
                Phone Number
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="p">{data?.phoneNumber}</Typography>
            </Grid>
          </Grid>
          <Grid style={{ marginBottom: '15px' }} container rowSpacing={3} columnSpacing={{ xs: 12 }}>
            <Grid item xs={4}>
              <Typography style={{ fontWeight: 'bold' }} variant="p">
                Call Duration
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="p">{parseFloat(data?.call_duration).toFixed(2)}</Typography>
            </Grid>
          </Grid>
          <Grid style={{ marginBottom: '15px' }} container rowSpacing={3} columnSpacing={{ xs: 12 }}>
            <Grid item xs={4}>
              <Typography style={{ fontWeight: 'bold' }} variant="p">
                Call Summary
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="p">{data?.call_summary}</Typography>
            </Grid>
          </Grid>
          <Grid style={{ marginBottom: '15px' }} container rowSpacing={3} columnSpacing={{ xs: 12 }}>
            <Grid item xs={4}>
              <Typography style={{ fontWeight: 'bold' }} variant="p">
                Call Date
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="p">{returnDate(data?.created_at)}</Typography>
            </Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          variant="contained"
          sx={{
            backgroundColor: Palette.info,
            '&:hover': { backgroundColor: Palette.infoDark }
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ViewContact;

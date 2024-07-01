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

const ViewLead = (props) => {
  const { open, handleClose, data } = props;

  console.log({ data });

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description">
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
            Basic Information
          </Typography>
          <Grid style={{ marginBottom: '15px' }} container rowSpacing={3} columnSpacing={{ xs: 12 }}>
            <Grid item xs={4}>
              <Typography style={{ fontWeight: 'bold' }} variant="p">
                Email
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="p">{data?.email_address}</Typography>
            </Grid>
          </Grid>
          <Grid style={{ marginBottom: '15px' }} container rowSpacing={3} columnSpacing={{ xs: 12 }}>
            <Grid item xs={4}>
              <Typography style={{ fontWeight: 'bold' }} variant="p">
                Budget
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="p">{data?.budget}</Typography>
            </Grid>
          </Grid>
          <Grid style={{ marginBottom: '15px' }} container rowSpacing={3} columnSpacing={{ xs: 12 }}>
            <Grid item xs={4}>
              <Typography style={{ fontWeight: 'bold' }} variant="p">
                Lead Quality Score
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="p">{data?.lead_quality_score}</Typography>
            </Grid>
          </Grid>
          <Grid style={{ marginBottom: '15px' }} container rowSpacing={3} columnSpacing={{ xs: 12 }}>
            <Grid item xs={4}>
              <Typography style={{ fontWeight: 'bold' }} variant="p">
                Appointment Time
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="p">{moment(data?.appointment_time).format('h:mm A DD-MM-YYYY')}</Typography>
            </Grid>
          </Grid>
          <Grid style={{ marginBottom: '15px' }} container rowSpacing={3} columnSpacing={{ xs: 12 }}>
            <Grid item xs={4}>
              <Typography style={{ fontWeight: 'bold' }} variant="p">
                Other Requirements
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="p">{data?.other_requirements[0]}</Typography>
            </Grid>
          </Grid>

          <Typography style={{ marginBottom: '15px' }} variant="h4">
            Property Information
          </Typography>
          <Grid style={{ marginBottom: '15px' }} container rowSpacing={3} columnSpacing={{ xs: 12 }}>
            <Grid item xs={4}>
              <Typography style={{ fontWeight: 'bold' }} variant="p">
                Description
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="p">{data?.property_description}</Typography>
            </Grid>
          </Grid>
          <Grid style={{ marginBottom: '15px' }} container rowSpacing={3} columnSpacing={{ xs: 12 }}>
            <Grid item xs={4}>
              <Typography style={{ fontWeight: 'bold' }} variant="p">
                Location
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="p">{data?.property_location}</Typography>
            </Grid>
          </Grid>
          <Grid style={{ marginBottom: '15px' }} container rowSpacing={3} columnSpacing={{ xs: 12 }}>
            <Grid item xs={4}>
              <Typography style={{ fontWeight: 'bold' }} variant="p">
                Market Type
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="p">{data?.property_market_type}</Typography>
            </Grid>
          </Grid>
          <Grid style={{ marginBottom: '15px' }} container rowSpacing={3} columnSpacing={{ xs: 12 }}>
            <Grid item xs={4}>
              <Typography style={{ fontWeight: 'bold' }} variant="p">
                Market Type
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="p">{data?.property_market_type}</Typography>
            </Grid>
          </Grid>
          <Grid style={{ marginBottom: '15px' }} container rowSpacing={3} columnSpacing={{ xs: 12 }}>
            <Grid item xs={4}>
              <Typography style={{ fontWeight: 'bold' }} variant="p">
                Purpose
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="p">{data?.property_purpose}</Typography>
            </Grid>
          </Grid>
          <Grid style={{ marginBottom: '15px' }} container rowSpacing={3} columnSpacing={{ xs: 12 }}>
            <Grid item xs={4}>
              <Typography style={{ fontWeight: 'bold' }} variant="p">
                Size
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="p">{data?.property_sizes}</Typography>
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

export default ViewLead;

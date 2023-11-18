import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import { Doughnut } from 'react-chartjs-2';

const PieChartModal = ({ open, handleClose, pieChartData }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Pie Chart</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Doughnut data={pieChartData} />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PieChartModal;

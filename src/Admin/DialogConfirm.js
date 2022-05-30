import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.showModalSetter(false);
  };

  const handleAgree = () => {
    setOpen(false);
    props.sendRequestHandler(props.seance.id);
    props.showModalSetter(false);

  };

  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Napewno chcesz usunąć " + props.seance.titles.name + " ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Godzina seansu: {props.seance.seanceDate} <br />
            Sala: {props.seance.room}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx = {{color : '#e87800', fontWeight :"bold"}} onClick={handleClose}>Disagree</Button>
          <Button sx = {{color : '#e87800', fontWeight :"bold"}} onClick={handleAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

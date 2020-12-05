import React, { Component, Menu } from 'react'
import ReactDOM from "react-dom"
import { IconButton, Icon, makeStyles } from '@material-ui/core';
import { blue } from "@material-ui/core/colors";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from "@material-ui/core/Grid";
import './Header.css'

const useStyles = makeStyles({
    dialog: {
      position: 'absolute',
      right: 5,
      top: 30
    }
  });  


function Header() {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <div id='header-view'>
                <h2 id='title'>Taskii</h2>
            </div>
            <div id="add-button">
                <IconButton aria-label="addcircle">
                    <AddCircleIcon style={{ color: blue[500] }} fontSize="large" onClick={() => { handleClickOpen() }} />
                </IconButton>
            </div>
            <div className="clearfix"></div>
            <Dialog 
                open={open} 
                onClose={handleClose} 
                aria-labelledby="form-dialog-title" 
                id="modal"
                classes={{
                    paper: classes.dialog
                }}
                >
                <Grid className="d-flex">
                    <DialogContent id='popup-content'>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="standard-basic"
                            label="New task"
                        />
                    </DialogContent>
                    <DialogActions id='popup-actions'>
                        <Button onClick={handleClose} color="primary">
                            Add
                        </Button>
                    </DialogActions>
                </Grid>
            </Dialog>
        </div>
    );
}

export default Header;
import React, { Component} from 'react'
import { IconButton, Icon } from '@material-ui/core';
import { blue } from "@material-ui/core/colors";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './Header.css'

// const headerView = () => {
//     <div id='header-view'>
//         <h2>Taskii</h2>
//     </div>
// }

function openPopup() {
    alert('clicked')
}

function Header() {
    return (
        <div>
            <div id='header-view'>
                <h2 id='title'>Taskii</h2>
            </div>
            <div id="add-button">
                <IconButton aria-label="addcircle">
                    <AddCircleIcon style={{ color: blue[500] }} fontSize="large" onClick={() => { openPopup() }} />
                </IconButton>
            </div>
            <div className="clearfix"></div>
        </div>
    );
}

export default Header;
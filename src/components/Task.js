import React from 'react'
import { blue } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from "@material-ui/core/FormControlLabel";
import './Task.css'

const CustomCheckbox = withStyles({
    root: {
      color: blue[300],
      '&$checked': {
        color: blue[600],
      },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

function Task()  {
    const [state, setState] = React.useState({
        checked: true
    });

    const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    };
    
    return (

        <div id='task'>
            <FormControlLabel
                control={
                    <CustomCheckbox
                        check={state.checked}
                        onChange={handleChange}
                        name="checked"
                    />
                }
                label="Do this today"
            />
        </div>
    );
}

export default Task;
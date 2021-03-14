import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function DetailChoice() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
        label="룸"
      />
      <FormControlLabel
        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
        label="좌식"
      />
      <FormControlLabel
        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
        label="테이블"
      /><br/>
      <FormControlLabel
        control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" color="primary" />}
        label="한식"
      />
      <FormControlLabel
        control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" color="primary" />}
        label="중식"
      />
      <FormControlLabel
        control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" color="primary" />}
        label="양식"
      />
      <FormControlLabel
        control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" color="primary" />}
        label="일식"
      />
      <FormControlLabel
        control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" color="primary" />}
        label="기타"
      />
      <FormControlLabel
        control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
        label="100M"
      />
      <FormControlLabel
        control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
        label="200M"
      />
      <FormControlLabel
        control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
        label="300M"
      />
      <FormControlLabel
        control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
        label="500M"
      />
      
    </FormGroup>
  );
}

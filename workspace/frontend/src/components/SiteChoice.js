import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SiteChoice = (props) => {

  const classes = useStyles();
  // 미사용
  // const handleChange = (event) => { 
    
  // };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          //value={'none'}
          onChange={e => props.setSite(e)} value={props.site}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>지점을 선택하세요</em>
          </MenuItem>
          <MenuItem value={'nhlife'}>NH농협생명</MenuItem>
          <MenuItem value={'nhitcenter'}>NH통합IT센터</MenuItem>
          <MenuItem value={'nhit'}>농협정보시스템</MenuItem>
        </Select>
        {/* <FormHelperText>Without label</FormHelperText> */}
      </FormControl>
    </div>
  );
}

export default SiteChoice;
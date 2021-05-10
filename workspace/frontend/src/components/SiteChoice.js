/* 사용 소스 */
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
  text :{
    //NanumGothic-Bold
    fontFamily: 'GmarketSansTTFMedium',
    fontWeight: 'Bold',
    color: 'black',
    fontSize:'15px',
  },
}));

const SiteChoice = (props) => {

  const classes = useStyles();
  const site = props.site;
  
  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          //value={'none'}
          onChange={e => props.setSite(e)} value={site}
          displayEmpty
          className={classes.selectEmpty, classes.text}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={'none'} className={classes.text}>건물을 선택해주세요</MenuItem>
          <MenuItem value={'nhitcenter'} className={classes.text}>NH통합IT센터</MenuItem>
          <MenuItem value={'nhlife'} className={classes.text}>NH농협생명보험</MenuItem>
          <MenuItem value={'nhproperty'} className={classes.text}>NH농협손해보험</MenuItem>
          <MenuItem value={'nhit'} className={classes.text}>NH디지털혁신센터</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default SiteChoice;
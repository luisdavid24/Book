import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom';
import "./styles/navar.css";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >

        <Link to="/" className="linkNavar">
          <Tab label="Title" />
        </Link>
        <Tab label="Author" />
        <Tab label="Devices" />
        <Tab label="About"/>
        <Link to="./Add" className="linkNavar">
            <Tab label="Add"/>
        </Link>
        
            
        
      </Tabs>  
    </Paper>
  );
}
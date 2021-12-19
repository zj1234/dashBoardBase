import React, { Component } from 'react';

// Externals
import compose from 'recompose/compose';

// Material helpers
import { withRouter } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

class Loading extends Component {
  constructor(props) {
    super(props);
    var text="Cargando Información..."
    if(typeof(props.text)!=="undefined"){
      text=this.props.text
    }
    var color=""
    if(typeof(props.color)!=="undefined"){
      color=this.props.color
    }
    //console.log('texto loading',text)
    this.state = {
      text:text,
      color:color
    }
  }

  render(){
    const {text, color}=this.state
      return (
        <Grid
            item
            xs={12}
            sm={12}
            md={12}
            xl={12}
            style={{color:color, textAlign:"center"}}
            >
            <Typography
                variant="h5"
            >
                <CircularProgress
                style={{color:color}}
                variant="indeterminate"

                size={24}
                thickness={3}
                
                />
                {text}
            </Typography>
        </Grid>
      );
  }
  
}


export default (Loading);

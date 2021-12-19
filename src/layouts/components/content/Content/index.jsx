import React, { Component , forwardRef} from 'react';


import Loading from '../../../../utils/Loading'
import MaterialTableComponent from '../../../../utils/MaterialTable'
import {JsonData} from '../../../../config/data'
import AddModal from './AddModal';
import styles from './styles';
// Material components
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

class Content extends Component {
    constructor(props) {
        super(props)
        this.myCallback = this.myCallback.bind(this);
        this.state = {
            isLoading: true,
            saveModal:false
        }
    }



    myCallback = (e, row) => {
        this.setState({
            saveModal:true,
            row:row,
            event:e,
        })
    }
    handleClose=()=>{
        this.setState({
            saveModal:false
        })
    }

    componentDidMount() {
        this.processData();
    }

    processData = () => {
        //console.log(JsonData)
        var keys=[{"title":'id', 'field':'tableData.id'},
            {"title":'name', 'field':'name'},
            {"title":"email",'field':"email"},
            {"title":"phone",'field':"phone.number"},
            {"title":"citycode",'field':"phone.citycode"},
            {"title":"contrycode",'field':"phone.contrycode"},
          ]
        this.setState({
            isLoading:false,
            keys:keys,
            data:JsonData
        })
    }
    
    render() {
        const {isLoading, keys, data, saveModal, row, e}=this.state
        const {classes}=this.props
        if (isLoading===true) {
            return(
                <Loading color={"white"}/>
            )
        }else{
            return(
                <Grid container spacing={1}>
                    <Grid item  lg={12} md={12} className={classes.max}>
                        <MaterialTableComponent myCallback={this.myCallback} keys={keys} data={data}/>
                    </Grid>
                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={saveModal}
                        onClose={this.handleClose}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        closeAfterTransition
                        disableAutoFocus={true}
                        disableEnforceFocus={true}
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >                                    
                        <Fade in={saveModal}>
                            <AddModal row={row} event={e}/>
                        </Fade>
                    </Modal>
                </Grid>
            )
        }
   
    }
}
export default
    compose(withStyles(styles))(Content);
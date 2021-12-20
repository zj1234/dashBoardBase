import React, { Component , forwardRef} from 'react';
import styles from '../../Content/styles';
// Material components
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import TextField from '@material-ui/core/TextField/index';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

class addModal extends Component {
    constructor(props) {
        super(props)
        var defaultName=""
        var defaultEmail=""
        var defaultPass=""
        var defaultphone=""
        var defaultcity=""
        var defaultcontry=""
        if(props.event=="edit"){
            var defaultName=this.props.row.name
            var defaultEmail=this.props.row.email
            var defaultPass=this.props.row.password
            var defaultphone=this.props.row.phone.number
            var defaultcity=this.props.row.phone.citycode
            var defaultcontry=this.props.row.phone.contrycode
        }
        this.state = {
            event:this.props.event,
            row:this.props.row,
            data:this.props.data,
            defaultName:defaultName,
            defaultEmail:defaultEmail,
            defaultPass:defaultPass,
            defaultphone:defaultphone,
            defaultcity:defaultcity,
            defaultcontry:defaultcontry,
            error:false,
            save:false
        }
    }

    handleFieldChange=(e, value)=>{
        const {data, event, defaultName,defaultEmail, defaultPass,defaultcity,defaultcontry,defaultphone}=this.state
        if(event=="edit"){
            sessionStorage.setItem("name",defaultName)
            sessionStorage.setItem("email",defaultEmail)
            sessionStorage.setItem("password", defaultPass)
            sessionStorage.setItem("phoneNumber", defaultphone)
            sessionStorage.setItem("citycode", defaultcity)
            sessionStorage.setItem("contrycode", defaultcontry)
            if(e!==null){
                sessionStorage.setItem(e, value)
            }
        }else{
            sessionStorage.setItem(e, value)
        }
        
    }
    save=()=>{
        const {data,event, row}=this.state
        var name=(sessionStorage.getItem("name"))
        var email=(sessionStorage.getItem("email"))
        var pass=(sessionStorage.getItem("password"))
        var phone=(sessionStorage.getItem("phoneNumber"))
        var city=(sessionStorage.getItem("citycode"))
        var contry=(sessionStorage.getItem("contrycode"))
        if(name==null||name==null||pass==null||phone==null||city==null||contry==null){
            this.setState({
                error:true,
                save:false
            })
        }else{
            if(event==="edit"){
                var newData=(data.filter(i=>i.tableData.id!==parseInt(row.tableData.id)))
            }else{
                var newData=data
            }
            var newJson={
                "name" : name ,
                "email" : email ,
                "password" : pass,
                "phone" : 
                {
                "number" : phone ,
                "citycode" : city ,
                "contrycode" : contry
                }
                
                }
            newData.push( newJson)
            this.setState({
                error:false,
                save:true,
                data:newData
            })
            setTimeout(() => {this.props.myCallbackClose(newData);},1000)
            
        }
        
        sessionStorage.clear()
    }

    delete=(id)=>{
        const {data}=this.state
        var newData=data
        newData=(newData.filter(i=>i.tableData.id!==parseInt(id.currentTarget.value)))
        this.setState({
            error:false,
            save:true,
            data:newData
        })
        setTimeout(() => {this.props.myCallbackClose(newData);},1000)
    }
    
    render() {
        const {defaultName,defaultEmail, defaultPass,defaultcity,defaultcontry,defaultphone, error, save, event, row}=this.state
        const {classes}=this.props
        if(event==="delete"){
            return(
                <Grid container spacing={1} className={[classes.width85, classes.backWhite]}>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        xl={12}
                        style={{textAlign:"center"}}
                    >
                        <Typography variant="h6" style={{color:"green"}}>Esta seguro de borrar usuario {row.name}</Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        xl={12}
                        style={{textAlign:"center"}}
                    >
                        <Button value={row.tableData.id} onClick={this.delete.bind(row.tableData.id)} className={[classes.backOrange, classes.textWhite]}>
                            <Typography>Borrar</Typography>
                        </Button>
                    </Grid>
                    
                </Grid>
            )
        }
        if(save===true){
            return(
                <Grid container spacing={1} className={[classes.width85, classes.backWhite]}>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        xl={12}
                        style={{textAlign:"center"}}
                    >
                        <Typography variant="h6" style={{color:"green"}}>Guardado</Typography>
                    </Grid>
                </Grid>
            )
        }
        if(error===true){
            return(
                <Grid container spacing={1} className={[classes.width85, classes.backWhite]}>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        xl={12}
                        style={{textAlign:"center"}}
                    >
                        <Typography variant="h6" style={{color:"red"}}>Ingrese Todos los Campos</Typography>
                    </Grid>
                </Grid>
            )
        }else{
            return(
                <Grid container spacing={1} className={[classes.width85, classes.backWhite]}>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        xl={12}
                        style={{textAlign:"center"}}
                    >
                        <Typography variant="h4">Ingrese Nuevo Usuario</Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        xl={12}
                        style={{textAlign:"center"}}
                    >
                        <TextField
                            label="Nombre"
                            name="name"
                            defaultValue={defaultName}
                            onChange={event =>
                                this.handleFieldChange('name', event.target.value)
                            }
                            type="text"
                            required
                            variant="outlined"
                            inputProps={{maxLength :40}}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        xl={12}
                        style={{textAlign:"center"}}
                    >
                        <TextField
                            label="email"
                            name="email"
                            defaultValue={defaultEmail}
                            onChange={event =>
                                this.handleFieldChange('email', event.target.value)
                            }
                            type="email"
                            required
                            variant="outlined"
                            inputProps={{maxLength :40}}
                        />
                    </Grid>
                    {event!=="edit"?
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={12}
                            xl={12}
                            style={{textAlign:"center"}}
                        >
                            <TextField
                                label="password"
                                name="password"
                                defaultValue={defaultPass}
                                onChange={event =>
                                    this.handleFieldChange('password', event.target.value)
                                }
                                type="password"
                                required
                                variant="outlined"
                                inputProps={{maxLength :40}}
                            />
                        </Grid>
                    :null
                    }
                    
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        xl={12}
                        style={{textAlign:"center"}}
                    >
                        <TextField
                            label="phoneNumber"
                            name="phoneNumber"
                            defaultValue={defaultphone}
                            onChange={event =>
                                this.handleFieldChange('phoneNumber', event.target.value)
                            }
                            type="number"
                            required
                            variant="outlined"
                            inputProps={{maxLength :40}}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        xl={12}
                        style={{textAlign:"center"}}
                    >
                        <TextField
                            label="citycode"
                            name="citycode"
                            defaultValue={defaultcity}
                            onChange={event =>
                                this.handleFieldChange('citycode', event.target.value)
                            }
                            type="number"
                            required
                            variant="outlined"
                            inputProps={{maxLength :40}}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        xl={12}
                        style={{textAlign:"center"}}
                    >
                        <TextField
                            label="contrycode"
                            name="contrycode"
                            defaultValue={defaultcontry}
                            onChange={event =>
                                this.handleFieldChange('contrycode', event.target.value)
                            }
                            type="number"
                            required
                            variant="outlined"
                            inputProps={{maxLength :40}}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        xl={12}
                        style={{textAlign:"center"}}
                    >
                        <Button onClick={this.save} className={[classes.backOrange, classes.textWhite]}>
                            <Typography>Guardar</Typography>
                        </Button>
                    </Grid>
                </Grid>
            )
        }
        
   
    }
}
export default
    compose(withStyles(styles))(addModal);
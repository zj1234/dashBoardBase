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
        this.state = {
            event:this.props.e,
            row:this.props.row
        }
    }

    componentDidMount() {
        this.processData();
    }

    processData = () => {
        this.save()
    }
    save=()=>{
        console.log("save")
    }
    
    render() {
        const {classes}=this.props
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
                        onChange={event =>
                            this.handleFieldChange('email', event.target.value)
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
                        label="password"
                        name="password"
                        onChange={event =>
                            this.handleFieldChange('password', event.target.value)
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
                        label="phoneNumber"
                        name="phoneNumber"
                        onChange={event =>
                            this.handleFieldChange('phoneNumber', event.target.value)
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
                        label="citycode"
                        name="citycode"
                        onChange={event =>
                            this.handleFieldChange('citycode', event.target.value)
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
                        label="contrycode"
                        name="contrycode"
                        onChange={event =>
                            this.handleFieldChange('contrycode', event.target.value)
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
                    <Button className={[classes.backOrange, classes.textWhite]}>
                        <Typography>Guardar</Typography>
                    </Button>
                </Grid>
            </Grid>
        )
   
    }
}
export default
    compose(withStyles(styles))(addModal);
import React, { Component } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
//import ListItemIcon from '@material-ui/core/ListItemIcon';
//import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

class Period extends Component {
    constructor(props) {
        super(props);
        //console.log(props)
    }

    setHoverData(e) {
        //console.log(this.props)
        //console.log('period', e.target.innerHTML)
        var value="d"
        if(e.target.innerHTML=="Última Hora"){
            value="h"
        }
        if(e.target.innerHTML=="Últimas 3 Horas"){
            value="3h"
        }
        if(e.target.innerHTML=="Últimos 3 Días"){
            value="3d"
        }
        if(e.target.innerHTML=="Última Semana"){
            value="w"
        }
        if(e.target.innerHTML=="Último Día"){
            value="d"
        }
        this.props.onClick(value)
    }
    render() {
        return (
            <div>
                <List>
                    <ListItem>
                            <Button onClick={this.setHoverData.bind(this)} className="button muted-button">Última Hora</Button>
                    </ListItem>
                    <ListItem>
                            <Button onClick={this.setHoverData.bind(this)} className="button muted-button">Últimas 3 Horas</Button>
                    </ListItem>
                    <ListItem>
                            <Button onClick={this.setHoverData.bind(this)} className="button muted-button">Último Día</Button>
                    </ListItem>
                    <ListItem>
                            <Button onClick={this.setHoverData.bind(this)} className="button muted-button">Últimos 3 Días</Button>
                    </ListItem>
                    <ListItem>
                            <Button onClick={this.setHoverData.bind(this)} className="button muted-button">Última Semana</Button>
                    </ListItem>
                    
                </List>
            </div>
        )
    }
}



export default (Period);
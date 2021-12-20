import React, { Component } from 'react';

// Externals
import compose from 'recompose/compose';
import { withRouter } from 'react-router-dom';

// Material helpers
import { forwardRef } from 'react';
import MaterialTable from "material-table";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

class MaterialTableComponent extends Component {
  constructor(props) {
    super(props)
      this.state = {
          data: this.props.data,
          keys:this.props.keys,
      }
  }
  handleShow=(e, row)=>{
    this.props.myCallback(e, row)
  }

  render(){
    
    const {data, keys}=this.state
      return (
        <MaterialTable
          icons={tableIcons}
          columns={keys}
          data={data}
          title=""
          localization={{
              grouping: {
                  groupedBy: 'Agrupar por:',
                  placeholder: 'Arrastre los encabezados aquí, para agrupar',
              },
              body: {
              emptyDataSourceMessage: 'No hay datos'
              },
              toolbar: {
              searchTooltip: 'Buscar'
              },
              pagination: {
                labelRowsSelect: 'Filas',
                labelDisplayedRows: ' {from}-{to} de {count}',
                firstTooltip: 'Pri. pág.',
                previousTooltip: 'Pág. previa',
                nextTooltip: 'Sig. pág.',
                lastTooltip: 'Últ. pág'
              }
          }}
          options={{
              grouping: true
          }}
          actions={[
            {
              icon: AddCircleOutlineIcon,
              tooltip: 'Agregar contacto',
              isFreeAction: true,
              onClick: (event, rowData) => this.handleShow('save'),
            },
            rowData => ({
                icon: Edit,
                tooltip: 'Editar horario',
                onClick: (event, rowData) => this.handleShow('edit', rowData),
            }),
            
            rowData => ({
                icon: DeleteOutline,
                tooltip: 'Eliminar horario',
                onClick: (event, rowData) => this.handleShow('delete', rowData),
            })
        ]}
        />
      );
  }
  
}


export default (MaterialTableComponent);

import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple'


const Theme = createMuiTheme({
  palette: {

    primary: {  main: '#002c76', contrastText: '#ffffff',},
    secondary: purple,
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  status: {
    danger: 'red',
  },
});

export default Theme;
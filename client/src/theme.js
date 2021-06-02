import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(107, 89, 204)',
    },
    secondary: {
      main: '#ffcc80',
    },
    background: {
      default: '#c8e4fb',
    },
  },
});

export default theme
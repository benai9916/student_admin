import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    hide: {
      boxShadow: "none !important",
  },
  wrapper: {
    backgroundColor: "#fff",
    boxShadow: "0 1px 9px 0 rgb(25 27 43 / 19%)",
    height: 70,
    [theme.breakpoints.up('md')]: {
        padding: "0 68px !important"
      },
},
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default useStyles
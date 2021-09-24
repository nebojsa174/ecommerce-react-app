import { makeStyles } from '@material-ui/core/styles';
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;500&display=swap" rel="stylesheet" />
export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(5),
        fontFamily: 'Poppins',
        borderTop: '5px solid #D3D3D3',
    },
    root: {
        flexGrow: 1,
    },
}));
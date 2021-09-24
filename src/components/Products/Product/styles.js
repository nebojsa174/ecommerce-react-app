import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: '100px',
        paddingTop: '56.25%', // 16:9
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        borderTop: '5px solid #D3D3D3',
    },

}));
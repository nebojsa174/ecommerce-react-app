import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    media: {
        height: 260,
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        borderTop: '5px solid #D3D3D3',
    },
    cartActions: {
        justifyContent: 'space-between',
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
    },
}));
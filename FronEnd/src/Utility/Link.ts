import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)(({ theme }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    width: '100%',
    height: '50px',
    textAlign: 'center',
    border: '1px solid black',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
    textDecoration: 'none',
    color: 'white',
    backgroundColor: '#1976d2',

    ':hover': {
      color: theme.palette.grey[50],
    },

  }));
export default Link;

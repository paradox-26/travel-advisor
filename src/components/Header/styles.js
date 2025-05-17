const useStyles = () => ({
  appBar: {
    backgroundColor: '#2b5876',
    backgroundImage: 'linear-gradient(to right, #2b5876, #4e4376)',
    position: 'static',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: { xs: '0 8px', sm: '0 16px' },
  },
  title: {
    display: 'none',
    fontWeight: 'bold',
    color: '#fff',
    '@media (min-width: 600px)': {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: '4px',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.25)' },
    marginRight: '8px',
    marginLeft: 0,
    width: '100%',
    '@media (min-width: 600px)': {
      marginLeft: '24px',
      width: 'auto',
    },
    transition: 'background-color 0.3s',
  },
  searchIcon: {
    padding: '0 16px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  inputRoot: {
    color: 'white',
    width: '100%',
  },
  inputInput: {
    padding: '8px 8px 8px 0',
    paddingLeft: 'calc(1em + 32px)',
    width: '100%',
    '@media (min-width: 600px)': {
      width: '20ch',
    },
  },
});

export default useStyles;
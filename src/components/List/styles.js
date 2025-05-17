const useStyles = () => ({
  container: {
    padding: '25px',
    overflow: 'auto',
    height: '83vh',
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
  },
  formControl: {
    margin: '8px',
    minWidth: 120,
    marginBottom: '16px',
  },
  title: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#333',
  },
  loading: {
    height: '600px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    height: '75vh',
    overflow: 'auto',
    marginTop: '16px',
    paddingRight: '8px',
    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-track': {
      background: '#f1f1f1',
      borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#888',
      borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#555',
    },
  },
  noResults: {
    width: '100%',
    textAlign: 'center',
    padding: '48px 16px',
    color: '#666',
  },
});

export default useStyles;
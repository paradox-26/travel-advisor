const useStyles = () => ({
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '83vh',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
  },
  loadingText: {
    marginTop: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
  subText: {
    marginTop: '8px',
    color: '#666',
  },
});

export default useStyles;
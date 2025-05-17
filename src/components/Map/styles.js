const useStyles = () => ({
  mapContainer: {
    height: '83vh',
    width: '100%',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
  },
  markerContainer: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    '&:hover': { zIndex: 2 },
    cursor: 'pointer',
  },
  paper: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '120px',
    borderRadius: '8px',
    backgroundColor: 'white',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  typography: {
    fontWeight: 'bold',
    fontSize: '0.75rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  placeImage: {
    height: '60px',
    width: '100%',
    objectFit: 'cover',
    borderRadius: '4px',
    marginBottom: '5px',
  },
  weatherPaper: {
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(5px)',
    minWidth: '150px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)',
  },
  weatherContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  weatherTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '5px',
    fontSize: '0.85rem',
  },
  weatherInfoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '5px',
  },
  weatherIcon: {
    width: '40px',
    height: '40px',
  },
  temperature: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    marginLeft: '5px',
  },
  weatherDescription: {
    fontSize: '0.75rem',
    textTransform: 'capitalize',
    marginLeft: '5px',
  },
  weatherDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '5px',
    padding: '0 5px',
  },
});

export default useStyles;
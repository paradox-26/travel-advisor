const useStyles = () => ({
  card: {
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    },
  },
  selectedCard: {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    border: '2px solid #4dabf5',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#263238',
  },
  subtitle: {
    fontSize: '0.9rem',
    color: '#546e7a',
  },
  chipContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '12px',
    marginBottom: '12px',
    gap: '6px',
  },
  chip: {
    margin: '2px',
    fontSize: '0.7rem',
    backgroundColor: '#e3f2fd',
    color: '#1976d2',
  },
  icon: {
    marginRight: '8px',
    fontSize: '1.2rem',
  },
  infoRow: {
    marginTop: '10px',
  },
  infoText: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  ratingBox: {
    marginBottom: '12px',
  },
  priceLevelBox: {
    marginBottom: '6px',
  },
  rankingBox: {
    marginBottom: '12px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '16px',
  },
  button: {
    textTransform: 'none',
    borderRadius: '20px',
    fontWeight: 500,
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
    },
  },
});
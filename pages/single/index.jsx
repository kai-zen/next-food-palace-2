import { Button, Paper } from '@mui/material';
import { useRouter } from 'next/router';

const Single = () => {
  const router = useRouter();
  return (
    <Paper
      sx={{
        width: { sm: 'calc(100% - 260px)' },
        ml: { sm: '260px' },
        pt: '68px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 'calc(100vh - 68px)',
      }}
    >
      <Button
        variant="contained"
        onClick={() => {
          router.push('/');
        }}
        sx={{ mt: 30 }}
      >
        Go back home
      </Button>
    </Paper>
  );
};

export default Single;

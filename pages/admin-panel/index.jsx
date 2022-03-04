import { Button, Paper, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const MainPanel = () => {
  const loggedInUser = useSelector((state) => state.users.loggedInUser);
  const router = useRouter();
  return (
    <Paper
      sx={{
        width: { sm: 'calc(80% - 260px)' },
        ml: { sm: '260px' },
        p: '138px 10% 50px 10%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 'calc(100vh - 148px)',
      }}
    >
      {loggedInUser && loggedInUser.isAdmin ? (
        <>
          <Typography variant="h4" sx={{ textAlign: 'center' }}>
            Because of permanent affects on data, I did not implement admin
            panel functions, those are available on react version of this site.
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: '60px' }}
            onClick={() => {
              router.push('/');
            }}
            color="primary"
            fullWidth
            size="large"
          >
            Go back home
          </Button>
        </>
      ) : (
        <Button
          onClick={() => {
            router.push('/');
          }}
          variant="outlined"
        >
          Acces denied
        </Button>
      )}
    </Paper>
  );
};

export default MainPanel;

import { ArrowBack } from '@mui/icons-material';
import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import APSingleCommentRow from '../../components/admin-panel/APSingleCommentRow';

const APComments = ({ allComments }) => {
  const router = useRouter();
  const loggedInUser = useSelector((state) => state.users.loggedInUser);

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
          <Typography variant="h3" sx={{ mb: '20px' }}>
            <IconButton
              size="large"
              onClick={() => {
                router.push('/admin-panel');
              }}
            >
              <ArrowBack color="primary" fontSize="inherit" />
            </IconButton>
            Edit comments panel
          </Typography>
          <Table sx={{ maxWidth: '90%', m: 3 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Author</TableCell>
                <TableCell align="center">Food</TableCell>
                <TableCell align="center">Body</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allComments.map((comment) => {
                return (
                  <APSingleCommentRow comment={comment} key={comment.id} />
                );
              })}
            </TableBody>
          </Table>
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

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/comments');
  const allComments = await response.json();
  return {
    props: {
      allComments,
    },
  };
}

export default APComments;

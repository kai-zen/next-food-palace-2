import { allFoodsInfo } from '../allFoodsInfo';
import db from '../app/db';
import Comment from '../app/models/comment';
import MyTabs from '../components/tabs/MyTabs';

function Home({ comments }) {
  const allFoods = allFoodsInfo;
  return <MyTabs activeTab={2} allFoods={allFoods} comments={comments} />;
}

export async function getServerSideProps() {
  await db.connect();
  let comments = await Comment.find({}).lean();
  comments = JSON.parse(JSON.stringify(comments));
  await db.disconnect();
  return {
    props: {
      comments,
    },
  };
}

export default Home;

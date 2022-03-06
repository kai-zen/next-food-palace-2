import { allFoodsInfo } from '../allFoodsInfo';
import MyTabs from '../components/tabs/MyTabs';

function Home({ comments }) {
  const allFoods = allFoodsInfo;
  return <MyTabs activeTab={2} allFoods={allFoods} comments={comments} />;
}

export async function getServerSideProps() {
  const response2 = await fetch('http://localhost:3000/api/comments');
  const comments = await response2.json();
  return {
    props: {
      comments,
    },
  };
}

export default Home;

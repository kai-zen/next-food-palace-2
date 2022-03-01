import MyTabs from '../components/tabs/MyTabs';

export default function Home({ allFoods, comments }) {
  return <MyTabs activeTab={1} allFoods={allFoods} comments={comments} />;
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/foods');
  const data = await response.json();
  const response2 = await fetch('http://localhost:3000/api/comments');
  const comments = await response2.json();
  return {
    props: {
      allFoods: data,
      comments,
    },
  };
}

import MyTabs from '../components/tabs/MyTabs';

function Home({ allFoods }) {
  return <MyTabs activeTab={2} allFoods={allFoods} />;
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3000/api/foods');
  const data = await response.json();
  return {
    props: {
      allFoods: data,
    },
  };
}

export default Home;

import MyTabs from '../components/tabs/MyTabs';

export default function Home({ allFoods }) {
  return <MyTabs activeTab={1} allFoods={allFoods} />;
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

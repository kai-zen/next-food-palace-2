import { Provider } from 'react-redux';
import MyLayout from '../components/layout/MyLayout';
import '../styles/globals.css';
import '../styles/reset.css';
import { store } from '../app/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MyLayout currentTheme={pageProps.currentTheme}>
        <Component {...pageProps} />
      </MyLayout>
    </Provider>
  );
}

export async function getStaticProps() {
  const response = await fetch('/api/theme');
  const data = await response.json();
  return {
    props: {
      currentTheme: 'dark',
    },
  };
}

export default MyApp;

import { Provider } from 'react-redux';
import MyLayout from '../components/layout/MyLayout';
import '../styles/globals.css';
import '../styles/reset.css';
import { store } from '../app/store';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <Provider store={store}>
      <MyLayout currentTheme={pageProps.currentTheme}>
        <Component {...pageProps} />
      </MyLayout>
    </Provider>
  );
}

export default MyApp;

import { Provider } from 'react-redux';
import MyLayout from '../components/layout/MyLayout';
import '../styles/globals.css';
import '../styles/reset.css';
import { store } from '../app/store';

function MyApp({ Component, pageProps, currenttheme }) {
  return (
    <Provider store={store}>
      <MyLayout currenttheme={currenttheme}>
        <Component {...pageProps} />
      </MyLayout>
    </Provider>
  );
}

export default MyApp;

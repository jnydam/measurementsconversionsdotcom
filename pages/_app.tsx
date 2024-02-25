import Layout from '@/components/layout';
import { wrapper } from '@/redux/store';
import '@/styles/global.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { Roboto } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  const { pageProps } = props;

  return (
    <Provider store={store}>
      <main className={roboto.className}>
        <Layout>
          <Component {...pageProps} />
          {/* <GoogleAnalytics gaId='{{GAID}}' /> */}
        </Layout>
      </main>
    </Provider>
  );
}

export default App;

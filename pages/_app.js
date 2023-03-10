import '../src/styles/index.scss'
import NextNProgress from 'nextjs-progressbar';
import variables from 'styles/_variables.module.scss';

function MyApp({ Component, pageProps }) {
  return (
      <>
        <NextNProgress height={4} color={variables.progressbarColor} />
          <Component {...pageProps} />
      </>
          );
}

export default MyApp

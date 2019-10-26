import NextApp from 'next/app'
import Layout from '../components/Layout'

class App extends NextApp {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
    }
  }

  render() {
    const {
      pageProps: {
        layout = {},
        ...pageProps
      },
      Component
    } = this.props


    return (
      <Layout {...layout}>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default App

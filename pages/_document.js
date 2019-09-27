import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  addGA() {
    return {
      __html: `
      window.dataLayer = window.dataLayer || []
      function gtag(){dataLayer.push(arguments)}
      gtag('js', new Date())
      gtag('config', 'UA-148888725-1')
    `
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,600&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://cdn.jsdelivr.net/npm/prismjs@1.17.1/themes/prism-tomorrow.min.css'
            rel='stylesheet'
          />
          <link rel='stylesheet' href='/static/global.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=UA-148888725-1'
          />
          <script dangerouslySetInnerHTML={this.addGA()} />
        </body>
      </Html>
    )
  }
}

export default MyDocument

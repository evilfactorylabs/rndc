import Head from 'next/head'
import { withRouter } from 'next/router'

export default withRouter(({ title, description, router, children }) => (
  <Head>
    <title key='title'>{title}</title>
    <meta name='description' key='description' content={description} />
    <meta property='og:type' key='og:type' content='website' />
    <meta
      property='og:url'
      key='og:url'
      content={`https://rndc.evilfactory.id${router.pathname}`}
    />
    <meta property='og:title' content={title} key='og:title' />
    <meta
      property='og:description'
      key='og:description'
      content={description}
    />
    <meta name='twitter:card' key='twitter:card' content='summary' />
    <meta name='twitter:site' key='twitter:site' content='@evilfactorylabs' />
    <meta
      name='twitter:creator'
      key='twitter:creator'
      content='@evilfactorylabs'
    />
    <meta name='twitter:title' key='twitter:title' content={title} />
    <meta
      name='twitter:description'
      key='twitter:description'
      content={description}
    />
    {children}
  </Head>
))

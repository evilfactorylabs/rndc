import Head from './Head'
import { withRouter } from 'next/router'

export default withRouter(props => {
  const { meta, children, router } = props

  return (
    <>
      <Head title={meta.title} description={meta.description}>
        {meta.isPublished !== true && <meta name='robots' content='noindex' />}
      </Head>
      {meta.isPublished !== true && (
        <div>
          <h4>Warning!</h4>
          <p>This is still draft, please don't share it</p>
          <style jsx>{`
            h4 {
              margin-top: 0;
            }
            div {
              margin-top: 2rem;
              padding: 1rem;
              border: 1px solid #eee;
              border-radius: 2px;
            }
            p {
              margin-bottom: 0;
            }
          `}</style>
        </div>
      )}
      {children}
      {meta.isPublished !== true ||
        (router.pathname !== '/' && (
          <p>
            <a
              title='Edit this report'
              href={`https://github.com/evilfactorylabs/rndc/edit/master/pages${router.pathname}.mdx`}
            >
              Edit this report
            </a>
            <span>|</span>
            <a
              rel='noopener noreferer'
              target='_blank'
              title='Share to Twitter'
              href={`https://twitter.com/intent/tweet/?text=https://rndc.evilfactorylabs.id${router.pathname}`}
            >
              Share to twitter
            </a>
            <style jsx>{`
              span {
                padding-left: 5px;
                padding-right: 5px;
              }
            `}</style>
          </p>
        ))}
    </>
  )
})

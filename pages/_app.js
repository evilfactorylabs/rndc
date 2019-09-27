import React from 'react'
import App from 'next/app'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'

Router.events.on('routeChangeComplete', url => {
  try {
    window.gtag('config', 'UA-148888725-1', {
      page_location: url
    })
  } catch (err) {
    console.error(err)
  }
})

const Header = () => {
  const router = useRouter()

  return router.pathname === '/' ? null : (
    <div>
      <Link href='/'>
        <a>{`<`} Back to home</a>
      </Link>
      <style jsx>{`
        div {
          width: 100%;
          background-color: #161616;
          position: fixed;
          top: 0px;
          left: 0px;
          padding: 20px;
        }
        a {
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  )
}

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Header />
        {children}
        <style jsx>{`
          div {
            padding: 2rem;
            width: 666px;
            max-width: 100%;
            margin: auto;
          }
        `}</style>
      </div>
    )
  }
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

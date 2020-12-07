import * as React from 'react'
import styles from 'styles/pages/app.module.css'
// import 'antd/dist/antd.css'
import 'antd/dist/antd.min.css'
import 'styles/vars.css'
import 'styles/global.css'
import {AppProps} from 'next/app'
import {ApolloProvider} from '@apollo/client'
import {useApollo} from '../utils/apollo'
import {Viewer} from 'types'
import Head from 'next/head'
import {Layout, Affix} from 'antd'
import {AppHeader} from 'section'
// import '../styles/styles.css' // turn on and off for reference for local
import * as Sentry from '@sentry/react'
import {init} from 'utils/sentry'

init()

const initialViewer: Viewer = {
  id: null,
  token: null,
  avatar: null,
  hasWallet: null,
  didRequest: false,
}

function FallbackComponent() {
  return <div>An error has occurred</div>
}

export default function App({Component, pageProps}: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)
  const [viewer, setViewer] = React.useState<Viewer>(initialViewer)

  return (
    <Sentry.ErrorBoundary fallback={FallbackComponent} showDialog>
      <Head>
        <link rel="icon" type="image/png" href="DNA.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="DNA.png" sizes="16x16" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <ApolloProvider client={apolloClient}>
        <Layout id="app">
          <Affix offsetTop={0} className={styles.app__affix_header}>
            <AppHeader setViewer={setViewer} viewer={viewer} />
          </Affix>
          <Component {...pageProps} setViewer={setViewer} viewer={viewer} />
        </Layout>
      </ApolloProvider>
    </Sentry.ErrorBoundary>
  )
}

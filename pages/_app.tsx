import { FC } from 'react'
import { NextPage } from 'next'

import '../css/globals.css'
import 'normalize.css'

interface Props {
  Component: FC
  pageProps: any
}

const App: NextPage<Props> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default App

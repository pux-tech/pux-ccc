/*
 * _app.js
 * Description: Application gateway
 * Copyright (c) 2021 PredictiveUX
 */
import { AppProps } from 'next/dist/next-server/lib/router/router'

import '@fontsource/poppins'
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <main>
      <Component {...pageProps} />
    </main>
  </>
)

export default App

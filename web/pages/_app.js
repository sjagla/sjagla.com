import '../styles/globals.sass'
import '../styles/functions.sass'
import '../styles/main.sass'

import React, { Component } from 'react'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

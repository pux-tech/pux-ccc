/*
 * pages/index.tsx
 * Description: The "homepage", so to speak...all your code should live here
 * Copyright (c) 2021 PredictiveUX
 */
import Head from 'next/head'
import React from 'react'
import css from 'styles/Home.module.css'

const Home = (): JSX.Element => {
  return (
    <React.Fragment>
      <Head>
        <title>PUX: Candidate Coding Challenge</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={css.header}>
        <div>
          <img src='assets/pux_logo.png' alt='Predictive UX' />
        </div>
        <div className={css.title}>Candidate Coding Challenge</div>
      </div>
      <div className={css.container}>asdfasf</div>
    </React.Fragment>
  )
}

export default Home

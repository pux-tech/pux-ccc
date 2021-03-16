/*
 * pages/index.tsx
 * Description: The "homepage", so to speak.
 * Copyright (c) 2021 PredictiveUX
 */
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { AlbumTable, FilterInput, PageTitle } from 'components/'
import css from 'styles/Home.module.css'
import { GetStaticProps } from 'next';
import { initialSort, columnSort } from '../lib/album'

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('http://localhost:3000/api/albums')
  const albumData = await res.json()
  //sort by country first then rank
  const sortedData = initialSort(albumData)
  return {
    props: {
      albumData: sortedData
    }
  }
}

type HomeProps = {
  albumData: any[]
}

const Home: React.FC<HomeProps> = ({ albumData }: HomeProps): JSX.Element => {
  const [filteredData, setFilterData] = useState(albumData)
  /**
   * how will you fetch the album data
   */
  //  useEffect(() => {}, [filteredData])
  const filterInput = (evt: React.SyntheticEvent): any => {
    evt.preventDefault()
    const search = evt.currentTarget.value.toLowerCase()
    const tempArr = albumData.filter((album) => {
      return (
        album.album.toLowerCase().indexOf(search) > -1 ||
        album.artist.toLowerCase().indexOf(search) > -1
      )
    })
    setFilterData(tempArr)
  }
  const handleSort = (evt: MouseEvent): void => {
    evt.preventDefault()
    const field = evt.currentTarget.name.toLowerCase()
    const tempArr = columnSort(filteredData, field)
    setFilterData(tempArr)
  }
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
      <div className={css.container}>
        <PageTitle />
        <FilterInput handleFilterInput={filterInput} />
        <AlbumTable handleSort={handleSort} albumData={filteredData} />
      </div>
    </React.Fragment>
  )
}

export default Home

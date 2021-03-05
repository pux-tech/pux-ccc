/*
 * components/AlbumTable.tsx
 * Description: Table displaying album information
 * Copyright (c) 2021 PredictiveUX
 */
import styled from 'styled-components'

import css from 'styles/Home.module.css'

const Wrapper = styled.div`
  margin-top: 20px;
`

type AlbumTableProps = {
  data: any[]
}

const AlbumTable: React.FC<AlbumTableProps> = ({ data }: AlbumTableProps): JSX.Element => {
  return (
    <Wrapper>
      <table className={css.albumTable}>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Year</th>
            <th>Sold</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {/* this is placeholder data...substitute with your fetched data */}
          <tr>
            <td>4</td>
            <td>AC/DC</td>
            <td>Back in Black</td>
            <td>1980</td>
            <td>25,000,000</td>
            <td>United States</td>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  )
}

export default AlbumTable

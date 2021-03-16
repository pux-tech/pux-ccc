/*
 * components/AlbumTable.tsx
 * Description: Table displaying album information
 * Copyright (c) 2021 PredictiveUX
 */

import styled from 'styled-components'
import css from 'styles/Home.module.css'
import Button from '@material-ui/core/Button';
import { formatCurrency } from '../lib/album'

const Wrapper = styled.div`
  margin-top: 20px;
`

type AlbumTableProps = {
  handleSort: (evt: Event) => void
  albumData: any[]
}
const TableHeader = ['Country', 'Rank', 'Artist', 'Album', 'Year', 'Sold']

const AlbumTable: React.FC<AlbumTableProps> = ({
  albumData,
  handleSort
}: AlbumTableProps): JSX.Element => {
  return (
    <Wrapper>
      <table className={css.albumTable}>
        <thead>
          <tr>
            {TableHeader.map((name, index) => {
              return (
                <th key={index}>
                  <Button
                  name={name}
                    onClick={(evt) => {
                      handleSort(evt)
                    }}
                  >
                    {name}
                  </Button>
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {albumData.map((album) => {
            return (
              <tr key={album.id}>
                <td>{album.country}</td>
                <td>{album.rank}</td>
                <td>{album.artist}</td>
                <td>{album.album}</td>
                <td>{album.year}</td>
                <td>{formatCurrency(album.sold)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Wrapper>
  )
}
export default AlbumTable

/*
 * components/FilterInput.tsx
 * Description: Component used for filtering data
 * Copyright (c) 2021 PredictiveUX
 */
import styled from 'styled-components'

import css from 'styles/Home.module.css'

/** styled components here */
const Wrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`

const Instructions = styled.div`
  margin-right: 10px;
`

/**
 * We presume you'll need some kind of change handler to listen to inputs
 */
type FilterInputProps = {
  handleFilterInput: (evt: Event) => void
}
const FilterInput: React.FC<FilterInputProps> = ({ handleFilterInput }): JSX.Element => {
  return (
    <Wrapper>
      <Instructions>Filter by artist or ablum name...</Instructions>
      <input type='text' onInput={handleFilterInput} className={css.filterInput} />
    </Wrapper>
  )
}

export default FilterInput

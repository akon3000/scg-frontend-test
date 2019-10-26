import { useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled('div')`
  margin: auto;
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  padding-top: 150px;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`

const ScgPages = () => {

  useEffect(() => {

  }, [])

  return (
    <Wrapper>
      <img src='/static/images/Siam_Cement_Group_Logo.png' />
    </Wrapper>
  )
}

export default ScgPages
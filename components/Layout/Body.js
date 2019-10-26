import styled from 'styled-components'
import { node, number } from 'prop-types'

const Wrapper = styled('div')`
  position: relative;
  height: 100%;
  min-height: calc(100vh - ${({ heightOfHeaderAndFooter }) => heightOfHeaderAndFooter}px);
`

const Body = ({
  children,
  heightHeader,
  heightFooter
}) => (
  <Wrapper
    heightOfHeaderAndFooter={heightHeader + heightFooter}
  >
    {children}
  </Wrapper>
)

Body.propTypes = {
  children: node,
  heightHeader: number,
  heightFooter: number
}

export default Body
import styled from 'styled-components'

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

export default Body
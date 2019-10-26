import styled, { createGlobalStyle } from 'styled-components'

const GlobalCss = createGlobalStyle`
  body {
    background-color: black;
  }
`

const Wrapper = styled('div')`

`

const Layout = ({ children }) => (
  <>
    <GlobalCss />
    <Wrapper>
      {children}
    </Wrapper>
  </>
)

export default Layout
import { useState, useRef, useEffect } from 'react'
import { createGlobalStyle } from 'styled-components'
import { SECONDARY } from '../../constants/colors'
import Header from './Header'

const GlobalCss = createGlobalStyle`
  body {
    overflow: auto;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    background-color: ${SECONDARY.main};
    padding-top: ${({ heightHeader }) => heightHeader}px;
  }
`

const Layout = ({ children, noHeader }) => {
  const headerRef = useRef(null)
  const [heightHeader, setHeightHeader] = useState(0);

  useEffect(() => {
    if (headerRef.current !== null) {
      setHeightHeader(headerRef.current.clientHeight)
    }
  }, [])

  return (
    <>
      <GlobalCss
        heightHeader={heightHeader}
      />
      {!noHeader &&
        <Header
          ref={headerRef}
        />
      }
      {children}
    </>
  )
}

export default Layout
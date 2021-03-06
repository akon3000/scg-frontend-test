import { useState, useRef, useEffect } from 'react'
import { node, bool } from 'prop-types'
import { createGlobalStyle } from 'styled-components'
import { SECONDARY } from '../../constants/colors'
import Body from './Body'
import Header from './Header'
import Footer from './Footer'

const GlobalCss = createGlobalStyle`
  body {
    overflow: auto;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    background-color: ${SECONDARY.main};
    padding-top: ${({ heightHeader }) => heightHeader}px;
  }
`

const Layout = ({ children, noHeader, noFooter }) => {
  const headerRef = useRef(null)
  const footerRef = useRef(null)
  const [heightHeader, setHeightHeader] = useState(0)
  const [heightFooter, setHeightFooter] = useState(0)

  useEffect(() => {
    if (headerRef.current !== null) {
      setHeightHeader(headerRef.current.clientHeight)
    }
    if (footerRef.current !== null) {
      setHeightFooter(footerRef.current.clientHeight)
    }
  })

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
      <Body
        heightHeader={heightHeader}
        heightFooter={heightFooter}
      >
        {children}
      </Body>
      {!noFooter &&
        <Footer ref={footerRef} />
      }
    </>
  )
}

Layout.propTypes = {
  children: node,
  noHeader: bool,
  noFooter: bool
}

Layout.defaultProps = {
  noHeader: false,
  noFooter: false
}

export default Layout
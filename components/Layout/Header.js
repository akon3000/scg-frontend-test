import { forwardRef } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Container } from 'react-bootstrap'
import { PRIMARY, UTILITY } from '../../constants/colors'
import { Z_INDEX_LAYOUT_HEADER } from '../../constants/zIndex'

const MenuItem = styled('div')`
  padding: 0 10px;
  a {
    display: block;
    font-weight: 600;
    color: ${UTILITY.white};
    text-decoration: none;
  }
`

const MenuLogo = styled(MenuItem)`
  padding: 0 30px 0 0;
  a {
    font-size: 40px;
    font-family: 'Shadows Into Light', cursive;
  }
`

const MenuWord = styled(MenuItem)`
  a {
    font-size: 18px;
  }
`

const Wrapper = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: ${UTILITY.white};
  z-index: ${Z_INDEX_LAYOUT_HEADER};
  background-color: ${PRIMARY.main};
`

const Header = forwardRef((props, ref) => (
  <Wrapper ref={ref}>
    <Container className='d-flex align-items-center justify-content-center'>
      <MenuLogo>
        <Link href='/scg' as='/scg'>
          <a>SCG</a>
        </Link>
      </MenuLogo>
      <MenuWord>
        <Link href='/number-series' as='/number-series'>
          <a>Number Series</a>
        </Link>
      </MenuWord>
      <MenuWord>
        <Link href='/bangsue-restaurants' as='/restaurants-in-bangsue'>
          <a>Restaurants</a>
        </Link>
      </MenuWord>
      <MenuWord>
        <Link href='/resume' as='/my-resume'>
          <a><FaAccusoft />Resume</a>
        </Link>
      </MenuWord>
    </Container>
  </Wrapper>
))

export default Header
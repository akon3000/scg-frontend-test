import { forwardRef, Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { FaListUl } from 'react-icons/fa'
import { Container, Dropdown } from 'react-bootstrap'
import { PRIMARY, UTILITY } from '../../constants/colors'
import { Z_INDEX_LAYOUT_HEADER } from '../../constants/zIndex'
import { screen } from '../../utils/css'

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

  @media ${screen.MOBILE_L} {
    display: none;
  }
`

const MenuList = styled('div')`
  cursor: pointer;
  display:none;

  @media ${screen.MOBILE_L} {
    display: block;
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

// End styled components --------------------------------------------------

class MobileMenu extends Component {
  constructor(props, context) {
    super(props, context)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = e => {
    e.preventDefault()

    this.props.onClick(e)
  }

  render() {
    return (
      <MenuList onClick={this.handleClick}>
        <FaListUl />
      </MenuList>
    )
  }
}

const Header = forwardRef((props, ref) => (
  <Wrapper ref={ref}>
    <Container className='d-flex align-items-center justify-content-md-center justify-content-between'>
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
          <a>Resume</a>
        </Link>
      </MenuWord>
      <Dropdown>
        <Dropdown.Toggle as={MobileMenu} id='dropdown-mobile-menu' />
        <Dropdown.Menu>
          <Link href='/number-series' as='/number-series'>
            <a className='dropdown-item' role='button'>Number Series</a>
          </Link>
          <Link href='/bangsue-restaurants' as='/restaurants-in-bangsue'>
            <a className='dropdown-item' role='button'>Restaurants</a>
          </Link>
          <Link href='/resume' as='/my-resume'>
            <a className='dropdown-item' role='button'>Resume</a>
          </Link>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  </Wrapper>
))

export default Header
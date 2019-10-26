import { forwardRef } from 'react'
import styled from 'styled-components'
import { PRIMARY, UTILITY } from '../../constants/colors'
import { Z_INDEX_LAYOUT_HEADER } from '../../constants/zIndex'

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
    ssss
  </Wrapper>
))

export default Header
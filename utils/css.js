import { keyframes } from 'styled-components'
import * as breakPoint from '../constants/breakPoint'

export const screen = {
  MOBILE_S: `(max-width: ${breakPoint.MOBILE_S})`,
  MOBILE_M: `(max-width: ${breakPoint.MOBILE_M})`,
  MOBILE_L: `(max-width: ${breakPoint.MOBILE_L})`,
  TABLET: `(max-width: ${breakPoint.TABLET})`,
  LAPTOP: `(max-width: ${breakPoint.LAPTOP})`,
  LAPTOP_L: `(max-width: ${breakPoint.LAPTOP_L})`,
  DESKTOP: `(max-width: ${breakPoint.DESKTOP})`,
  DESKTOP_L: `(max-width: ${breakPoint.DESKTOP})`,
}

export const animationRotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
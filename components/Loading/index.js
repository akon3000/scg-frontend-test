import styled from 'styled-components'
import { number, string } from 'prop-types'
import { FaSpinner } from 'react-icons/fa'
import { PRIMARY } from '../../constants/colors'
import { animationRotate } from '../../utils/css'

const Wrapper = styled('div')`
  margin: auto;
  display: flex;
  font-size: 70px;
  align-items: center;
  justify-content: center;
  color: ${({ color }) => color};
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  
  & > svg {
    animation: ${animationRotate} 1.7s linear infinite;
  }
`

const Loading = ({
  color,
  width,
  height
}) => (
  <Wrapper
    width={width}
    color={color}
    height={height}
  >
    <FaSpinner />
  </Wrapper>
)

Loading.propTypes = {
  color: string,
  width: number,
  height: number
}

Loading.defaultProps = {
  width: 600,
  height: 600,
  color: PRIMARY.main
}

export default Loading
import styled from 'styled-components'

const Wrapper = styled('div')`
  width: 100%;
  max-width: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`

const ScgPages = () => (
  <Wrapper>
    <img src='/static/images/Siam_Cement_Group_Logo.png' />
  </Wrapper>
)

export default ScgPages
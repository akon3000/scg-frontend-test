import styled from 'styled-components'
import { Alert } from 'react-bootstrap'

const Iframe = styled('iframe')`
  display: block;
  border: 0;
  width: 100%;
  height: 605px;
`

const ResumePage = () => (
  <>
    <Alert variant='warning' className='m-2 text-center'>
      see my code <a href='https://github.com/akon3000/portfolio'>https://github.com/akon3000/portfolio</a>
    </Alert>
    <Iframe src='https://portfolio-1500d.firebaseapp.com' />
  </>
)

export default ResumePage
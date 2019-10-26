import { forwardRef } from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from 'react-icons/fa'
import { UTILITY } from '../../constants/colors'

const Wrapper = styled('div')`
  padding: 30px;
  color: ${UTILITY.white};
  background-color: ${rgba(UTILITY.black, 0.7)};

  .mb-20 {
    margin-bottom: 20px;
  }

  .social, .copyright {
    color: ${rgba(UTILITY.white, 0.7)};
  }

  .social {
    font-size: 20px;
  }

`

const Footer = forwardRef((props, ref) => (
  <Wrapper ref={ref}>
    <Container>
      <Row>
        <Col xs={6} sm={4} className='mb-20'>
          <h5>About website</h5>
          <ul className='list-unstyled mb-0'>
            <li>Next js</li>
            <li>Node js</li>
            <li>React js</li>
          </ul>
        </Col>
        <Col xs={6} sm={4} className='mb-20'>
          <h5>About us</h5>
          <ul className='list-unstyled mb-0'>
            <li>Interview</li>
            <li>Fron-end test</li>
          </ul>
        </Col>
        <Col xs={6} sm={4} className='mb-20'>
          <h5>Policy</h5>
          <ul className='list-unstyled mb-0'>
            <li>Comingsoon</li>
          </ul>
        </Col>
      </Row>
      <Row className='align-items-center justify-content-between'>
        <Col xs={12} sm={6} className='copyright text-center text-sm-left'>
          © 2019 ToNoey Developer.
        </Col>
        <Col xs={12} sm={6} className='social text-center text-sm-right'>
          <FaFacebookSquare />
          &nbsp;&nbsp;
          <FaTwitterSquare />
          &nbsp;&nbsp;
          <FaInstagram />
        </Col>
      </Row>
    </Container>
  </Wrapper>
))

export default Footer
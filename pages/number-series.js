import { useState, useEffect } from 'react'
import { Card, Button, Container, Jumbotron } from 'react-bootstrap'
import numberSeries from '../utils/numberSeries'

const NumberSeriesPages = () => {
  const [numbers, setNumbers] = useState([])
  const [pattern, setPattern] = useState([])

  const handleNumbers = () => {
    let _numbers = localStorage.getItem('_numbers')
    let _pattern = localStorage.getItem('_pattern')

    if (_pattern === null) {
      _pattern = [null, 5, 9, 15, 23, null, null]
      localStorage.setItem('_pattern', JSON.stringify(_pattern))
      setPattern(_pattern)
    } else {
      setPattern(JSON.parse(_pattern))
    }

    if (_numbers === null) {
      try {
        _numbers = numberSeries(_pattern)
        localStorage.setItem('_numbers', JSON.stringify(_numbers))
        setNumbers(_numbers)
      } catch (err) {
        alert(err)
      }
    } else {
      setNumbers(JSON.parse(_numbers))
    }

  }

  useEffect(() => {
    handleNumbers()
  }, [])

  return (
    <Container className='pt-5'>
      <Jumbotron>
        <h1 className='mb-5'>Number series algorithm</h1>
        <Card>
          <Card.Header>
            Pattern = <Button>[ {pattern.map(val => val === null ? 'null' : val).join(', ')} ]</Button>
          </Card.Header>
          <Card.Body>
            Result = <Button>[ {numbers.join(', ')} ]</Button>
          </Card.Body>
        </Card>
      </Jumbotron>
    </Container>
  )  
}

export default NumberSeriesPages
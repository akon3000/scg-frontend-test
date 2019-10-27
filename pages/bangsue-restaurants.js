import axios from 'axios'
import { useState, useEffect } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { API_URL, API_PHOTO } from '../constants/config'
import Loading from '../components/Loading'

const BangsueRestaurantsPages = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [restaurants, setRestaurants] = useState([])

  const onFetchRestaurant = async () => {
    setIsLoading(true)
    try {
      const { data: response } = await axios.get(`${API_URL}/bangsue-restaurants`)
      setIsLoading(false)
      
      if (response.status === 'OK') {
        localStorage.setItem('_restaurants', JSON.stringify(response.results))
        setRestaurants(response.results)
      } else {
        alert(response.error_message)
      }

    } catch (err) {
      setIsLoading(false)
      alert('Oops something went wrong!!')
    }
  }

  const handleRestaurant = () => {
    const _restaurants = localStorage.getItem('_restaurants')

    if (_restaurants === null) {
      onFetchRestaurant()
    } else {
      setRestaurants(JSON.parse(_restaurants))
    }
  }

  useEffect(() => {
    handleRestaurant()
  }, [])

  return isLoading ? (
    <Loading />
  ) : (
    <Container className='pt-5 pb-5'>
      <Row>
        {
          restaurants.map(({ photos, ...restaurant}) => (
            <Col
              sm={6}
              md={4}
              xs={12}
              key={restaurant.id}
              className='mb-3'
            >
              <Card>
                <Card.Img
                  variant='top'
                  src={photos
                    ? `${API_PHOTO}?maxheight=200&photoreference=${photos[0].photo_reference}&key=AIzaSyAvWbD0yw1zux_PQIIjyiyNCguRS0x-Cu0`
                    : '/static/images/placeholder.png'
                  }
                  onLoad={e => {
                    /**
                     * slove problem Google is returning an image along with the 403 status
                     * @note 403 for case limit request
                     */
                    if (e.target.naturalHeight <= 100 || e.target.naturalWidth <= 100) {
                      e.target.src = '/static/images/placeholder.png'
                    }
                  }}
                  style={{ height: 200 }}
                />
                <Card.Body>
                  <Card.Text className='text-truncate'>{restaurant.name}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

export default BangsueRestaurantsPages
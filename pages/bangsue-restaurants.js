import { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Loading from '../components/Loading'

const BangsueRestaurantsPages = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [restaurants, setRestaurants] = useState([])

  const handleFindRestaurant = async () => {
    try {

    } catch (err) {

    }
  }

  useEffect(() => {

  }, [])

  return (
    <Loading />
  )
}

export default BangsueRestaurantsPages
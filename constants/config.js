import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export const { API_URL, API_PHOTO } = publicRuntimeConfig
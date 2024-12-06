import { AdapterRequest } from '@/classes/axios'
import axios from 'axios'

export const ApiRequest = new AdapterRequest()

export const Api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Accept-Language': 'pt-BR',
    'Content-Type': 'application/json',
  },
})

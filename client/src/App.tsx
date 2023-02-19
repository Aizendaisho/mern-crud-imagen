import React from 'react'
import { useApicall } from './hooks/useApiCall'

export default function App() {
  const {data} = useApicall()
  console.log(data)
  return (
    <div>App</div>
  )
}

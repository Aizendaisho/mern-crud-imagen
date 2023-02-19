import React from 'react'
import { useApicall } from './hooks/useApiCall'
import { Posts } from './types'

export default function App() {
  const {data} = useApicall()
  console.log(data)
  return (
    <div className='grid grid-cols-4'>{data.map((post: Posts) =>(
      <div key={post._id}>
        <img src={post.image.url} alt={post.title}  />
        <h2>{post.title}</h2>
        <p>{post.description}</p>
      </div>
    ))}</div>
  )
}

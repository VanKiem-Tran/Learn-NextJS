import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function Error() {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 5000)
  }, [])
  return (
    <div>
      <div className="not-found">
        <h1>Ooooops...</h1>
        <h2>That page cannot be found</h2>
        <p>
          Go to the <Link href="/">Homepage</Link>
        </p>
      </div>
    </div>
  )
}

export default Error

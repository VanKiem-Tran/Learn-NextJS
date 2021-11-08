import { InferGetStaticPropsType } from 'next'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

type Post = {
  id: number
  name: string
  email: string
  website: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
}
interface IParams extends ParsedUrlQuery {
  id: string
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data: Post[] = await res.json()

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  const data = await res.json()
  return {
    props: { ninja: data },
  }
}

function Detail({ ninja }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
      <p>{ninja.address.geo.lat}</p>
    </div>
  )
}

export default Detail

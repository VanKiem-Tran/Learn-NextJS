import * as React from 'react'
import { InferGetStaticPropsType } from 'next'
import style from '../../styles/Ninjas.module.css'
import Link from 'next/link'

type Post = {
  id: number
  name: string
  username: string
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const posts: Post[] = await res.json()

  return {
    props: { ninjas: posts },
  }
}

export default function Ninjas({ ninjas }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1 className={style.title}>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
          <a className={style.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  )
}

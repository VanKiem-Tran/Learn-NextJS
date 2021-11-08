import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Home: NextPage = () => {
  const router = useRouter()
  function gotoDetailPage() {
    router.push({
      pathname: '/posts/[postId]',
      query: {
        postId: 123,
        ref: 'social',
      },
    })
  }
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Defining routes by using predefined paths is not always enough for complex applications.
      </p>
      <p className={styles.text}>
        Defining routes by using predefined paths is not always enough for complex applications.
      </p>
      <Link href="/ninjas">
        <a className={styles.btn}> See Ninjas Listing </a>
      </Link>
    </div>
  )
}

export default Home

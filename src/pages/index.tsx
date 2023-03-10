import Head from 'next/head';
import Login from '@/components/Login';

export default function Home() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Card91 Web Application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </>
  )
}

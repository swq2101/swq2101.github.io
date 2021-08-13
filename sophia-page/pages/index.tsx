
import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-green-900">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl text-gray-200">
          Hello! Sophia here. 
        </h1>

        <p className="mt-3 text-2xl text-gray-200">
          Give me just a second to get ready. Check back in fall 2021 for more!
        </p>
          
      </main>
    </div>
  )
}

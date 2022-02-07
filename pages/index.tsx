import clsx from 'clsx'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <title>4 bilder 1 konzept</title>
      </Head>
      <div className="max-w-md mx-auto">
        <h1 className="text-center text-4xl mt-16 mb-16">4 bilder 1 konzept</h1>
        <Grid />
      </div>
    </>
  )
}

function Grid() {
  const [solved, setSolved] = useState<number[] | undefined>(undefined)

  useEffect(() => {
    try {
      setSolved(
        JSON.parse(localStorage.getItem('4bilder1konzept_solved') ?? '')
      )
    } catch (e) {
      setSolved([])
    }
  }, [])

  if (!solved) return null

  return (
    <div className="grid sm:grid-cols-5 sm:gap-6 sm:gap-y-8 grid-cols-4 gap-y-5">
      {new Array(20).fill(0).map((_, i) => (
        <Cell id={i + 1} solved={solved.includes(i + 1)} key={i + 1} />
      ))}
    </div>
  )
}

function Cell({ id, solved }: { id: number; solved: boolean }) {
  return (
    <div className="flex justify-center">
      <Link href={`/play/${id}`}>
        <a className="block w-12 h-12">
          <div
            className={clsx(
              'h-full w-full rounded-full',
              'flex justify-center items-center',
              'select-none ',
              solved
                ? 'bg-green-300'
                : 'bg-gray-100 hover:bg-white hover:border-2'
            )}
          >
            {id}
          </div>
        </a>
      </Link>
    </div>
  )
}

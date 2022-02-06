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
    <>
      {[1, 6, 11, 16].map((f) => (
        <Line from={f} key={f} solved={solved} />
      ))}
    </>
  )
}

function Line({ from, solved }: { from: number; solved: number[] }) {
  return (
    <div className="flex justify-between mt-6">
      {[0, 1, 2, 3, 4].map((i) => (
        <Cell id={from + i} solved={solved.includes(from + i)} key={i} />
      ))}
    </div>
  )
}

function Cell({ id, solved }: { id: number; solved: boolean }) {
  return (
    <Link href={`/play/${id}`}>
      <a>
        <div
          className={clsx(
            'w-12 h-12 rounded-full',
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
  )
}

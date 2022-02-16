import clsx from 'clsx'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { levelData, Levels } from '../levels'
import { loadProgress } from '../src/data'

interface HomeProps {
  levels: Levels
}

export default function Home({ levels }: HomeProps) {
  return (
    <>
      <Head>
        <title>4 bilder 1 konzept</title>
      </Head>
      <div className="max-w-md mx-auto mb-4">
        <h1 className="text-center text-4xl mt-16 mb-16 dark:text-white">
          4 bilder 1 konzept
        </h1>
        <Grid levels={levels} />
      </div>
    </>
  )
}

interface GridProps {
  levels: Levels
}

function Grid({ levels }: GridProps) {
  const [solved, setSolved] = useState<number[] | undefined>(undefined)

  useEffect(() => {
    setSolved(loadProgress)
  }, [])

  if (!solved) return null

  const keys = Object.keys(levels).map((x) => parseInt(x))
  keys.sort((a, b) => a - b)

  return (
    <>
      <div
        className={clsx(
          'grid sm:grid-cols-5 sm:gap-6 sm:gap-y-8',
          'grid-cols-4 gap-y-5'
        )}
      >
        {keys.map((lvl) => (
          <Cell lvl={lvl} solved={solved.includes(levels[lvl].id)} key={lvl} />
        ))}
      </div>
      <div className="mt-16 text-center text-neutral-500 text-xs">
        <Link href="/about">
          <a>info</a>
        </Link>
        <span className="mx-5">|</span>
        <Link href="/privacy">
          <a>datenschutz</a>
        </Link>
        <span className="mx-5">|</span>
        <Link href="/stats">
          <a>statistik</a>
        </Link>
      </div>
    </>
  )
}

interface CellProps {
  lvl: number
  solved: boolean
}

function Cell({ lvl, solved }: CellProps) {
  return (
    <div className="flex justify-center">
      <Link href={`/play/${lvl}`} prefetch={false}>
        <a className="block w-12 h-12">
          <div
            className={clsx(
              'h-full w-full rounded-full',
              'flex justify-center items-center',
              'select-none dark:text-white',
              solved
                ? 'bg-green-300 dark:bg-green-800'
                : 'bg-gray-100 hover:bg-white hover:border-2 ' +
                    'dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:hover:border-neutral-600'
            )}
          >
            {lvl}
          </div>
        </a>
      </Link>
    </div>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: { levels: levelData }, // will be passed to the page component as props
  }
}

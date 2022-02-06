import clsx from 'clsx'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>4 bilder 1 konzept</title>
      </Head>
      <div className="max-w-md mx-auto">
        <h1 className="text-center text-4xl mt-16 mb-16">4 bilder 1 konzept</h1>
        <Grid />
      </div>
    </div>
  )
}

function Grid() {
  // TODO highlight solved levels
  return (
    <>
      <Line from={1} />
      <Line from={6} />
      <Line from={11} />
      <Line from={16} />
    </>
  )
}

function Line({ from }: { from: number }) {
  return (
    <div className="flex justify-between mt-6">
      <Cell id={from} />
      <Cell id={from + 1} />
      <Cell id={from + 2} />
      <Cell id={from + 3} />
      <Cell id={from + 4} />
    </div>
  )
}

function Cell({ id }: { id: number }) {
  return (
    <a href={`/play/${id}`}>
      <div
        className={clsx(
          'w-12 h-12 rounded-full bg-gray-200',
          'flex justify-center items-center',
          'select-none hover:bg-emerald-100'
        )}
      >
        {id}
      </div>
    </a>
  )
}

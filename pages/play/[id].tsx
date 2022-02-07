import clsx from 'clsx'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Level, Levels } from '../../levels'
import Script from 'next/script'

export default function LevelPage({ id, level }: { level: Level; id: string }) {
  return (
    <>
      <Head>
        <title>Level {id} | 4 bilder 1 konzept</title>
      </Head>
      <Script src="/scripts/bcrypt.min.js"></Script>
      <div className="max-w-md mx-auto" key={id}>
        <div className="sm:mt-6 mt-4 sm:ml-0 ml-4">
          <Link href="/">
            <a>
              <button className="py-0.5 px-1 pr-2 rounded-full bg-gray-100 hover:bg-gray-200">
                ᐸ Übersicht
              </button>
            </a>
          </Link>
        </div>
        <h1 className="text-center text-3xl sm:mt-4 sm:mb-8 mb-4 mt-2">
          Level {id}
        </h1>
        <Images images={level.images} />
        <Letters level={level} id={parseInt(id) ?? -1} />
      </div>
    </>
  )
}

function Images({ images }: { images: Level['images'] }) {
  const [highlight, setHighlight] = useState<'A' | 'B' | 'C' | 'D' | undefined>(
    undefined
  )

  const hightlightImageSrc =
    highlight == 'A'
      ? images.imageA
      : highlight == 'B'
      ? images.imageB
      : highlight == 'C'
      ? images.imageC
      : highlight == 'D'
      ? images.imageD
      : ''

  if (hightlightImageSrc) {
    return (
      <div
        className="w-[352px] mx-auto h-[363px] cursor-pointer border pt-1"
        style={{ WebkitTapHighlightColor: 'transparent' }}
        onClick={() => setHighlight(undefined)}
      >
        <Image src={hightlightImageSrc} alt="" width={350} height={350}></Image>
      </div>
    )
  }

  return (
    <div className="w-[352px] mx-auto h-[363px]">
      <div className="flex justify-between">
        <div
          className="border cursor-pointer"
          onClick={() => setHighlight('A')}
        >
          <Image
            src={images.imageA}
            alt=""
            width={160}
            height={160}
            priority
          ></Image>
        </div>
        <div
          className="border cursor-pointer"
          onClick={() => setHighlight('B')}
        >
          <Image
            src={images.imageB}
            alt=""
            width="160"
            height="160"
            priority
          ></Image>
        </div>
      </div>
      <div className="flex justify-between mt-7">
        <div
          className="border cursor-pointer"
          onClick={() => setHighlight('C')}
        >
          <Image
            src={images.imageC}
            alt=""
            width={160}
            height={160}
            priority
          ></Image>
        </div>
        <div
          className="border cursor-pointer"
          onClick={() => setHighlight('D')}
        >
          <Image
            src={images.imageD}
            alt=""
            width="160"
            height="160"
            priority
          ></Image>
        </div>
      </div>
    </div>
  )
}

function Letters({ level, id }: { level: Level; id: number }) {
  const letterStyle =
    /* className={ */ 'w-8 h-8 border flex justify-center items-center select-none'

  const [selection, setSelection] = useState<number[]>(
    new Array(level.answerLength).fill(-1)
  )

  const [mode, setMode] = useState<'input' | 'wrong' | 'correct'>('input')

  useEffect(() => {
    if (selection.every((x) => x != -1)) {
      // check
      const answer = selection.map((x) => level.letters[x]).join('')
      ;(window as any).dcodeIO.bcrypt
        .compare(answer, level.answerHash)
        .then((ok: boolean) => {
          if (ok) {
            setMode('correct')
            try {
              const solved: number[] = JSON.parse(
                localStorage.getItem('4bilder1konzept_solved') ?? ''
              )
              if (!solved.includes(id)) {
                solved.push(id)
              }
              localStorage.setItem(
                '4bilder1konzept_solved',
                JSON.stringify(solved)
              )
            } catch (e) {
              localStorage.setItem('4bilder1konzept_solved', `[${id}]`)
            }
          } else {
            setMode('wrong')
          }
        })
    } else {
      setMode('input')
    }
  }, [selection, level, id])

  return (
    <>
      <div className="sm:mt-12 mt-8 mx-auto flex justify-center gap-2">
        {new Array(level.answerLength).fill(0).map((_, i) => (
          <div
            className={clsx(
              'w-8 h-8 border-2 border-gray-400',
              'flex justify-center items-center text-xl select-none',
              selection[i] >= 0 && mode != 'correct' && 'cursor-pointer',
              mode == 'wrong' && 'bg-orange-400',
              mode == 'correct' && 'bg-green-300'
            )}
            key={i}
            onClick={() => {
              if (mode == 'correct') return
              const newSelection = [...selection]
              newSelection[i] = -1
              setSelection(newSelection)
            }}
          >
            {selection[i] >= 0 ? level.letters[selection[i]] : null}
          </div>
        ))}
      </div>
      {mode == 'correct' && id < 20 ? (
        <div className="mt-8 flex justify-center">
          <Link href={`/play/${id + 1}`}>
            <a>
              <button className="py-1 px-3 rounded-full bg-green-200 hover:bg-green-300">
                nächstes Level
              </button>
            </a>
          </Link>
        </div>
      ) : (
        <div className="sm:mt-12 mt-8 w-[350px] mx-auto">
          <div className="flex justify-between">
            {[0, 1, 2, 3, 4, 5].map((i) => renderCell(i))}
          </div>

          <div className="mt-4 flex justify-between">
            {[6, 7, 8, 9, 10, 11].map((i) => renderCell(i))}
          </div>
        </div>
      )}
    </>
  )

  function renderCell(i: number) {
    return selection.some((x) => x == i) ? (
      <div className={letterStyle} key={i}></div>
    ) : (
      <div
        className={clsx(
          letterStyle,
          selection.every((l) => l != i) &&
            selection.some((l) => l == -1) &&
            mode != 'correct' &&
            'cursor-pointer'
        )}
        key={i}
        onClick={() => {
          if (mode == 'correct') return
          setSelection((selection) => {
            const newSelection = [...selection]
            const firstEmpty = newSelection.findIndex((x) => x == -1)
            if (firstEmpty >= 0) {
              newSelection[firstEmpty] = i
            }
            return newSelection
          })
        }}
      >
        {level.letters[i]}
      </div>
    )
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string
  return {
    props: { id, level: Levels[id] }, // will be passed to the page component as props
  }
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(Levels).map((id) => ({ params: { id } })),
    fallback: false,
  }
}

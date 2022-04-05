/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Level, levelData } from '../../levels'
import Script from 'next/script'
import { addLevel, loadProgress } from '../../src/data'
import { useRouter } from 'next/router'

type Modes = 'play' | 'beforeConsent' | 'consent'

interface LevelPageProps {
  level: Level
  lvl: number
  letters: string[]
}

export default function LevelPage({ lvl, level, letters }: LevelPageProps) {
  const [mode, setMode] = useState<Modes>('play')
  const [nextLevel, setNextLevel] = useState<number>(-1)
  const router = useRouter()

  useEffect(() => {
    const progress = loadProgress()
    setNextLevel(-1)
    const levels = Object.keys(levelData)
    let currentIndex = levels.indexOf(lvl.toString()) + 1
    for (;;) {
      if (currentIndex >= levels.length) {
        return
      }
      if (!progress.includes(levelData[levels[currentIndex]].id)) {
        setNextLevel(parseInt(levels[currentIndex]))
        return
      }
      currentIndex++
    }
  }, [lvl])

  return (
    <>
      <Head>
        <title>Level {lvl} | 4 bilder 1 konzept</title>
      </Head>
      <Script src="/scripts/bcrypt.min.js"></Script>
      {mode == 'consent' && (
        <div className="max-w-md mx-auto m-6 mt-12 dark:text-white">
          <div className="border-2 rounded-xl p-3 mx-2">
            <h1 className="text-center text-3xl sm:mt-4 sm:mb-8 mb-4 mt-10 dark:text-white">
              Einverständnis
            </h1>
            <p>
              Wir benötigen dein Einverständnis, um entsprechend der{' '}
              <Link href="/privacy">
                <a className="text-blue-600 dark:text-blue-400">
                  Datenschutzerklärung
                </a>
              </Link>{' '}
              Daten auf diesem Gerät zu speichern. Dadurch kannst du zu einem
              späteren Zeitpunkt an den Aufgaben weiterarbeiten und erhältst
              eine Übersicht auf deine gelösten Aufgaben.
            </p>
            <p>
              <button
                onClick={() => {
                  //setConsent()
                  addLevel(level.id)
                  if (nextLevel > 0) router.push(`/play/${nextLevel}`)
                  else setMode('play')
                }}
                className={clsx(
                  'w-full bg-green-300 p-2 rounded-xl',
                  'mt-4 dark:bg-green-800'
                )}
              >
                Fortschritt auf diesem Gerät speichern
              </button>
            </p>
            <p>
              <button
                onClick={() => {
                  setMode('play')
                }}
                className={clsx(
                  'w-full bg-neutral-200 p-2 rounded-xl',
                  'mt-4 dark:bg-neutral-700'
                )}
              >
                zurück
              </button>
            </p>
          </div>
        </div>
      )}
      <div
        className={clsx('max-w-md mx-auto mb-6', mode == 'consent' && 'hidden')}
        key={lvl}
      >
        <div className="sm:mt-6 mt-4 sm:ml-0 ml-4">
          <Link href="/">
            <a>
              <button
                className={clsx(
                  'py-0.5 px-1 pr-2 rounded-full bg-gray-100',
                  'hover:bg-gray-200 dark:text-white dark:bg-neutral-800 dark:hover:bg-neutral-700'
                )}
                onClick={(e) => {
                  if (mode == 'beforeConsent') {
                    e.preventDefault()
                    setMode('consent')
                  }
                }}
              >
                ᐸ Übersicht
              </button>
            </a>
          </Link>
        </div>
        <h1
          className={clsx(
            'text-center text-3xl dark:text-white',
            'sm:mt-4 sm:mb-8 mb-4 mt-2'
          )}
        >
          Level {lvl}
        </h1>
        <Images id={level.id} sources={level.sources} />
        <Letters
          level={level}
          lvl={lvl}
          setPageMode={setMode}
          nextLevel={nextLevel}
          letters={letters}
        />
      </div>
    </>
  )
}

interface ImagesProps {
  id: number
  sources: string[]
}

function Images({ id, sources }: ImagesProps) {
  const images =
    id == -1
      ? new Array(4).fill('/images/test.png')
      : ['A', 'B', 'C', 'D'].map(
          (k, i) => `/images_serlo/${id}${k}_${sources[i]}.png`
        )

  const [highlight, setHighlight] = useState<-1 | 0 | 1 | 2 | 3>(-1)

  const hightlightImageSrc = highlight >= 0 ? images[highlight] : undefined

  if (hightlightImageSrc) {
    const link = `de.serlo.org/${sources[highlight]}`
    return (
      <div
        className={clsx(
          'w-[352px] mx-auto h-[363px]',
          'cursor-pointer border pt-1 bg-white relative'
        )}
        style={{ WebkitTapHighlightColor: 'transparent' }}
        onClick={() => setHighlight(-1)}
      >
        <img src={hightlightImageSrc} alt="" width={350} height={350}></img>
        <div className="absolute right-0 bottom-0 bg-slate-200 text-blue-600 hover:underline rounded text-sm px-1">
          <a href={`https://${link}`} target="_blank" rel="noreferrer">
            {link}
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="w-[352px] mx-auto h-[363px]">
      <div className="flex justify-between">
        <div
          className="border cursor-pointer bg-white"
          onClick={() => setHighlight(0)}
        >
          <img src={images[0]} alt="" width={160} height={160}></img>
        </div>
        <div
          className="border cursor-pointer bg-white"
          onClick={() => setHighlight(1)}
        >
          <img src={images[1]} alt="" width="160" height="160"></img>
        </div>
      </div>
      <div className="flex justify-between mt-7 ">
        <div
          className="border cursor-pointer bg-white"
          onClick={() => setHighlight(2)}
        >
          <img src={images[2]} alt="" width={160} height={160}></img>
        </div>
        <div
          className="border cursor-pointer bg-white"
          onClick={() => setHighlight(3)}
        >
          <img src={images[3]} alt="" width="160" height="160"></img>
        </div>
      </div>
    </div>
  )
}

interface LettersProps {
  level: Level
  lvl: number
  setPageMode: (mode: Modes) => void
  nextLevel: number
  letters: string[]
}

function Letters({
  level,
  lvl,
  setPageMode,
  nextLevel,
  letters,
}: LettersProps) {
  const id = lvl
  const letterStyle =
    /* className={ */ 'w-8 h-8 border flex justify-center items-center select-none dark:text-white' /*}*/

  const [selection, setSelection] = useState<number[]>(
    new Array(level.answer.length).fill(-1)
  )

  const [mode, setMode] = useState<'input' | 'wrong' | 'correct'>('input')

  useEffect(() => {
    if (selection.every((x) => x != -1)) {
      // check
      const answer = selection.map((x) => letters[x]).join('')
      if (answer == level.answer.toUpperCase()) {
        setMode('correct')
        addLevel(level.id)
      } else {
        setMode('wrong')
      }
    } else {
      setMode('input')
    }
  }, [selection, level, id, setPageMode, letters])

  return (
    <>
      <div
        className={clsx(
          'sm:mt-12 mt-8 mx-auto flex justify-center  dark:text-white',
          level.answer.length > 10 ? 'gap-1' : 'gap-2'
        )}
      >
        {new Array(level.answer.length).fill(0).map((_, i) => (
          <div
            className={clsx(
              'border-gray-400',
              'flex justify-center items-center text-xl select-none',
              selection[i] >= 0 && mode != 'correct' && 'cursor-pointer',
              mode == 'wrong' && 'bg-orange-400 dark:bg-orange-800',
              mode == 'correct' && 'bg-green-300 dark:bg-green-800',
              mode == 'input' && 'dark:bg-neutral-700',
              level.answer.length > 10 ? 'w-7 h-7 border' : 'w-8 h-8 border-2'
            )}
            key={i}
            onClick={() => {
              if (mode == 'correct') return
              const newSelection = [...selection]
              newSelection[i] = -1
              setSelection(newSelection)
            }}
          >
            {selection[i] >= 0 ? letters[selection[i]] : null}
          </div>
        ))}
      </div>
      {mode == 'correct' ? (
        <div className="mt-8 flex justify-center">
          <Link href={nextLevel > 0 ? `/play/${nextLevel}` : '/'}>
            <a>
              <button
                className="py-1 px-3 rounded-full bg-green-200 dark:bg-green-800 dark:hover:bg-green-600 dark:text-white"
                onClick={(e) => {
                  /*if (needsConsent()) {
                    e.preventDefault()
                    setPageMode('consent')
                  }*/
                }}
              >
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
        {letters[i]}
      </div>
    )
  }
}

const availableLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜß'

export const getStaticProps: GetStaticProps<LevelPageProps> = async (
  context
) => {
  const id = context.params?.id as string
  const letters = levelData[id].answer.toUpperCase().split('')
  while (letters.length < 12) {
    letters.push(
      availableLetters.charAt(
        Math.floor(Math.random() * availableLetters.length)
      )
    )
  }
  shuffleArray(letters)
  return {
    props: { lvl: parseInt(id), level: levelData[id], letters }, // will be passed to the page component as props
  }
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(levelData).map((id) => ({ params: { id } })),
    fallback: false,
  }
}

function shuffleArray(array: any[]) {
  let curId = array.length
  // There remain elements to shuffle
  while (0 !== curId) {
    // Pick a remaining element
    let randId = Math.floor(Math.random() * curId)
    curId -= 1
    // Swap it with the current element.
    let tmp = array[curId]
    array[curId] = array[randId]
    array[randId] = tmp
  }
  return array
}

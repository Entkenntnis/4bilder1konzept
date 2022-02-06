import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Level, Levels } from '../../levels'

export default function LevelPage({ id, level }: { level: Level; id: string }) {
  return (
    <>
      <Head>
        <title>Level {id} | 4 bilder 1 konzept</title>
      </Head>
      <div className="max-w-md mx-auto">
        <div className="mt-6">
          <Link href="/">
            <a>
              <button className="py-0.5 px-1 pr-2 rounded-full bg-gray-100 hover:bg-gray-200">
                ᐸ Übersicht
              </button>
            </a>
          </Link>
        </div>
        <h1 className="text-center text-3xl mt-4 mb-8">Level {id}</h1>
        <Images images={level.images} />
        <Letters level={level} />
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
        className="w-[350px] mx-auto h-[363px] cursor-pointer"
        onClick={() => setHighlight(undefined)}
      >
        <Image
          src={hightlightImageSrc}
          alt={`Bild ${highlight}`}
          width={350}
          height={350}
        ></Image>
      </div>
    )
  }

  return (
    <div className="w-[350px] mx-auto">
      <div className="flex justify-between">
        <div
          className="border cursor-pointer"
          onClick={() => setHighlight('A')}
        >
          <Image
            src={images.imageA}
            alt="Bild A"
            width={160}
            height={160}
          ></Image>
        </div>
        <div
          className="border cursor-pointer"
          onClick={() => setHighlight('B')}
        >
          <Image
            src={images.imageB}
            alt="Bild A"
            width="160"
            height="160"
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
            alt="Bild A"
            width={160}
            height={160}
          ></Image>
        </div>
        <div
          className="border cursor-pointer"
          onClick={() => setHighlight('D')}
        >
          <Image
            src={images.imageD}
            alt="Bild A"
            width="160"
            height="160"
          ></Image>
        </div>
      </div>
    </div>
  )
}

function Letters({ level }: { level: Level }) {
  const letterStyle =
    /* className={ */ 'w-8 -h-8 border flex justify-center items-center select-none cursor-pointer'

  return (
    <>
      <div className="mt-12 mx-auto flex justify-center gap-5">
        {new Array(level.answerLength).fill(0).map((_, i) => (
          <div className="w-8 h-8 border" key={i}></div>
        ))}
      </div>
      <div className="mt-12 w-[350px] mx-auto">
        <div className="flex justify-between">
          <div className={letterStyle}>{level.letters[0]}</div>
          <div className={letterStyle}>{level.letters[1]}</div>
          <div className={letterStyle}>{level.letters[2]}</div>
          <div className={letterStyle}>{level.letters[3]}</div>
          <div className={letterStyle}>{level.letters[4]}</div>
          <div className={letterStyle}>{level.letters[5]}</div>
        </div>

        <div className="mt-4 flex justify-between">
          <div className={letterStyle}>{level.letters[6]}</div>
          <div className={letterStyle}>{level.letters[7]}</div>
          <div className={letterStyle}>{level.letters[8]}</div>
          <div className={letterStyle}>{level.letters[9]}</div>
          <div className={letterStyle}>{level.letters[10]}</div>
          <div className={letterStyle}>{level.letters[11]}</div>
        </div>
      </div>
    </>
  )
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

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { levelData } from '../levels'

interface StatsData {
  players: number
  levels: { [key: string]: number }
}

export default function Stats() {
  const [data, setData] = useState<StatsData | undefined>(undefined)

  useEffect(() => {
    void (async () => {
      const res = await fetch('https://stats-4bilder1konzept.arrrg.de/stats')
      const json = await res.json()
      setData(json)
    })()
  }, [])

  return (
    <div className="max-w-md mx-auto mt-16 dark:text-white">
      {data && (
        <>
          <p className="mt-4">Spieler gesamt: {data.players}</p>
          {Object.keys(levelData).map((lvl) =>
            data.levels[levelData[lvl].id] ? (
              <p key={lvl} className="mt-2">
                Level {lvl}:{' '}
                <span className="inline-block ml-3">
                  {data.levels[levelData[lvl].id]} Spieler
                </span>
              </p>
            ) : null
          )}
        </>
      )}

      <p className="mt-8">
        <Link href="/">
          <a className="text-blue-400">zurück</a>
        </Link>
      </p>
    </div>
  )
}

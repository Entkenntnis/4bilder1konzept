import Link from 'next/link'
import { useState } from 'react'

export default function Reset() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="max-w-md mx-auto mt-16">
      {!loaded ? (
        <>
          <p className="dark:text-white">
            Fortschritt auf diesem Gerät zurücksetzen?
          </p>
          <p className="mt-4 text-center">
            <button
              className="px-5 py-1 bg-orange-400 rounded"
              onClick={() => {
                const res = confirm('Fortschritt zurücksetzen?')
                if (res) {
                  localStorage.removeItem('4bilder1konzept_solved')
                  setLoaded(true)
                }
              }}
            >
              Ja
            </button>
          </p>
        </>
      ) : (
        <p>Daten erfolgreich zurückgesetzt.</p>
      )}
      <p className="mt-4">
        <Link href="/">
          <a className="text-blue-400">zurück</a>
        </Link>
      </p>
    </div>
  )
}

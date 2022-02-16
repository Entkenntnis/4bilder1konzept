import Link from 'next/link'
import { useState } from 'react'

export default function Reset() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="max-w-md mx-auto mt-16">
      {!loaded ? (
        <>
          <p className="dark:text-white">
            HALLO, das hier ist die Datenschutzerklärung
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

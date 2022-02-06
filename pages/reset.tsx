import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Reset() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    localStorage.removeItem('4bilder1konzept_solved')
    setLoaded(true)
  }, [])

  if (!loaded) return null

  return (
    <div>
      <p>Fortschritt auf diesem Gerät zurückgesetzt.</p>
      <p>
        <Link href="/">
          <a className="text-blue-400">zurück</a>
        </Link>
      </p>
    </div>
  )
}

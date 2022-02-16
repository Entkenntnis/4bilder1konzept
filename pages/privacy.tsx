import Link from 'next/link'
import { clearData } from '../src/data'

export default function Privacy() {
  return (
    <div className="max-w-md mx-auto mt-16">
      <p className="dark:text-white">
        Die wichtigsten Informationen zum Datenschutz: Die Website wird über
        Vercel gehostet. Bei der Bereitstellung werden dabei benötigte Daten
        übertragen. Es findet keine Speicherung oder weitere Verarbeitung statt.
      </p>
      <p className="dark:text-white mt-4">
        Dein Fortschritt wird nach einer Einwillung lokal auf diesem Gerät
        gespeichert. Du kannst hier mit einem Klick auf diesen Link{' '}
        <button
          className="text-blue-600"
          onClick={() => {
            clearData()
            alert('Daten von diesem Gerät gelöscht.')
          }}
        >
          deine Daten löschen
        </button>
        .
      </p>
      <p className="dark:text-white mt-4">
        Zur Reichenweitenmessung und zur Rückmeldung über die
        Aufgabenschwierigkeit wird eine anonymisierte Statistik angelegt. Diese
        wird auf deinem Uberspace in Deutschland gespeichert. Dabei werden keine
        personenbezogene Daten erfasst.
      </p>
      <p className="mt-4">
        <Link href="/">
          <a className="text-blue-600">zurück</a>
        </Link>
      </p>
    </div>
  )
}

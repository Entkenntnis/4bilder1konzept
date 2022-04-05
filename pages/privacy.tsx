import Head from 'next/head'
import Link from 'next/link'

export default function Privacy() {
  return (
    <div className="max-w-md mx-auto mt-16">
      <Head>
        <title>datenschutz</title>
      </Head>
      <p className="dark:text-white">
        Eine so kleine Website sammelt nicht viele Daten. Um den Fortschritt
        deines Spiels zu speichern, werden Daten kurzzeitig im Browser
        gespeichert (session storage). Beim Schließen des Tabs werden diese
        Daten gelöscht - ganz einfach. Nichts bleibt länger in deinem Browser.
      </p>
      <p className="dark:text-white mt-4">
        Für die Statistik werden nach dem Lösen von Aufgaben Informationen an
        den Server geschickt. Dabei werden keine personenbezogene Daten erfasst.
      </p>
      <p className="dark:text-white mt-4">
        Die Website an sich wird über{' '}
        <a
          href="https://vercel.com/legal/privacy-policy"
          className="text-blue-600"
          target="_blank"
          rel="noreferrer"
        >
          Vercel
        </a>{' '}
        gehostet. Bei einem Besuch werden keine persönlichen Daten erfasst.
        Näheres kann in der entsprechenden Datenschutzerklärung nachgelesen
        werden. Die Statistiken werden auf einem deutschen{' '}
        <a
          href="https://uberspace.de/de/about/privacy/"
          className="text-blue-600"
          target="_blank"
          rel="noreferrer"
        >
          uberspace
        </a>{' '}
        gespeichert.
      </p>
      <p className="mt-4">
        <Link href="/">
          <a className="text-blue-600">zurück</a>
        </Link>
      </p>
    </div>
  )
}

import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <div className="max-w-md mx-auto mt-16">
      <Head>
        <title>info</title>
      </Head>
      <p className="dark:text-white">
        Hier findest du das Spin-Off eines bekannten Spiels - in dieser Variante
        gefüllt mit Inhalten von Serlo. Errate aus vier Screenshots das richtige
        Lösungswort. Dabei ist ein Konzept gesucht, dass durch alle vier Bilder
        gleichzeitig beschrieben wird. Manche Level sind einfach, andere bieten
        etwas mehr Herausforderung.
      </p>
      <p className="dark:text-white mt-4">
        Für alle, die sich für die Technik dahinter interessieren: Der Quellcode
        findet sich in diesem{' '}
        <a
          href="https://github.com/Entkenntnis/4bilder1konzept#readme"
          className="text-blue-600"
          target="_blank"
          rel="noreferrer"
        >
          Github-Repo
        </a>
        .
      </p>
      <p className="mt-4">
        <Link href="/">
          <a className="text-blue-600">zurück</a>
        </Link>
      </p>
    </div>
  )
}

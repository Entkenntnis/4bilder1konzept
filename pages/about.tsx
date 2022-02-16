import Link from 'next/link'

export default function About() {
  return (
    <div className="max-w-md mx-auto mt-16">
      <p className="dark:text-white">
        Hallo, hier findest du eine mathematische Variante des berühmten
        Bilderrätsel-Klassikers. Für Informationen zum Quellcode besuche das{' '}
        <a
          href="https://github.com/Entkenntnis/4bilder1konzept#readme"
          className="text-blue-600"
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

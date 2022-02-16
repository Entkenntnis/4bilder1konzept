import Link from 'next/link'

export default function Reset() {
  return (
    <div className="max-w-md mx-auto mt-16">
      <p className="dark:text-white">
        HALLO, hier werden Infos angezeigt ... Versionsgeschichte, Link zu
        GitHub
      </p>
      <p className="mt-4">
        <Link href="/">
          <a className="text-blue-400">zurück</a>
        </Link>
      </p>
    </div>
  )
}

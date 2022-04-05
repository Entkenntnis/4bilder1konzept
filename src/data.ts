// helper methods for accessing device storage

const progressStorageKey = '4bilder1konzept_progress'
const consentStorageKey = '4bilder1konzept_consent'

// index page, after mount, which ids to highlight
export function loadProgress(): number[] {
  const storageVal = sessionStorage.getItem(progressStorageKey)

  if (storageVal === null) return []

  if (storageVal) {
    try {
      const obj = JSON.parse(storageVal)
      if (Array.isArray(obj)) {
        if (obj.every((entry) => Number.isSafeInteger(entry))) {
          return obj // passing all validations
        }
      }
    } catch (e) {}
  }

  // no success, reset storage
  sessionStorage.removeItem(progressStorageKey)
  return []
}

// player has solved a level
export function addLevel(id: number) {
  const progress = loadProgress()
  if (!progress.includes(id)) {
    sessionStorage.setItem(
      progressStorageKey,
      JSON.stringify([...progress, id])
    )
    let userId = sessionStorage.getItem(consentStorageKey)
    if (!userId) {
      userId = Math.random().toString()
      sessionStorage.setItem(consentStorageKey, userId)
    }
    if (userId) {
      submit_event(id, userId)
    }
  }
}

function submit_event(quizId: number, userId: string) {
  void (async () => {
    const rawResponse = await fetch(
      'https://stats-4bilder1konzept.arrrg.de/submit_event',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quizId, userId }),
      }
    )
  })()
}

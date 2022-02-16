// helper methods for accessing device storage

const progressStorageKey = '4bilder1konzept_progress'
const consentStorageKey = '4bilder1konzept_consent'

// index page, after mount, which ids to highlight
export function loadProgress(): number[] {
  const storageVal = localStorage.getItem(progressStorageKey)

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
  localStorage.removeItem(progressStorageKey)
  return []
}

// play page, after correct answer, is any consent given?
export function needsConsent(): boolean {
  const ls = localStorage.getItem(consentStorageKey)

  if (!ls) return true

  return false
}

// player allows local storage
export function setConsent() {
  localStorage.setItem(consentStorageKey, Math.random().toString())
  localStorage.setItem(progressStorageKey, '[]')
}

// player has solved a level
export function addLevel(id: number) {
  if (needsConsent()) return // not doing anything

  const progress = loadProgress()
  if (!progress.includes(id)) {
    localStorage.setItem(progressStorageKey, JSON.stringify([...progress, id]))
    const userId = localStorage.getItem(consentStorageKey)
    if (userId) {
      submit_event(id, userId)
    }
  }
}

export function clearData() {
  localStorage.removeItem(consentStorageKey)
  localStorage.removeItem(progressStorageKey)
}

function submit_event(quizId: number, userId: string) {
  //if (window.location.host == 'www.matherhino.de') {
  // only log on production
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
    //const content = await rawResponse.text()
    //console.log(content)
  })()
  //}
}

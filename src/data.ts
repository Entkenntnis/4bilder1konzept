// helper methods for accessing device storage

const progressStorageKey = '4bilder1konzept_progress' // int[], local or session
const consentStorageKey = '4bilder1konzept_consent' // localStorage: user id, sessionStorage: "false"

// index page, after mount, which ids to highlight
export function loadProgress(): number[] {
  const ls = localStorage.getItem(progressStorageKey)
  const ses = sessionStorage.getItem(progressStorageKey)

  const storageVal = ls ?? ses

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
  sessionStorage.removeItem(progressStorageKey)
  return []
}

// play page, after correct answer, is any consent given?
export function needsConsent(): boolean {
  const ls = localStorage.getItem(consentStorageKey)
  const ses = sessionStorage.getItem(consentStorageKey)

  if (!ls && !ses) return true

  return false
}

// player has made choice, true or false
export function setConsent(val: boolean) {
  if (val) {
    localStorage.setItem(consentStorageKey, Math.random().toString())
  } else {
    sessionStorage.setItem(consentStorageKey, 'false')
  }
}

// player has solved a level
export function addLevel(id: number) {
  if (needsConsent()) return // not doing anything

  const progress = loadProgress()
  if (!progress.includes(id)) {
    if (localStorage.getItem(progressStorageKey)) {
      localStorage.setItem(
        progressStorageKey,
        JSON.stringify([...progress, id])
      )
    } else {
      sessionStorage.setItem(
        progressStorageKey,
        JSON.stringify([...progress, id])
      )
    }
  }
}

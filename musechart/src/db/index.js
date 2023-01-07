if (!window.indexedDB) {
  console.log('IndexedDB not supported')
}

let db
const openRequest = window.indexedDB.open('users', 1)

openRequest.onsuccess = () => {
  db = openRequest.result
  readData()
}

openRequest.onupgradeneeded = (e) => {
  db = e.target.result
  const objectStore = db.createObjectStore('users', {
    autoIncrement: true
  })
}

openRequest.onerror = (err) => {
  console.error(err)
}

export const addData = async ({ username, password, email } = {}) => {
  const data = {
    username,
    password,
    email,
    id: window.self.crypto.randomUUID()
  }
  if (readData({ username }) === false) return null
  const transaction = db.transaction(['users'], 'readwrite')
  const objectStore = transaction.objectStore('users')
  const request = objectStore.add(data)
}
export const readData = ({ username } = {}) => {
  let isUnique
  const transaction = db.transaction(['users'], 'readonly')
  const objectStore = transaction.objectStore('users')
  const request = objectStore.openCursor()

  request.onsuccess = (e) => {
    const cursor = e.target.result
    if (cursor) {
      if (cursor.value.username === username) return !isUnique
      cursor.continue()
    }
  }

  if (!isUnique) return false
}

export const verifyData = ({ username, password }) => {
  const transaction = db.transaction(['users'], 'readonly')
  const objectStore = transaction.objectStore('users')
  const request = objectStore.openCursor()

  const requestResult = request.onsuccess = (e) => {
    const cursor = e.target.result
    console.log(cursor)
    if (
      cursor.value.username === username &&
      cursor.value.password === password &&
      cursor
    ) return true

    if (cursor) cursor.continue()
  }
  console.log(requestResult())
  return requestResult()
}

export const getData = (key) => {
  const transaction = db.transaction(['users'], 'readwrite')
  const objectStore = transaction.objectStore('users')
  const request = objectStore.get(key)

  request.onsuccess = (e) => {
    console.log(request)
  }
}

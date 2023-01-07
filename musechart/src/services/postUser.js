export const postUser = async ({ username, password }) => {
  const body = { username, password }
  await fetch('http://localhost:3005/users/', {
    method: 'POST',
    body,
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
}

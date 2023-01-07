export const getFavorites = async ({ username }) => {
  return fetch(`http://localhost:3005/users/${username}`)
    .then(response => response.json())
    .then(response => response)
}

export const updateFavorites = async ({ username, favorites }) => {
  return fetch(`http://localhost:3005/users/${username}`, {
    method: 'PUT',
    body: favorites,
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(response => response)
}

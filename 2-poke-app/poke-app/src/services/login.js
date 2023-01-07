const LoginService = async ({ user, password }) => {
  return await fetch('http://localhost:8000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user, password })
  })
    .then(res => {
      if (!res.ok) throw new Error('Something went bad')
      return res.json()
    })
    .then(res => {
      const { token, user } = res
      return { token, user }
    })
}

export default LoginService

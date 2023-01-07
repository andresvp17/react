const RegisterService = async ({ user, password }) => {
  return await fetch('http://localhost:8000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user, password })
  })
    .then(res => {
      if (!res.ok) throw new Error('Something went bad')
      return true
    })
}

export default RegisterService

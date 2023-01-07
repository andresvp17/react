import { supabase } from './supabase'
const prefix = import.meta.env.VITE_DATABASE_URL
const defaultAvatar = 'https://media.istockphoto.com/photos/european-short-haired-cat-picture-id1072769156?k=20&m=1072769156&s=612x612&w=0&h=k6eFXtE7bpEmR2ns5p3qe_KYh098CVLMz4iKm5OuO6Y='

export const getSingleUser = async ({ username }) => {
  const { data: singleUser, error } = await supabase
    .from('users')
    .select('*')
    .eq('username', username)
  return { singleUser, error }
}

export const getRowByUser = async ({ username }) => {
  const { data, error } = await supabase
    .from('users_posts')
    .select(`*, posts(
        comments, post, description
      )`)
    .eq('username', username)
  return { data, error }
}

export const createUser = async ({ username, avatar = defaultAvatar } = {}) => {
  const { data, error } = await supabase
    .from('users')
    .insert([
      {
        username,
        avatar,
        id: window.self.crypto.randomUUID()
      }
    ])

  return { data, error }
}

export const getProfile = async ({ username }) => {
  const { data: users, error } = await supabase
    .from('users')
    .select('*')
    .eq('username', username)

  return [users, error]
}

export const registerUser = async ({
  email,
  password,
  username
} = {}) => {
  const { user, session, error } = await supabase.auth.signUp(
    {
      email,
      password
    },
    {
      data: {
        username
      }
    }
  )

  return { user, session, error }
}

export const loginUser = async ({ email, password }) => {
  const { user, session, error } = await supabase.auth.signIn({
    email,
    password
  })

  return { user, session, error }
}

export const postUserRow = async ({ username, postID }) => {
  const usernameLowerCase = username.toLowerCase()
  const { data, error } = await supabase
    .from('users_posts')
    .insert([
      {
        username: usernameLowerCase,
        post_id: postID
      }
    ])
  if (error) console.error(error)
  return { data, error }
}

export const uploadUserAvatar = async ({ photoFile } = {}) => {
  const filename = window.crypto.randomUUID()
  const { data, error } = await supabase.storage
    .from('avatars')
    .upload(`avatars/${filename}.png`, photoFile)
  const file = data?.Key ? `${prefix}${data.Key}` : ''

  return [file, error]
}

export const updateAvatar = async ({ avatarSrc, username }) => {
  const { data, error } = await supabase
    .from('users')
    .update({ avatar: avatarSrc })
    .eq('username', username)

  return [data, error]
}

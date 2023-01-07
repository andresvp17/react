import { supabase } from './supabase'
const prefix = import.meta.env.VITE_DATABASE_URL

export const getPosts = async () => {
  const { data: posts, error } = await supabase
    .from('posts')
    .select(`*, users(
      username,
      avatar
    )`)
  if (error) console.error(error)
  return [posts, error]
}

export const uploadPost = async ({ photoFile } = {}) => {
  const filename = window.crypto.randomUUID()
  const { data, error } = await supabase.storage
    .from('posts')
    .upload(`posts/${filename}.png`, photoFile)
  const file = data?.Key ? `${prefix}${data.Key}` : ''

  return [file, error]
}

export const publishPost = async ({ postSrc, description, userID } = {}) => {
  const { data, error } = await supabase
    .from('posts')
    .insert([
      {
        user_id: userID[0].id,
        description: description || 'default comment',
        post: postSrc,
        comments: 0
      }
    ])
  return { data, error }
}

export const savePost = async ({ username, postid }) => {
  const { data, error } = await supabase
    .from('saved_posts')
    .insert([
      {
        username,
        post_id: postid
      }
    ])

  return { data, error }
}

export const getSavedPost = async ({ username }) => {
  const { data, error } = await supabase
    .from('saved_posts')
    .select('*')
    .eq('username', username)

  return { data, error }
}

export const getSinglePost = async ({ postID }) => {
  const { data, error } = await supabase
    .from('posts')
    .select('*, users(*)')
    .eq('id', postID)

  return { data, error }
}

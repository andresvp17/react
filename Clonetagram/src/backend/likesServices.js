import { supabase } from './supabase'

export const postALike = async ({ username, postID }) => {
  const { data, error } = await supabase
    .from('liked_post_by_users')
    .insert([
      { post_id: postID, username }
    ])
  return { data, error }
}

export const getPostLiked = async ({ username }) => {
  const { data, error } = await supabase
    .from('liked_post_by_users')
    .select('*')
    .eq('username', username)

  return { data, error }
}

export const deleteLike = async ({ id }) => {
  const { data, error } = await supabase
    .from('liked_post_by_users')
    .delete()
    .eq('post_id', id)

  return { data, error }
}

export const plusLike = async ({ currentLikes, postID, method }) => {
  if (currentLikes === 0 && method === 'less') return
  const operation = method === 'plus' ? currentLikes + 1 : currentLikes - 1
  const { data, error } = await supabase
    .from('posts')
    .update({ likes: operation })
    .eq('id', postID)

  return { data, error }
}

export const getAllLikedPosts = async ({ username }) => {
  const { data, error } = await supabase
    .from('liked_post_by_users')
    .select(`*,
    posts (
      *
    ),
    users (
      username,
      avatar
    )`)
    .eq('username', username)

  console.log(data)

  return { data, error }
}

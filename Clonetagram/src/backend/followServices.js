import { supabase } from './supabase'

export const postAFollow = async ({ username, followingUser }) => {
  if (!username || !followingUser) return
  const { data, error } = await supabase
    .from('followed_users')
    .insert([
      {
        user: username,
        followed_user: followingUser
      }
    ])

  return { data, error }
}

export const deleteAFollow = async ({ username, currentUser }) => {
  if (!username || !currentUser) return
  const { data, error } = await supabase
    .from('followed_users')
    .delete()
    .eq('user', username)
    .eq('followed_user', currentUser)

  return { data, error }
}

export const getFollows = async ({ username }) => {
  const { data, error } = await supabase
    .from('followed_users')
    .select('*')
    .eq('user', username)

  return { data, error }
}

export const getAFollow = async ({ username, currentUser }) => {
  const { data, error } = await supabase
    .from('followed_users')
    .select('*')
    .eq('user', username)
    .eq('followed_user', currentUser)

  return { data, error }
}

export const modifyFollowers = async ({ currentUser, isFollowing, currentFollowers }) => {
  if (currentFollowers === 0 && isFollowing) return
  const operation = !isFollowing ? currentFollowers + 1 : currentFollowers - 1
  const { data, error } = await supabase
    .from('users')
    .update({ followers: operation })
    .eq('username', currentUser)

  return { data, error }
}

export const modifyFollowing = async ({ user, isFollowing, currentFollowing }) => {
  if (currentFollowing === 0 && isFollowing) return
  const operation = !isFollowing ? currentFollowing + 1 : currentFollowing - 1
  const { data, error } = await supabase
    .from('users')
    .update({ following: operation })
    .eq('username', user)

  return { data, error }
}

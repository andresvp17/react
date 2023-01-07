import React, { useEffect, useState } from 'react'
import { MdPhotoFilter } from 'react-icons/md'
import { useDropzone } from 'react-dropzone'
import { clsx } from 'clsx'
import { uploadPost, publishPost } from '../../backend/postServices'
import { getSingleUser, postUserRow } from '../../backend/User'
import styles from './styles.module.css'
import useUserSession from '../../hooks/useUserSession'

const DropZone = () => {
  const [uploading, setUploading] = useState(false)
  const [uploaded, setUploaded] = useState(null)
  const [comment, setComment] = useState('')
  const { userGlobal } = useUserSession()

  const username = userGlobal
    ? userGlobal.user.user_metadata.username.toLowerCase()
    : null

  const onDrop = async (files) => {
    const [file] = files
    setUploading(true)
    if (uploading) return
    const [fileUrl, error] = await uploadPost({ photoFile: file })
    if (error) return console.error(error)
    setUploaded(fileUrl)
    setUploading(false)
  }

  const {
    isDragAccept,
    isDragReject,
    getRootProps,
    getInputProps
  } = useDropzone({
    disabled: uploading || uploaded,
    maxFiles: 1,
    accept: {
      'image/png': ['.png'],
      'image/jpeg': ['.jpeg'],
      'image/jpg': ['.jpg']
    },
    onDrop
  })

  const handleComment = e => setComment(e.target.value)

  const renderMethod = () => {
    if (uploading) return <h4>Uploading...</h4>
    if (uploaded) return <h4>Uploaded File</h4>
  }

  const greenOrRed = clsx(styles.dropzone, {
    [styles.uploaded]: uploaded,
    [styles.uploading && !styles.uploaded]: uploading,
    [styles.dndReject]: isDragReject,
    [styles.dndAccept]: isDragAccept
  })

  useEffect(() => {
    if (isDragReject) navigator.vibrate(100)
  }, [isDragReject])

  const handleSubmit = async e => {
    e.preventDefault()
    const description = comment !== ''
      ? comment
      : null

    if (!uploaded) return
    const { singleUser } = await getSingleUser({ username })
    const { error, data } = await publishPost({ postSrc: uploaded, description, userID: singleUser })
    await postUserRow({ username, postID: data[0].id })
    if (error) return console.error(error)
    setUploaded(null)
  }

  return (
    <div className={styles.dropzone__container}>
      <h1 className={styles.dropTitle}>Post a Photo</h1>
      <p>This post will be published in {username} profile</p>

      <form onSubmit={handleSubmit} className={styles.form_post}>
        <MdPhotoFilter className={styles.dropzone_icon} />
        <div className={`${styles.dropzone} ${greenOrRed}`} {...getRootProps()}>
          <input {...getInputProps()} />
          {renderMethod()}
        </div>
        <div className={styles.addCommentContainer}>
          <input type='text' onChange={handleComment} className={styles.addComment} placeholder="Write the photo's comment" />
        </div>
        <button className={styles.dropzone_btn}>Post The Photo</button>
      </form>
    </div>
  )
}

export default DropZone

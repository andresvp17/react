import React, { useState } from 'react'
import styles from './styles.module.css'
import PropTypes from 'prop-types'
import { useDropzone } from 'react-dropzone'
import { uploadUserAvatar, updateAvatar } from '../../backend/User'
import { clsx } from 'clsx'
import { useNavigate } from 'react-router-dom'

const DropAvatar = ({ username }) => {
  const [uploading, setUploading] = useState(false)
  const [uploaded, setUploaded] = useState(null)
  const [fileURL, setFileURL] = useState(null)
  const navigate = useNavigate()

  const onDrop = async (files) => {
    const [file] = files
    setUploading(true)
    if (uploading) return
    const [fileUrl, error] = await uploadUserAvatar({ photoFile: file })
    if (error) return console.error(error)
    setUploaded(fileUrl)
    setUploading(false)
    setFileURL(fileUrl)
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

  const handleSubmit = async e => {
    e.preventDefault()
    if (!uploaded) return
    const [data, error] = await updateAvatar({ avatarSrc: fileURL, username })
    if (error) return console.error(error)
    setUploaded(null)
  }

  const greenOrRed = clsx(styles.dropzone, {
    [styles.uploaded]: uploaded,
    [styles.uploading && !styles.uploaded]: uploading,
    [styles.dndReject]: isDragReject,
    [styles.dndAccept]: isDragAccept
  })

  return (
    <div className={styles.dropzone__container}>
      <h1 className={styles.dropTitle}>Choose Your Profile Photo</h1>
      <form onSubmit={handleSubmit} className={styles.form_post}>
        <div className={`${styles.dropzone} ${greenOrRed}`} {...getRootProps()}>
          <input {...getInputProps()} />
        </div>
        <button className={styles.dropzone_btn}>Change The Profile Photo</button>
      </form>
    </div>
  )
}

DropAvatar.propTypes = {
  username: PropTypes.string
}

export default DropAvatar

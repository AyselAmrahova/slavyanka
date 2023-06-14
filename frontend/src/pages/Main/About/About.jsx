import React, { useState } from 'react'
import axios from 'axios'

export default function About() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)

  function upload() {
    setLoading(true)
    const formData = new FormData();
    formData.append("file", selectedImage);
    formData.append("upload_preset", "zshz34od");
    axios.post('https://api.cloudinary.com/v1_1/db9r6mgrx/image/upload', formData)
      .then((res) => {
        setImages([...images, res.data.secure_url])
        console.log(res);
        setLoading(false)
      });
  }
  return (
    <>
      {loading ? <div>loading...</div> : <>
        <form onSubmit={(e) => {
          e.preventDefault()
          upload()
        }}>
          <input onChange={(e) => {
            setSelectedImage(e.target.files[0])
          }} type='file' />
          <button type='submit'>Add</button>
        </form>
        <ul>
          {images && images.map((image, idx) => {
            return <li key={idx}>
              <img width={100} height={100} src={image} alt="" />
            </li>
          })}
        </ul>
      </>}
    </>
  )
}

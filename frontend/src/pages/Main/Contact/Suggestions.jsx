import React from 'react'
import { useRef } from 'react'
import { Button, TextField } from '@mui/material';
import './_suggestions.scss'
import emailjs from "@emailjs/browser";


export default function Suggestions() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_71iykcp",
        "template_xq3g5un",
        form.current,
        "VAT0bKgAVTIR1F0JD"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <main>
        <form
          ref={form}
          onSubmit={sendEmail}>
          <div className='suggestions-text'>
            <p>Təklif və iradlarını bildir!</p>
            <p className='suggestions-text-2p'>Müştərilərimizin düşüncələri önəmlidir</p>
          </div>
          <div className='input-div'>
            <TextField
              label="Adınız"
              className="form-input"
              type="text"
              name="user_name" />
          </div>
          <div className='input-div' >
            <TextField
              label='Soyadınız'
              className="form-input"
              type='text' />
          </div>
          <div className='input-div'>
            <TextField
              label="Email"
              className="form-input"
              type="email"
              name="user_email"
            />
          </div>
          <div className='input-div'>
            <TextField
              className="form-input"
              id="outlined-multiline-static"
              label="Müştərilərimizin düşüncələri önəmlidir"
              multiline
              rows={4}
            // defaultValue="Default Value"
            />
          </div>
          <div className='input-div'>
            <Button
              type="submit"
              value="Send"
              className='input-div-Button'
              variant="contained"
            >Göndər</Button>
          </div>
        </form>
      </main>
    </>
  )
}

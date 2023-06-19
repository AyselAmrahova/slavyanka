import React from 'react'
import TextField from '@mui/material/TextField';
import './_suggestions.scss'
import { Button } from '@mui/material';


export default function Suggestions() {
  return (
    <>
      <main>
        <form>
          <div className='suggestions-text'>
            <p>Təklif və iradlarını bildir!</p>
            <p className='suggestions-text-2p'>Müştərilərimizin düşüncələri önəmlidir</p>
          </div>
          <div className='input-div'>
            <TextField label="Adınız"
              className="form-input"
              type="text" />
          </div>
          <div className='input-div' >
            <TextField label='Soyadınız'
              className="form-input"
              type='text' />
          </div>
          <div className='input-div'>
            <TextField
              placeholder='xxxxxxxxx'
              className="form-input"
              type='text'
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
              className='input-div-Button'
              variant="contained"
              type="submit"
            >Göndər</Button>
          </div>
        </form>
      </main>
    </>
  )
}

import { Checkbox, FormControlLabel, TextField } from '@mui/material'
import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import style from './index.module.css'
import { AdminUser } from '../service/AdminUser';


function Index({setSignIn, setCurrentUser}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = () => {
        const newUser = {
            email: email,
            password: password
        }
        AdminUser.push(newUser)

        setEmail("")
        setPassword("")
        setCurrentUser(newUser)
    }


    const handleSignIn = () => {
        setSignIn(true)
    }

    return (
        <div className={style.signInWrapper}>
            <Grid container spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Grid item xs={7}
                    style={{ textAlign: 'center' }}>
                    <h2>SIGN UP</h2>
                </Grid>
                <Grid item xs={7}>
                    <TextField
                        fullWidth
                        placeholder='email'
                        id="outlined-basic"
                        label="email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Grid>
                <Grid item xs={7}>
                    <TextField
                        fullWidth
                        placeholder='password'
                        id="outlined-basic"
                        label="password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Grid>
                <Grid item xs={7}>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                </Grid>
                <Grid item xs={7}>
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={handleSignUp}
                    >Text</Button>
                </Grid>
                <Grid item xs={7}>
                    <Button variant="text" onClick={handleSignIn}>Go Back to Sign IN</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Index


// API den melumatlari chekib yigin MUI table-in ichine
// https://northwind.vercel.app/api/products
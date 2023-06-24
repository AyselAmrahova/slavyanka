import { Checkbox, FormControlLabel, TextField } from '@mui/material'
import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import style from './index.module.css'
import { AdminUser } from '../service/AdminUser';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SignIn({ setCurrentUser, setSignIn }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [open, setOpen] = useState(false);
    const handleSignIn = () => {
        const user =
        AdminUser.find(x => x.email === email && x.password === password)
        if (user) {
            setCurrentUser(user)
        } else {
            setOpen(true);
        }
    }

    const handleSignUp = () => {
        setSignIn(false)
    }

    return (
        <div className={style.signInWrapper}>
            <Grid container spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Grid item xs={7}
                    style={{ textAlign: 'center' }}>
                    <h2>SIGN IN</h2>
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
                        onClick={handleSignIn}
                    >Text</Button>
                </Grid>
                <Grid item xs={7}>
                    <Button variant="text" onClick={handleSignUp}>SignUp</Button>
                </Grid>
            </Grid>
            <Snackbar open={open} autoHideDuration={2000} onClose={() => setOpen(false)}>
                <Alert onClose={() => setOpen(false)} severity="error">User data is incorrect!</Alert>
            </Snackbar>
        </div>
    )
}

import React from 'react'
import Navbar from '../../../components/Main/HomeNavbar/Navbar'
import { Input, Space } from 'antd';
import { Button, TextField } from '@mui/material';
import '../Login/_style.scss'

export default function NewAcc() {
    return (
        <>
            <Navbar />
            <div className='login-div'>
                <div className='na-text'>
                    Yeni hesab yaradın
                </div>
                <div className='na-sub-text'>
                    Müvafiq xanalara məlumatları daxil edin
                </div>
                <form>
                    <div className='input-div'>
                        <TextField label="Ad"
                            className="form-input"
                            type="text" />
                    </div>
                    <div className='input-div' >
                        <TextField label='Soyad'
                            className="form-input"
                            type='text' />
                    </div>
                    <div className='input-div'>
                        <Space.Compact style={{
                            width: '100%',
                            height: '60px',
                            border: '1px solid rgba(0, 0, 0, .04) !important'
                        }}>
                            <Input
                                style={{
                                    width: '20%',
                                    backgroundColor: '#ffffff',
                                    color: 'black',
                                    fontSize: '16px',
                                    border: '1px solid rgba(0, 0, 0, .04) !important'
                                }}
                                defaultValue="+994"
                                disabled={true}
                            />
                            <Input
                                style={{
                                    fontSize: '16px',
                                    border: '1px solid rgba(0, 0, 0, .04) !important'
                                }}
                                type='number'
                                placeholder='xxxxxxxxx'
                            />
                        </Space.Compact>
                    </div>
                    <div className='input-div'>
                        <TextField label="Email"
                            className="form-input"
                            type="email" />
                    </div>
                    <div className='input-div' >
                        <TextField label='Şifrəniz'
                            className="form-input"
                            type='password' />
                    </div>
                    <div className='input-div' >
                        <TextField label='Şifrəniz yenidən'
                            className="form-input"
                            type='password' />
                    </div>
                    <div className='login-btn-div'>
                        <Button
                            className='login-btn'
                            variant="contained"
                            type="submit"
                        >Daxil ol</Button>
                    </div>
                </form>
            </div>
        </>
    )
}

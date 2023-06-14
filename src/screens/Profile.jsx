import React from 'react'
import Logo from '../compontents/Logo'
import qr_img from '../assets/qr.png'
import { Avatar } from '@mui/material'

const Profile = () => {
    return (
        <>
            <header style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center', borderBottom: '1px solid #aaa', height: 35, padding: 10
            }}>
                <div></div>
                <div><Logo /></div>
                <Avatar sx={{ bgcolor: '#AAA' }}>V</Avatar>
            </header>
            <main>
                <section style={{ margin: 50 }}>
                    <div style={{ display: 'flex', justifyContent: 'left', marginTop: 50 }}>
                        <img src={qr_img} alt="qrcode" />
                    </div>
                    <h1>Sairesse Victorino</h1>
                    <h4>sairessy@gmail.com</h4>
                    <h2>872081978</h2>
                    <h2>847460853</h2>
                </section>
            </main>

        </>
    )
}

export default Profile
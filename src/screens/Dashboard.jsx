import React, { useState } from 'react'
import Logo from '../compontents/Logo'
import qr_img from '../assets/qr.png'
import { Avatar, Button, Modal, TextField } from '@mui/material'

const Dashboard = () => {
    const [modal_closed, set_modal_closed] = useState(false)

    const toggle_modal = () => {
        set_modal_closed(!modal_closed)
    }

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
                <Avatar sx={{ bgcolor: 'skyblue' }}></Avatar>
            </header>
            <main>
                <section style={{ margin: 50 }}>
                    <div style={{ display: 'flex', justifyContent: 'left', marginTop: 50 }}>
                        <img src={qr_img} alt="qrcode" />
                    </div>
                    <h2 style={{color: '#666'}}>2023120693398</h2>
                    <h1>Sairesse Victorino</h1>
                    <h4>sairessy@gmail.com</h4>
                    <h2>872081978</h2>
                    <h2>847460853</h2>
                    <Button variant='outlined' style={{ textTransform: 'unset', width: '100%' }}
                        onClick={toggle_modal}>Actualizar</Button>
                </section>
            </main>

            <Modal
                open={modal_closed}
                onClose={toggle_modal}
            >
                <div style={{
                        position: 'absolute', top: 0, bottom: 0, left: 0, right: 0,
                        width: '80%', height: '80vh', 
                        margin: 'auto', 
                        backgroundColor: '#fff', padding: 10, borderRadius: 5,
                    }}>
                    <form>
                        <TextField variant='standard' type='text' name='name' label='Nome' style={{ width: '100%', marginBottom: 10 }} />
                        <TextField variant='standard' type='text' name='phone 1' label='Contacto 1' style={{ width: '100%', marginBottom: 10 }} />
                        <TextField variant='standard' type='text' name='phone 2' label='Contacto 2' style={{ width: '100%', marginBottom: 10 }} />
                        <Button variant='contained' style={{textTransform: 'unset', width: '100%'}}>Actualizar</Button>
                    </form>
                </div>
            </Modal>

        </>
    )
}

export default Dashboard
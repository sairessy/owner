import { Button, TextField } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../compontents/Logo'

const SignUp = () => {
  return (
    <div style={{padding: '10px 20px'}}>
        <Logo />
        <TextField variant='standard' type='text' label='Nome' style={{width: '100%', marginBottom: 10}}/>
        <TextField variant='standard' type='email' label='Email' style={{width: '100%', marginBottom: 10}}/>
        <TextField variant='standard' type='text' label='Contacto 1' style={{width: '100%', marginBottom: 10}}/>
        <TextField variant='standard' type='text' label='Contacto 2' style={{width: '100%', marginBottom: 10}}/>
        <TextField variant='standard' type='password' label='Senha' style={{width: '100%', marginBottom: 10}}/>
        <TextField variant='standard' type='password' label='Confirmar senha' style={{width: '100%', marginBottom: 10}}/>
        <Button variant='contained' style={{width: '100%', textTransform: 'unset'}}>Criar</Button>
        <Link to={'/'}><Button variant='contained' style={{width: '100%', textTransform: 'unset', marginTop: 5, backgroundColor: '#AAA'}}>Fazer login</Button></Link>
    </div>
  )
}

export default SignUp
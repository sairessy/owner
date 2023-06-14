import { Button, TextField } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../compontents/Logo'

const Login = () => {
  const navigate = useNavigate()
  
  const login = async () => {
    navigate('/dashboard')
  }

  return (
    <div style={{ padding: '10px 20px' }}>
      <Logo />
      <TextField variant='standard' type='email' label='Email' style={{ width: '100%', marginBottom: 10 }} />
      <TextField variant='standard' type='password' label='Senha' style={{ width: '100%', marginBottom: 10 }} />
      <Button variant='contained' style={{ width: '100%', textTransform: 'unset' }} onClick={login}>Entrar</Button>
      <Link to={'/sign_up'}><Button variant='contained' style={{ width: '100%', textTransform: 'unset', marginTop: 5, backgroundColor: '#AAA' }}>Criar nova conta</Button></Link>
      <Button variant='text' style={{ width: '100%', textTransform: 'unset', marginTop: 5 }}>Esqueci a senha!</Button>
    </div>
  )
}

export default Login
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import { Box, Container, CssBaseline } from '@mui/material'

export default function Home() {
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="lg">
      <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
        <h2>1. I Created Project NextJs 12.0.0 Version </h2>
        <h2>2. I Created New Repo.. in GitHub</h2>
        <h2>3. I Created Some Rest API </h2>
        <h2>3. I Created Basic MUI Container </h2>
        <h2>4. I Deployed On Vercel</h2>
      </Box>
    </Container>
    </React.Fragment>
  )
}

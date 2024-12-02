import { Metadata } from 'next'
import React from 'react'
import Form from './Form'

export const metadata:Metadata={
    title:'Sign in'
}

export default function Signin() {
  return (
    <Form/>
  )
}
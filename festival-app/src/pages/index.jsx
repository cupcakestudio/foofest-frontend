import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import App from 'next/app'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function myApp({bands}) {
  console.log(bands)
  return (
    <>
  
    </>
  )
}
export async function getInitialProps() {
  //provide appContext in order to do 404's
  const api = "http://localhost:8080/bands";
  const res = await fetch(api);
  const data = await res.json();
  console.log(data);
  return {
    props: 
  {bands: data,}
}
 

}
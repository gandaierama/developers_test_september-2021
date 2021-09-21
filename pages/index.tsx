import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Post from "../components/Post";
export default function IndexPage() {
  return (
    <>
      <Header />
      <Post />
      <Footer />
    </>
  );
}


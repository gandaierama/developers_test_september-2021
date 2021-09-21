import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Post from "../components/Post";
export default function IndexPage({ posts }) {
  return (
    <>
      <Header />

      <Post posts={posts.results} />
      <Footer />
    </>
  );
}


IndexPage.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=45c857b10f1d7b5f1b33127149d88893')
  const posts = await res.json()
  return { posts }
}

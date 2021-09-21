import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Movie from "../../components/Movie";
import { useRouter } from 'next/router'
export default function MoviePage({posts}:{ posts:any }) {
  return (
    <>
      <Header />

      <Movie posts={posts} />
      <Footer />
    </>
  );
}


MoviePage.getInitialProps = async (ctx:any) => {

  // const router = useRouter()
  // const { id } = router.query
  console.log(ctx.query.id);
  const res = await fetch('https://api.themoviedb.org/3/movie/'+ctx.query.id+'?api_key=45c857b10f1d7b5f1b33127149d88893')
  const posts = await res.json()
  return { posts }
}

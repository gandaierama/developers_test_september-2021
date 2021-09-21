import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Post from "../../components/Post";
import { useRouter } from 'next/router'
export default function MoviePage({props}:{ props:any }) {
 
  return (
    <>
      <Header />

      <Post posts={props.posts.results} />
      <Footer />
    </>
  );
}


MoviePage.getInitialProps = async (ctx:any) => {

  // const router = useRouter()
  // const { id } = router.query
  console.log(ctx.query.id);
  const res = await fetch(process.env.URL_MOVIE+'discover/movie?api_key='+process.env.API_KEY+'&with_genres='+ctx.query.id)
  const posts = await res.json()
  return {  props:{posts} }
}

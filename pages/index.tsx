import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import Post from "../components/Post";
export default function IndexPage({props}:{ props:any }) {

  return (
    <>
      <Header />
      <div className="row">
        <div className="d-sm-none d-md-block col-md-3">
        <SideBar props={props.gender} id="" />
        </div>
        <div className="col-12 col-md-9">
          <Post posts={props.posts.results} />
        </div>
      </div>
      <Footer />
    </>
  );
}


IndexPage.getInitialProps = async (ctx:any) => {

  const res = await fetch(process.env.URL_MOVIE+'movie/popular?api_key='+process.env.API_KEY)
  const posts = await res.json();

  const res2 = await fetch(process.env.URL_MOVIE+'genre/movie/list?api_key='+process.env.API_KEY)
  const gender = await res2.json();

  return { props:{posts, gender} }
}

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Post from "../../components/Post";
import SideBar from "../../components/SideBar";
import { useRouter } from 'next/router'
export default function MoviePage({props}:{ props:any }) {
 
  return (
    <>
      <Header />
      <div className="row">
        <div className="d-sm-none d-md-block col-md-3">
        <SideBar props={props.gender} id={props.id} />
        </div>
        <div className="col-12 col-md-9">
          <Post posts={props.posts.results} />
        </div>
      </div>
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
  const res2 = await fetch(process.env.URL_MOVIE+'genre/movie/list?api_key='+process.env.API_KEY)
  const gender = await res2.json();
  const id=ctx.query.id;
  return { props:{posts, gender, id} }
}

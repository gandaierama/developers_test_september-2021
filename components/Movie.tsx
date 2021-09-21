export default function Post(props:any){
  console.log(props);

  return(
    <div className="album py-5 bg-light">
      <div className="container">


      
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">


     
          <div className="col-md-12" >
            <div className="card shadow-sm">

            <div className="row">
            <div className="col-12 col-md-6">
              <img src={`https://image.tmdb.org/t/p/w500/${props.posts.backdrop_path}`} />
            </div>
            <div className="col-12 col-md-6">
              <div className="p-3">
              <h1>{props.posts.original_title}</h1>
              <i>{props.posts.tagline}</i>
              <hr/>
              <p>{props.posts.overview}</p>
              </div>
            </div>
            </div>
              
            </div>
          </div>

        </div>
      </div>
     </div>
  )
}

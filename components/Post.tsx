export default function Post(props:any){
  console.log(props.posts);

  return(
    <div className="album py-5 bg-light">
      <div className="container">


      
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

        {props.posts.map((post:any) => (
     
          <div className="col" key={post.id}>
            <div className="card shadow-sm">
              <img src={`https://image.tmdb.org/t/p/w500/${post.backdrop_path}`} />
              <div className="card-body">
                <p className="card-text">{post.original_title}</p>
                <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                    <a href={`/movie/${post.id}`} className="btn btn-sm btn-outline-secondary">Saiba Mais</a>
                </div>
                  <small className="text-muted">avaliação: {post.vote_average}</small>
                </div>
              </div>
            </div>
          </div>
           ))}
        </div>
      </div>
     </div>
  )
}



export default function Post(props){
  console.log(props.posts);

  return(
    <div className="album py-5 bg-light">
      <div className="container">


      
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

        {props.posts.map((post) => (
     
          <div className="col">
            <div className="card shadow-sm">
              <img src={`https://image.tmdb.org/t/p/w500/${post.backdrop_path}`} />
              <div className="card-body">
                <p className="card-text">{post.original_title}</p>
                <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">Saiba Mais</button>
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



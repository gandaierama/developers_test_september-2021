export default function SideBar(props, id){
  console.log(props.id);

  return(
<div className="list-group mt-5">
            <li className="list-group-item list-group-item-dark p-3 text-center ">Genres</li>
                  {props.props.genres.map((item) => (<a href={`/genres/${item.id}`} className={`list-group-item list-group-item-action ${props.id==item.id ? "active" : ""}`} key={item.id} aria-current="true">
    {item.name}
  </a>
           ))}
                  </div>

  )
}



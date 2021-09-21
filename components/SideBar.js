export default function SideBar(props){
  console.log(props);
  return(
<div className="list-group mt-5">
            <li className="list-group-item list-group-item-dark p-3 text-center">Genres</li>
                  {props.map((item) => (<a href={`/genres/${item.id}`} className="list-group-item list-group-item-action " key={item.id} aria-current="true">
    {item.name}
  </a>
           ))}
                  </div>

  )
}



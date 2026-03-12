export default function Singer({singer}) {
    
  

    return (

        <div className="actor">

            <h3>Name : {singer.name}</h3>
            <p>Age : {singer.age}</p>
            <p>Country : {singer.country}</p>

        </div>

    )
}
export default function Card({img, title}){
    return(
        <div className="border-2 mt-2  w-fit ">
            <img src={img}/>
            <h2>{title}</h2>
            
            
        </div>
    )
}
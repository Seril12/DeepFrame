function Rcard({title,category,description,image}){
return(
    <div className="Rcard">
        <img className="Rcard--image" src={image} alt={title}/>
        <h2>{title}</h2>
      <h3>{category}</h3>
      <p>{description}</p>
    </div>
);
}
export default Rcard;

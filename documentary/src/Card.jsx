function Card({title,category,description,image,link}) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="link" >
      <div className="card">
      <img className="card--image" src={image} alt={title} />
      <h2>{title}</h2>
      <h3>{category}</h3>
      <p>{description}</p>
      </div>
  </a>
  );
}

export default Card;

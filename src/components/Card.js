function Card(props) {
  return (
    <div>
      <img width={100} src={props.icon} alt="" />
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
}

export default Card;

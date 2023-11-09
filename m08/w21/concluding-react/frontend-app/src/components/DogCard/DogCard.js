import './DogCard.css';

function DogCard(props) {
  return (
    <article className="card-container">
      <div>
        <span>X</span>
      </div>
      <img src={props.image_url} alt="cute dog" />
      <span>{props.breed}</span>
    </article>
  )
}

export default DogCard;
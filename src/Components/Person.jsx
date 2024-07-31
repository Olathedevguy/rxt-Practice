
const Person = ({image, age, name}) => {
  return (
    <article className="person">
        <img src={image} className="person-img" alt="" />
        <div >
        <h4>{name}</h4>
        <p>{age}</p>
        </div>
    </article>
  )
}
export default Person
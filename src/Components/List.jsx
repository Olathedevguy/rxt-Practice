import Person from "./Person"
const List = ({peopleData, setPeopleData}) => {

  return (
    <div>
        {
            peopleData.map((person) => (
                <Person key={person.id} {...person}/>
            ))
        }
    </div>
  )
}
export default List
type personList = {
    names:{
        name: string 
        age: number        
        id:number
    }[]
}

export const PersonList = (props:personList) => {
  return (
    <div>PersonList:
        {props.names.map(e=>{return <h5 key={e.id}>{e.name} {e.age}</h5>})}
    </div>
  )
}

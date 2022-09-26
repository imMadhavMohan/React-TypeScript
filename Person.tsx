type Person = { // type has object as element
    info:{ // is an object
    name:string
    city:string
    age:number
    isMarried:boolean
    }
}

export const Person = (props:Person) => {
  return (
    <div>
        {props.info.isMarried ? `Hey, ${props.info.name} how're you` :  `Hey, ${props.info.name} how's your family?`}
        <br/>
        Age: {props.info.age} and City: {props.info.city}
    </div>
  )
}

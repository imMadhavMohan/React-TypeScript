type GreetProps = {
  name: string
  isLoggedin: boolean
  hobby?: string
}

export const Greet = (props: GreetProps): any => {
  const {hobby = 'nope'} = props
  return (
    <div>
        {props.isLoggedin? `HelloDear- ${props.name}`: `Welcome please signup`!}
        <br/> your hobby is- {hobby}
    </div>
  )
}

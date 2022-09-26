type propsStatus = {
    status: string
    // status: 'Success' | 'Error' | 'Loading' ; we can pass strictly accepted val too
}

export const Status = (props: propsStatus)=>{
    let msg 

    if (props.status === 'Loading')
        msg = 'Loading Data'
    else if (props.status === 'Error')
        msg = 'Error in Loading '
    else if (props.status === 'Success')
        msg = 'Successfully Loading'
    else msg = 'Wrong val Passed'

    return (
        <div>
            Status - {msg}
        </div>
    )
}

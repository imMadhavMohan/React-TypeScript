import {Button} from './Button'
import {Input} from './Input'


export const HtmlRender = () => {
  return (
    <div>
        <Button variant='Primary' onClick={()=>console.log('clicked')}>
            Primary-Button
        </Button>
        <Input val='High maddy' />
    </div>
  )
}

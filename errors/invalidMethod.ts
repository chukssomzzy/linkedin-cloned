 import { customError } from '.'
import StatusCodes from 'http-status-codes'

class InvalidMethod extends customError{
    readonly StatusCode: number
    constructor(message: any){
        super(message)
        this.StatusCode = StatusCodes.NOT_IMPLEMENTED
    }
}

export default InvalidMethod  

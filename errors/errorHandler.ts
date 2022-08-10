 import { NextApiRequest, NextApiResponse } from 'next'
 import StatusCodes from 'http-status-codes'

 type HandlerType = (req: NextApiRequest, res: NextApiResponse) => any

export default function catchErrorsFrom(handler: HandlerType) {
  return async (req: NextApiRequest , res: NextApiResponse)=> {
    return handler(req, res)
      .catch((err: any) => {
        
          //create custom error
  const customErrorMessage = "Something went wrong check parameters or try again later"

  let customError = {
    //set default 
    statusCode: err.statusCode|| StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || customErrorMessage 
  }

  
  return res.status(customError.statusCode).json({success:false, msg:customError.msg})

      
  } )
}
}            

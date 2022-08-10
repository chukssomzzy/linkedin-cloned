import { NextApiRequest} from "next";
import { getToken } from "next-auth/jwt";
import { UnAuthenticated } from "../errors";


const checkForJWT = async ( req: NextApiRequest ) => {
   const session = await getToken(
          {
              req,
              secret: process.env.JWT_SECRET,       
              secureCookie: process.env.NODE_ENV === "production", 
          }
      )
      if(!session) throw new UnAuthenticated('you are unauthorized to access this route login and try again')
          return  req.body.user = session
}

export default checkForJWT

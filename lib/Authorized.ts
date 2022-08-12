import { NextApiRequest} from "next";
import { getToken } from "next-auth/jwt";
import { UnAuthenticated } from "../errors";


const checkForJWT = async ( req: NextApiRequest ) => {
   const session = await getToken( {
              req
          })
      console.log(session,'session1')
      if(!session) throw new UnAuthenticated('you are unauthorized to access this route login and try again')
          return // req.body.user = JSON.stringify(session,null,2)
}

export default checkForJWT

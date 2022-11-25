import { injectable } from "tsyringe";
import { User } from "../schemas/User";

@injectable()
class GetALlUsersService{

  async execute(){
    const users = await User.find()
    return users
  }
}

export { GetALlUsersService }
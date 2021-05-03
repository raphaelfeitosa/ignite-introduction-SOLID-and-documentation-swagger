import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }): User[] {

    const user = this.usersRepository.findById(user_id);

    console.log(user);

    if (!user) {

      throw new Error("User not found");
    }

    if (user.admin === false) {

      throw new Error(`User ${user.name} not admin`);
    }

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };

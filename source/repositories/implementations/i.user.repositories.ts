import User from '../../entities/User'

export default interface IUsersRepositories {
    create(user: User): Promise<void>
}

import { UserData } from "../userData"
import { InMemoryUserRepository } from "./inMemoryUserRepository"

describe('in memory user repository', () => {
    test('should return null if user is not found', async () => {
        const users: UserData[] = []
        const userRepo = new InMemoryUserRepository(users)
        const user = await userRepo.findUserByEmail('any@email.com')
        expect(user).toBeNull()
    })

    test('should return user if it is found in the repository', async () => {
        const users: UserData[] = []
        const name = 'any_name'
        const email = 'any@email.com'
        const userRepo = new InMemoryUserRepository(users)
        await userRepo.add({ name, email })
        const user = await userRepo.findUserByEmail(email)
        expect(user.name).toBe(name)
    })
})
import { UserData } from "../userData"
import { InMemoryUserRepository } from "./inMemoryUserRepository"

describe('in memory user repository', () => {
    test('should return null if user is not found', async () => {
        const users: UserData[] = []
        const userRepo = new InMemoryUserRepository(users)
        const user = await userRepo.findUserByEmail('any@email.com')
        expect(user).toBeNull()
    })
})
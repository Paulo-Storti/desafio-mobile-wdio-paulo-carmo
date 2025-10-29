import fs from 'fs'
import path from 'path'

const userPath = path.resolve('./test/data/runtimeUser.json')

export function createRandomUser() {
    const timestamp = Date.now()
    const user = {
        email: `paulo.${timestamp}@storti.com`,
        password: `Storti.${timestamp}!`
    }

    fs.writeFileSync(userPath, JSON.stringify(user, null, 2))
    return user
}

export function getSavedUser() {
    if (!fs.existsSync(userPath)) {
        throw new Error('No user found — create one first.')
    }
    return JSON.parse(fs.readFileSync(userPath))
}

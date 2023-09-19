
export const getUserQuery = `
query GetUser($email: String!){
    user(by:{ email: $email}){
        id
        name
        avatarUrl
        description
        githubUrl
        linkedinUrl
    }
}
`

export const createUserMutation = `
mutation CreateUser($input: UserCreateInput!){
    usercreate(input: $input){
        user {
            name
            email
            avatarUrl
            githubUrl
            linkedinUrl
            id
        }
    }
}
`
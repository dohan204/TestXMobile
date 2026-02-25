
export type contextUser = {
    nameid: string,
    email: string,
    given_name: string,
    jti: string,
    iat: number,
    role: string[],
    fullName: string,
    nbf: number
}
export type UserContextType = {
    user: contextUser | null;
    login: (user: contextUser, token: string) => void,
    logout: () => void
}


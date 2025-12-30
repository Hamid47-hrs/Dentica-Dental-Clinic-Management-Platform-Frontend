export interface LoginPayload {
  email: string
  password: string
}

export const authApi = {
  login: async (_payload: LoginPayload) => {
    return {
      token: 'mock-access-token',
      user: {
        id: 1,
        name: 'hamid',
        role: 'patient',
      },
    }
  },
}

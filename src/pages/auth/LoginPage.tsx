import { authApi } from '../../shared/api/auth.api'
import { useAuthStore } from '../../shared/store/auth.store'

const LoginPage = () => {
  const login = useAuthStore((s) => s.login)

  const handleLogin = async () => {
    const result = await authApi.login({
      email: 'test@gmail.com',
      password: '1234',
    })

    login(result)
  }

  return (
    <button onClick={handleLogin} className="px-4 py-2 bg-blue-600 text-white rounded">
      Login
    </button>
  )
}

export default LoginPage

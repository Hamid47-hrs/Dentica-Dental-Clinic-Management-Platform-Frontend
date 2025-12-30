import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

interface AppProviderProps {
  children: React.ReactNode
}

const AppProviders = ({ children }: AppProviderProps) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default AppProviders

import { create } from 'zustand'

export type AuthStatus = 'loading' | 'authenticated' | 'unauthenticated' | 'checking'

export interface AuthStore {
  // Propieties
  status: AuthStatus
  token?: string | null

  // Actions
  login(email: string, password: string): Promise<boolean>
  logout(): Promise<void>
  checkStatus(): void
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  // Initial state
  status: 'checking',
  token: null,

  // Actions
  async login(email: string, password: string) {
    set({ status: 'checking' })
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        throw new Error('Login failed')
      }

      const data = await response.json()
      set({ token: data.access_token, status: 'authenticated' })
      return true
    } catch (error) {
      console.error(error)
      set({ status: 'unauthenticated' })
      return false
    }
  },

  async logout() {
    set({ status: 'unauthenticated', token: null })
  },

  checkStatus() {
    setTimeout(() => {
      set({ status: 'authenticated' })
    }, 2000)
    
  },
}))
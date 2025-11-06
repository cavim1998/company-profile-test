'use client'

import { useEffect } from 'react'
import { useUser } from '@/stores/Users'

const GlobalPage = ({ children }: { children: React.ReactNode }) => {
  const storeUser = useUser()

  useEffect(() => {
    const tokenUser = localStorage.getItem('token')
    if (tokenUser) {
      storeUser.callCurrentUser()
    }
  }, [])

  return <div>{children}</div>
}

export default GlobalPage
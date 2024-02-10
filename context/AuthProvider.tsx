'use client'

import { getServerSession } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

export default function AuthProvider({ children }: {   children: React.ReactNode
}) {

    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

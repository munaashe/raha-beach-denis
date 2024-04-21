'use client'

import React, { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';

interface ProviderProps {
    children: ReactNode;
}

const ProviderClientComponent: React.FC<ProviderProps> = ({ children }) => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default ProviderClientComponent
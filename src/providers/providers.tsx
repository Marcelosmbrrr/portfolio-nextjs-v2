"use client"

import * as React from 'react';
import { SnackbarProvider } from 'notistack';

// Source: https://www.youtube.com/watch?v=0_rNpDylwB8

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <SnackbarProvider>
            {children}
        </SnackbarProvider>
    )
}
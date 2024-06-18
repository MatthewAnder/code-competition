"use client"

import { Button } from '@chakra-ui/react'

export const SubmitButton = ({ children, action }: { children: React.ReactNode, action: () => void }) => {
  return <Button onClick={action}>{children}</Button>
}
import React from 'react'
import { SignedOut, SignUp} from '@clerk/nextjs'

export default function page() {
  return (
    <div>
      <SignedOut>

        <SignUp />
      </SignedOut>
    </div>
  )
}

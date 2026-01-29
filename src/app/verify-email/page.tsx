import { Suspense } from "react"
import VerifyEmailClient from "./VerifyEmailClient"

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center font-league-spartan">
        <p className="text-gray-600 text-lg">Verifying email...</p>
      </div>
    }>
      <VerifyEmailClient />
    </Suspense>
  )
}

import { useLocation } from "react-router-dom"
import { useState } from "react"

export default function Auth() {
  const location = useLocation()
  const isSignUp = location.pathname === "/sign-up"
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mx-auto max-w-sm space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">
            {isSignUp ? "Create an account" : "Sign in"}
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            {isSignUp
              ? "Enter your details to get started"
              : "Enter your credentials to continue"}
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              placeholder="name@example.com"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              placeholder="Enter your password"
            />
          </div>
          <button className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            {isSignUp ? "Create account" : "Sign in"}
          </button>
        </div>
      </div>
    </div>
  )
}

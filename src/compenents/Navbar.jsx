import { Link, useLocation } from "react-router-dom"
import { cn } from "../lib/utils"

const navItems = [
  { to: "/", label: "Home" },
  { to: "/exercises", label: "Exercises" },
  { to: "/workouts", label: "Workouts" },
  { to: "/about", label: "About" },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === item.to
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            to="/sign-in"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Sign In
          </Link>
          <Link
            to="/sign-up"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  )
}

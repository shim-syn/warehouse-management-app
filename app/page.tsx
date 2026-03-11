import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Syngenta Warehouse Management",
  description: "A modern warehouse management solution built with excellence and precision. Coming soon.",
}

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="flex max-w-2xl flex-col items-center gap-12 text-center">
        {/* Syngenta Logo */}
        <div className="relative h-24 w-64">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Syngenta_Logo.svg/3840px-Syngenta_Logo.svg.png"
            alt="Syngenta Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Coming Soon Message */}
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Warehouse Management App
          </h1>
          <p className="text-2xl font-light text-muted-foreground">
            Landing Soon
          </p>
        </div>

        {/* Subtitle */}
        <p className="max-w-md text-base text-muted-foreground">
          A modern warehouse management solution built with excellence and precision.
        </p>

        {/* Decorative accent line */}
        <div className="h-1 w-24 rounded-full bg-gradient-to-r from-primary via-accent to-secondary" />
      </div>
    </div>
  )
}

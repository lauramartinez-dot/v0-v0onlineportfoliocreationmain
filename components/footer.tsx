export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8 pb-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Laura Martínez. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

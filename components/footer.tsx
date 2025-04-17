export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container mx-auto px-4 flex justify-center">
        <p className="text-sm text-muted-foreground">&copy; {currentYear} AI Toolbox. All rights reserved.</p>
      </div>
    </footer>
  )
}

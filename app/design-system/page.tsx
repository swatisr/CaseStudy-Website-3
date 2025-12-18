export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background p-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-12 text-5xl font-bold text-foreground">
          Design System
        </h1>

        {/* Color Palette */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-semibold text-foreground">
            Colors
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-background border border-border" />
              <p className="text-sm text-muted-foreground">Background</p>
              <p className="text-xs text-muted-foreground">hsl(0, 0%, 4%)</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-foreground" />
              <p className="text-sm text-muted-foreground">Foreground</p>
              <p className="text-xs text-muted-foreground">hsl(0, 0%, 100%)</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-card border border-border" />
              <p className="text-sm text-muted-foreground">Card</p>
              <p className="text-xs text-muted-foreground">hsl(0, 0%, 4%)</p>
            </div>
            <div className="space-y-2">
              <div className="h-24 rounded-lg bg-muted" />
              <p className="text-sm text-muted-foreground">Muted</p>
              <p className="text-xs text-muted-foreground">hsl(0, 0%, 15%)</p>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-semibold text-foreground">
            Typography
          </h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Font Family</p>
              <p className="text-2xl font-sans">Space Grotesk</p>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-5xl font-bold">Heading 1</p>
                <p className="text-sm text-muted-foreground mt-2">
                  font-bold, text-5xl
                </p>
              </div>
              <div>
                <p className="text-4xl font-semibold">Heading 2</p>
                <p className="text-sm text-muted-foreground mt-2">
                  font-semibold, text-4xl
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold">Heading 3</p>
                <p className="text-sm text-muted-foreground mt-2">
                  font-semibold, text-3xl
                </p>
              </div>
              <div>
                <p className="text-xl font-medium">Body Large</p>
                <p className="text-sm text-muted-foreground mt-2">
                  font-medium, text-xl
                </p>
              </div>
              <div>
                <p className="text-base font-normal">Body</p>
                <p className="text-sm text-muted-foreground mt-2">
                  font-normal, text-base
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-semibold text-foreground">
            Spacing
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Page Margins</p>
              <div className="h-12 w-full rounded border border-border bg-muted/20 p-12">
                <p className="text-sm">48px (p-12)</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                Project Section Height
              </p>
              <div className="h-[532px] w-full rounded border border-border bg-muted/20 flex items-center justify-center">
                <p className="text-sm">532px (h-[532px])</p>
              </div>
            </div>
          </div>
        </section>

        {/* Components */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-semibold text-foreground">
            Components
          </h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-4">Buttons</p>
              <div className="flex gap-4">
                <button className="rounded-md bg-primary px-4 py-2 text-primary-foreground">
                  Primary
                </button>
                <button className="rounded-md border border-border bg-background px-4 py-2">
                  Secondary
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

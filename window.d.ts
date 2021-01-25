interface Window {
  __theme: string
  __onThemeChange: (theme: string) => void
  __setPreferredTheme: (theme: string) => void
  __display: string
  __onDisplayChange: (display: string) => void
  __setPreferredDisplay: (display: string) => void
}

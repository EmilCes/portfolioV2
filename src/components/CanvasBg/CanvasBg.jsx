import { Velustro } from "uvcanvas"
import "./canvas-bg.css"

export default function CanvasBg({ children }) {
  return (
    <main className="canvas-bg">
      <Velustro />
      {children}
    </main>
  )
}

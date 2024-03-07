import "./content-container.css"

export default function ContentContainer({ children }) {
  return (
    <div className="glass">
        { children }
    </div>
  )
}
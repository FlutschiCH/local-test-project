import { Badge } from './components/ui/badge'
import './App.css'

function App() {
  return (
    <main className="app-container">
      <Badge variant="outline" className="px-4 py-1">
        v1.0.0
      </Badge>
      
      <h1 className="title">
        local-test-project
      </h1>
      
      <p className="description">
        A React project.
      </p>

      <div className="card">
        <p className="text-sm font-medium">
          Ready for development
        </p>
        <p className="text-xs opacity-50 mt-1">
          Edit <code>src/App.tsx</code> to get started
        </p>
      </div>
    </main>
  )
}

export default App
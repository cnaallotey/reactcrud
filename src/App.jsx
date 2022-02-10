import Crudapp from "./crudapp"
import Navbar from "./navbar"
import Newuser from "./newuser"


function App() {
 // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Crudapp />
      <Newuser />
      
      
    </div>
  )
}

export default App

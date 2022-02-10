import Crudapp from "./crudapp"
import Navbar from "./navbar"
import Newuser from "./newuser"
import Updateuser from "./updateuser"

function App() {
 // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Crudapp />
      <Newuser />
      <Updateuser />
      
      
      
    </div>
  )
}

export default App

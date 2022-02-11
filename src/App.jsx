import Crudapp from "./crudapp"
import Navbar from "./navbar"
import Newuser from "./newuser"
import Updateuser from "./updateuser"
import { BrowserRouter, Routes , Route} from 'react-router-dom'


function App() {
 // const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Crudapp />} />
          <Route path="/adduser" element={<Newuser />} />
          <Route path="/updateuser/:id" element={<Updateuser/>}/>
     </Routes>
      
      
      
    </div></BrowserRouter>
  )
}

export default App

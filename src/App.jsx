import { Container } from "@material-ui/core"
import Form from "./components/Form/index"
import TodoItem from "./components/TodoItem/index"
import './App.css'


function App() {
  
  return (
    <>
    <Container style={{ backgroundColor:'#FFF', borderRadius:'10px', marginTop:'15px' }} > 
      <Form />
      <TodoItem />
    </Container>
    </>
  )
}

export default App

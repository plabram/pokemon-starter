import "./App.css"
import Card from './components/Card'

function App() {

  const bulbasaur = {
    name: "Bulbasaur",
    id: 1,
    types: ["poison", "grass"],
    img: "https://bulbasaur.jpg",
    parent: null
  }


  return (
    <>
      <Card pokemon={bulbasaur}></Card>
    </>
  )
}

export default App

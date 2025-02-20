
import './App.css'

function Header({name,year}){
  
  return (
    <header>
      <h1>{name}'s kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  )
}

const items = [
  "Macaroni and Cheese",
  "Salmon with potatoes",
  "Tofu with vegetables",
  "Mushroom soup"
]



function Main({dishes}) {
  return (
    <ul>
      {dishes.map((dish) => (

        <li key={dish.id} style={{listStyleType: "none"}}>{dish.title}</li>

      )
      )}
    </ul>
  );
}

const dishObjects = items.map((dish,i) => ({
  id :i,
  title: dish
}))


function App() {

  return (
    <div>
      <Header name="Alex" year={new Date().getFullYear()}/>
      <Main dishes = {dishObjects}/>
    </div>
   
    
  )
}

export default App

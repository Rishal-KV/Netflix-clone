
import NavBar from './Components/Navbar/NavBar'
import Banner from './Components/Banner/Banner'
import '../src/App.css'
import RowPost from './Components/RowPost/RowPost'
import { originals,action,horror, romance } from './url'



function App() {
 

  return (
    <>
      <NavBar/>
  <Banner/>
  <RowPost title="Originals" url={originals} />
  <RowPost title="Action" url={action} isSmall={true}/>
  <RowPost title="Horror" url={horror} isSmall={true}/>
  <RowPost title="Romance" url={romance} isSmall={true}/>

    </>
  )
}

export default App

import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <ul>
          <li><Link to="/"><h1>Workout Buddy</h1></Link></li>
          {/* <li><Link to="/about/us"><h1>Us</h1></Link></li> */}
        </ul>
      </div>
    </header>
  )
}

export default Navbar
// import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
const Landing = () => {
  return (
    <main>
      <nav>
        {/* <img src={logo} alt="Job Tracker" className="logo" /> */}
        <h4>Job Tracker</h4>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>Job <span>tracking</span> app</h1>
          <p>A place where I can keep track of all the jobs I have applied to.</p>
          <button className="btn btn-hero">Login or Register</button>
        </div>
        <img src={main} alt="job hunt" className='img main-img' />
      </div>
    </main>
  )
};


export default Landing
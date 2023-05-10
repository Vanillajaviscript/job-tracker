import logo from '../assets/images/logo.svg'
import main from '../assets/images/mainimage.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import {Logo} from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>Job <span>tracking</span> app</h1>
          <p>Keep track of all the companies to which you've applied! Keep track of all your rejections!</p>
          <Link to="/register" className="btn btn-hero">Login or Register</Link>
        </div>
        <img src={main} alt="job hunt" className='img main-img' />
      </div>
    </Wrapper>
  )
};


export default Landing
import './Header.css';
import Qise from '../assets/Qise.jpg'

function Header() {
  return (
    <header className="header">
      <div className="name-block">
        <h1 className="name">Qise Salem</h1>
        <p className="title">Computer Science Student</p>
      </div>
        <img src={Qise} height="100"/>
    </header>
  );
}

export default Header;

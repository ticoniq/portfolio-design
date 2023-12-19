import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
function Footer() {
  return (
    <section className="bg-black text-white">
      <div className="container py-20 flex flex-wrap gap-5 justify-between ">
        <ul className="flex gap-5 font-bold text-base">
          <li><Link to="/project">Projects</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <aside className="space-y-2 flex flex-col font-semibold relative self-start md:self-end">
          <a href="#">your_mail@email.com</a>
          <a href="#">+123 456 7890</a>
        </aside>
        <img src={logo} alt={logo} className="w-10 md:w-16" />
      </div>
    </section>
  )
}

export default Footer
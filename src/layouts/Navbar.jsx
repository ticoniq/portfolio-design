import { useState, useEffect } from "react";
import { Link, useLocation  } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { 
  BiMenuAltRight, 
  BiX,
  BiLogoInstagram,
  BiLogoTwitter,
} from "react-icons/bi";
import logo from '../assets/logo.png';

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/Project" },
  { name: "About", href: "/About" },
  { name: "Contact", href: "/Contact" },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showShadow, setShowShadow] = useState(false);
  const location = useLocation();
  const isPageActive = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky w-full top-0 z-20 bg-black transition-all duration-200 font-leagueSpartan ${showShadow ? "shadow-sm shadow-gray-800" : ""}`}
    >
      <header className="">
        <nav
          className="flex items-center justify-between py-4 container"
          aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#hero">
              <span className="sr-only font-semibold md:font-bold text-lg md:text-xl">Portfolio</span>
              <img src={logo} alt={logo} className="w-10 md:w-16" />
            </a>
          </div>
          <div className="flex">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md text-white"
              onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Open main menu</span>
              <BiMenuAltRight className="text-4xl" aria-hidden="true" />
            </button>
          </div>
        </nav>
        <Dialog
          as="div"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50 bg-white text-white" />
          <Dialog.Panel className="fixed inset-y-0 z-50 w-full h-screen overflow-auto">
            <section className="container h-full">
              <div className="flex justify-end py-10">
                <button
                  type="button"
                  className=""
                  onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Close menu</span>
                  <BiX className="text-4xl" aria-hidden="true" />
                </button>
              </div>
              <div className="flex flex-col justify-center gap-16 items-start md:items-center md:flex-row md:py-24">
                <ul className="space-y-3 md:space-y-6">
                  {navigation.map((item) => (
                    <li key={item.name} className="flex justify-start items-center group/item">
                      <p className={`font-semibold text-xs transform rotate-90 uppercase md:text-lg group/edt ${isPageActive ===  item.href ? 'visible' : 'invisible group-hover/item:visible'}`}>menu</p>
                      <Link
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="uppercase text-4xl font-bold text-black md:text-6xl">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <aside className="space-y-2 flex flex-col font-semibold relative self-start md:self-end">
                  <a href="#">your_mail@email.com</a>
                  <a href="#">+123 456 7890</a>
                  <span className="flex gap-3 text-xl">
                    <a href="#"><BiLogoInstagram /></a>
                    <a href="#"><BiLogoTwitter /></a>
                  </span>
                </aside>
              </div>
            </section>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}

export default Navbar;

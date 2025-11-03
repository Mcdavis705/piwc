
import { Menu, User, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import churchLogo from '../../assets/piwclogo.png'

const navItems = ['Home', 'Services', 'Events', 'About Us', 'Contact', 'Admin'];

function NavBar() {
    return (
        <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-10 py-4 bg-white shadow-md z-50">
            {/* Logo */}
            <div className="flex items-center space-x-2 text-2xl font-bold text-indigo-800">
                <img src={churchLogo} alt="churchlogo" className="w-10 h-10" />
                <span>PIWC Barcelona</span>
            </div>

            {/* Navigation Links (Hidden on small screens) */}
            <nav className="hidden md:block">
                <ul className="flex space-x-6">
                    {navItems.map((item) => (
                        <li key={item}>
                            {item === 'Admin' ? (
                                <Link
                                    to="/adminDashboard"
                                    className="text-gray-600 hover:text-indigo-600 transition duration-150"
                                >
                                    {item}
                                </Link>
                            ) : (
                                <a
                                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                                    className={`text-gray-600 hover:text-indigo-600 transition duration-150 ${item === 'Home' ? 'font-semibold text-indigo-600' : ''
                                        }`}
                                >
                                    {item}
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Profile/User Icon */}
            <div className="flex items-center space-x-4">
                <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100 transition duration-150">
                    <User className="w-5 h-5 text-gray-700" />
                </button>
                {/* Optional: Mobile Menu Button */}
                <button className="md:hidden">
                    <Menu className="w-6 h-6 text-gray-700" />
                </button>
            </div>
        </header>
    );
}

export default NavBar;

import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/8eaad582-068b-4e7f-8a3d-f6dab14e00c6.png" 
              alt="INTILey Logo" 
              className="h-10 w-10"
            />
            <span className="text-[#008AFA] font-bold text-xl">
              INTILey
            </span>
          </Link>
          <div className="space-x-8">
            <Link to="/" className="text-[#000000] hover:text-[#008AFA] transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-[#000000] hover:text-[#008AFA] transition-colors">
              About
            </Link>
            <Link to="/demo-request" className="text-[#000000] hover:text-[#008AFA] transition-colors">
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

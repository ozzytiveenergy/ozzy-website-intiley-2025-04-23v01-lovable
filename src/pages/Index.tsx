
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#008AFA] to-[#0066BB]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center min-h-screen text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AI-Powered Legal Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Empowering legal professionals with advanced artificial intelligence 
            to streamline workflows and enhance decision-making.
          </p>
          <div className="space-x-4">
            <Button 
              asChild
              className="bg-white text-[#008AFA] hover:bg-gray-100"
            >
              <Link to="/about">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index

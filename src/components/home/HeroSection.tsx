
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#008AFA] to-[#0066BB]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center min-h-screen text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Redefining Legal Workflows with AI
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            An intelligent platform by INTILey — built by legal, AI, and business process experts designed to help law firms process complex, unstructured legal knowledge with precision, speed, and confidence.
          </p>
          <div className="space-x-4">
            <Button 
              variant="default"
              className="bg-white text-[#008AFA] hover:bg-white/90"
            >
              Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline"
              className="border-white text-[#008AFF] hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>
          
          {/* New logo section */}
          <div className="mt-12 mb-8">
            <img 
              src="/lovable-uploads/99ca2a83-ced7-4a0e-991c-5e2437a9e2f9.png" 
              alt="INTILey White Logo" 
              className="h-32 w-auto opacity-85 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection


import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const CtaSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#008AFA] to-[#0066BB] py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text and buttons section - left side */}
          <div className="w-full md:w-2/3 md:pr-8 mb-12 md:mb-0">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Join the future of legal workflow management. Schedule a demo today and see how INTILey can revolutionize your practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default"
                className="bg-white text-[#008AFA] hover:bg-white/10"
              >
                Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Explore Features
              </Button>
            </div>
          </div>

          {/* Logo section - right side */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <p className="text-white text-xl font-semibold mb-4">INTILey</p>
            <img 
              src="/lovable-uploads/99ca2a83-ced7-4a0e-991c-5e2437a9e2f9.png" 
              alt="INTILey White Logo" 
              className="h-32 w-auto opacity-85 hover:opacity-100 transition-opacity mb-4"
            />
            <p className="text-white/90">© 2025 INTILey</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CtaSection

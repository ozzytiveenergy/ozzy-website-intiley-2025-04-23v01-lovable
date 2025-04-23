
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const CtaSection = () => {
  return (
    <section className="py-20 bg-[#008AFA]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Future-Proof Your Practice
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          We're starting with one high-impact area of law — but we're built for expansion. 
          Our modular platform is designed to grow with your needs across practice areas, 
          geographies, and client types.
        </p>
        <div className="space-x-4">
          <Button 
            variant="default"
            className="bg-white text-[#008AFA] hover:bg-gray-100"
          >
            See It in Action <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CtaSection

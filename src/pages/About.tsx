
import { Card, CardContent } from "@/components/ui/card"

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-[#000000]">About Us</h1>
        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-[#008AFA]">
              Transforming Legal Services with AI
            </h2>
            <p className="text-[#000000] mb-4">
              We are at the forefront of revolutionizing the legal industry through artificial intelligence. 
              Our cutting-edge technology helps legal professionals work smarter and more efficiently.
            </p>
            <p className="text-[#000000]">
              By combining legal expertise with advanced AI capabilities, we're building the future of legal technology, 
              making legal services more accessible, efficient, and accurate.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default About

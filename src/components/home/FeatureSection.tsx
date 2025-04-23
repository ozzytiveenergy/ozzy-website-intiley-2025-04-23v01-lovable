
import { Card, CardContent } from "@/components/ui/card"

const FeatureSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#008AFA]">
                Today's Legal Knowledge is Complex. We Make It Usable.
              </h2>
              <p className="text-[#000000]/80 text-lg">
                From fragmented legislation and academic theory to precedent and internal best practices, 
                the legal profession runs on knowledge that's vast, unstructured, and inconsistent. 
                Our platform transforms this complexity into clarity — all while maintaining the highest 
                standards of confidentiality and regulatory compliance.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-[#008AFA]">
                  Built by Experts, For Experts
                </h3>
                <p className="text-[#000000]/80">
                  This isn't just another AI tool. It's the result of close collaboration between legal 
                  professionals, technologists, and workflow specialists — designed from day one to 
                  integrate seamlessly into the everyday life of law firms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-[#008AFA]">
                  Confidentiality & Compliance, By Design
                </h3>
                <p className="text-[#000000]/80">
                  Our infrastructure is designed to exceed the strictest internal and external legal 
                  compliance requirements. From secure architecture to jurisdiction-aware processing, 
                  your data is handled the way your clients expect — securely and responsibly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection

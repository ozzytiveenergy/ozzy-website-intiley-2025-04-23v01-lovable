
import { Card, CardContent } from "@/components/ui/card"

const WorkflowSection = () => {
  const steps = [
    {
      title: "Ingest & Sanitize",
      description: "Import large volumes of legal text, documentation, or research. Our AI understands and cleans fragmented data, automatically."
    },
    {
      title: "Contextualize & Enrich",
      description: "Our models don't just read – they learn. From legislation to academic nuance, internal practice style to judicial precedent."
    },
    {
      title: "Respond & Recommend",
      description: "Generate intelligent summaries, insights, or next steps — embedded directly in your legal team's workflow."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#000000]">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-[#008AFA]/20">
              <CardContent className="p-6">
                <div className="text-[#008AFA] font-bold text-xl mb-4">
                  {index + 1}. {step.title}
                </div>
                <p className="text-[#000000]/80">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkflowSection

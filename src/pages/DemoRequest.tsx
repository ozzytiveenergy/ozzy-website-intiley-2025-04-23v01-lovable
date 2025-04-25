
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import DemoRequestForm from "@/components/demo/DemoRequestForm";
import ThankYouMessage from "@/components/demo/ThankYouMessage";
import { useNavigate } from "react-router-dom";

const DemoRequest = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // If form is submitted, start countdown to redirect
    if (isSubmitted) {
      const redirectTimer = setTimeout(() => {
        navigate("/");
      }, 10000);
      
      return () => clearTimeout(redirectTimer);
    }
  }, [isSubmitted, navigate]);

  return (
    <div className="min-h-screen bg-white pt-16">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-[#000000]">Request a Demo</h1>
        <Card className="bg-white shadow-lg">
          <CardContent className="p-6">
            {!isSubmitted ? (
              <>
                <h2 className="text-2xl font-semibold mb-4 text-[#008AFA]">
                  Get Started with INTILey
                </h2>
                <p className="text-[#000000] mb-6">
                  Fill out the form below to request a personalized demo of our platform.
                  Our team will reach out to you shortly to schedule your demonstration.
                </p>
                <DemoRequestForm onSuccess={() => setIsSubmitted(true)} />
              </>
            ) : (
              <ThankYouMessage />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DemoRequest;

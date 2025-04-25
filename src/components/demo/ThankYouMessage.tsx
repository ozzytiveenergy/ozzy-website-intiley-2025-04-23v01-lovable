
import { useEffect, useState } from "react";

const ThankYouMessage = () => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => Math.max(prevCount - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center py-8">
      <h2 className="text-2xl font-bold text-[#008AFA] mb-4">Thank You!</h2>
      <p className="text-lg mb-2">
        Your demo request has been prepared. If your email client has opened, please send the email to complete your request.
      </p>
      <p className="text-lg mb-6">
        Our team will reach out to you shortly to schedule your personalized demo.
      </p>
      <div className="text-[#0066BB] font-medium">
        Redirecting to home page in {countdown} {countdown === 1 ? "second" : "seconds"}...
      </div>
    </div>
  );
};

export default ThankYouMessage;

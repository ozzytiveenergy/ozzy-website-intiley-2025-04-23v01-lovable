
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Define the form schema
const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  companyUrl: z.string().min(3, "Please provide a valid URL or LinkedIn profile"),
  referralSource: z.string().min(2, "Please let us know how you heard about us"),
});

type FormValues = z.infer<typeof formSchema>;

interface DemoRequestFormProps {
  onSuccess: () => void;
}

const DemoRequestForm = ({ onSuccess }: DemoRequestFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      companyUrl: "",
      referralSource: "",
    },
  });

  const handleSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Create email subject with company name
      const subject = encodeURIComponent(`INTILey webpage Demo Request – ${data.companyName}`);
      
      // Create email body with form data
      const body = encodeURIComponent(
        `Sender's Full Name: ${data.fullName}\n\n` +
        `Company's Name: ${data.companyName}\n\n` +
        `Company's Homepage or LinkedIn: ${data.companyUrl}\n\n` +
        `How did you hear about us?: ${data.referralSource}`
      );
      
      // Open default email client with pre-filled information
      window.location.href = `mailto:info@intiley.com?subject=${subject}&body=${body}`;
      
      // Notify success
      toast({
        title: "Email client opened",
        description: "Your demo request information has been prepared for sending.",
      });
      
      // Signal success to parent component
      onSuccess();
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Unable to open email client. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sender's Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company's Name</FormLabel>
              <FormControl>
                <Input placeholder="Company Inc." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="companyUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company's Homepage or LinkedIn</FormLabel>
              <FormControl>
                <Input placeholder="https://company.com or LinkedIn URL" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="referralSource"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How did you hear about us?</FormLabel>
              <FormControl>
                <Input placeholder="Search Engine, Social Media, Referral, etc." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" disabled={isSubmitting} className="bg-[#008AFA] text-white hover:bg-[#0066BB] w-full">
          {isSubmitting ? "Processing..." : "Submit Request"}
        </Button>
      </form>
    </Form>
  );
};

export default DemoRequestForm;

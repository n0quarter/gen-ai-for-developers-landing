import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { MailIcon } from "lucide-react";

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // The form will be handled by FormSubmit.co
    try {
      const formData = new FormData(e.currentTarget);
      await fetch("https://formsubmit.co/megaletterbox@gmail.com", {
        method: "POST",
        body: formData,
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center p-6 bg-white/20 backdrop-blur-sm rounded-lg">
        <h3 className="text-2xl font-semibold mb-2 text-white">Thank you for your message!</h3>
        <p className="text-gray-200">We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="_subject" value="New workshop inquiry" />
      <input type="hidden" name="_captcha" value="false" />

      <div>
        <Input
          required
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full"
        />
      </div>

      <div>
        <Input
          required
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full"
        />
      </div>

      <div>
        <Input
          type="text"
          name="company"
          placeholder="Company (Optional)"
          className="w-full"
        />
      </div>

      <div>
        <Input
          type="text"
          name="phone"
          placeholder="Phone (Optional)"
          className="w-full"
        />
      </div>

      <div>
        <Textarea
          required
          name="message"
          placeholder="Your Message"
          className="w-full min-h-[100px]"
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        <MailIcon className="mr-2 h-5 w-5" />
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

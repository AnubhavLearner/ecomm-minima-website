
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import AuthLayout from "@/components/AuthLayout";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate sending reset email
    setTimeout(() => {
      toast.success("Password reset link sent to your email");
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <AuthLayout
      title="Reset password"
      subtitle="Enter your email to receive a password reset link"
      footer={
        <div>
          Remember your password?{" "}
          <Link to="/login" className="font-medium text-accent hover:underline">
            Sign in
          </Link>
        </div>
      }
    >
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Sending link..." : "Send reset link"}
          </Button>
        </form>
      ) : (
        <div className="space-y-4">
          <div className="rounded-md bg-secondary p-4 text-center">
            <p className="text-sm">
              If your email exists in our system, you'll receive a password reset link shortly.
            </p>
          </div>
          <Button 
            variant="outline" 
            className="w-full" 
            onClick={() => setIsSubmitted(false)}
          >
            Try again
          </Button>
        </div>
      )}
    </AuthLayout>
  );
};

export default ForgotPassword;

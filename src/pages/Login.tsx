
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { toast } = useToast();
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate login success
    toast({
      title: "Success",
      description: "You have been successfully logged in"
    });
  };
  
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate signup success
    toast({
      title: "Success",
      description: "Your account has been created! Please check your email to verify your account."
    });
  };
  
  const handleForgotPassword = () => {
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Password reset link sent",
      description: "If an account with this email exists, you will receive a password reset link."
    });
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container px-4 py-8 mx-auto md:py-12 md:px-6 flex items-center justify-center">
        <div className="w-full max-w-md">
          <Link to="/" className="flex justify-center mb-8">
            <img src="/paperai-logo.svg" alt="PaperAI" className="h-12" />
          </Link>
          
          <Card className="shadow-card">
            <Tabs defaultValue="login">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Sign in</TabsTrigger>
                <TabsTrigger value="signup">Sign up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleLogin}>
                  <CardHeader>
                    <CardTitle>Sign in</CardTitle>
                    <CardDescription>Enter your email and password to access your account.</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-10 focus-visible:ring-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                        <button 
                          type="button" 
                          onClick={handleForgotPassword}
                          className="text-xs text-primary hover:underline focus:outline-none"
                        >
                          Forgot password?
                        </button>
                      </div>
                      <Input 
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-10 focus-visible:ring-primary"
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="remember-me" 
                        checked={rememberMe}
                        onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                        className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      />
                      <label
                        htmlFor="remember-me"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Remember me
                      </label>
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary-600 transition-all duration-150"
                    >
                      Sign in
                    </Button>
                  </CardFooter>
                </form>
              </TabsContent>
              
              <TabsContent value="signup">
                <form onSubmit={handleSignUp}>
                  <CardHeader>
                    <CardTitle>Sign up</CardTitle>
                    <CardDescription>Create a new account to get started.</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="signup-email" className="text-sm font-medium">Email</Label>
                      <Input 
                        id="signup-email"
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-10 focus-visible:ring-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="signup-password" className="text-sm font-medium">Password</Label>
                      <Input 
                        id="signup-password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-10 focus-visible:ring-primary"
                      />
                      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden mt-2">
                        <div 
                          className={`h-full ${password.length === 0 ? 'w-0' : password.length < 6 ? 'w-1/3 bg-red-500' : password.length < 10 ? 'w-2/3 bg-yellow-500' : 'w-full bg-green-500'}`}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {password.length === 0 ? 'Enter a password' : password.length < 6 ? 'Weak - Use at least 6 characters' : password.length < 10 ? 'Medium - Include numbers and symbols' : 'Strong password'}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="terms" 
                        className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the <a href="/terms" className="text-primary hover:underline">Terms of Service</a> and <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                      </label>
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary-600 transition-all duration-150"
                    >
                      Create account
                    </Button>
                  </CardFooter>
                </form>
              </TabsContent>
            </Tabs>
          </Card>
          
          <div className="text-center mt-6">
            <Link to="/" className="text-sm text-gray-600 hover:text-primary transition-colors duration-150">
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;

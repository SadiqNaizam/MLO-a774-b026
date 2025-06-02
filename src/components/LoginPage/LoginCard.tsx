import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FormInputs from './FormInputs';
import PrimaryButton from './PrimaryButton';
import SignupLink from './SignupLink';

interface LoginCardProps {
  className?: string;
}

const LoginCard: React.FC<LoginCardProps> = ({ className }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // Example state for displaying errors, can be expanded
  // const [error, setError] = useState<string | null>(null);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // setError(null); 
    setIsLoading(true);

    if (!username || !password) {
      // In a real application, provide user feedback e.g., using a toast or setting an error state.
      console.error("Validation: Username and password are required.");
      // setError("Username and password are required.");
      setIsLoading(false);
      return;
    }

    // Simulate API call
    console.log('Attempting to log in with:', { username, password });
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      // const response = await actualLoginApiCall(username, password);
      // if (response.success) {
      //   console.log('Login successful');
      //   // Handle successful login (e.g., redirect, update auth context)
      // } else {
      //   setError(response.message || "Invalid username or password.");
      //   console.error('Login failed:', response.message);
      // }
      console.log('Simulated login successful');
    } catch (apiError) {
      // setError("An unexpected error occurred. Please try again.");
      console.error('Login API call failed:', apiError);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className={cn(
      "w-[360px] bg-card text-card-foreground p-6 rounded-lg shadow-md", // As per Layout Requirements
      className
    )}>
      <CardHeader className="p-0 mb-6">
        <CardTitle className="text-3xl font-bold text-card-foreground">
          Log in
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <form onSubmit={handleLogin} className="flex flex-col gap-4"> {/* As per Layout Requirements for mainContent */} 
          <FormInputs
            username={username}
            onUsernameChange={setUsername}
            password={password}
            onPasswordChange={setPassword}
          />
          {/* {error && <p className="text-sm text-destructive text-center">{error}</p>} */}
          <PrimaryButton type="submit" isLoading={isLoading}>
            Log in
          </PrimaryButton>
          <SignupLink />
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginCard;

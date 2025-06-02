import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

interface FormInputsProps {
  username: string;
  onUsernameChange: (value: string) => void;
  password: string;
  onPasswordChange: (value: string) => void;
  className?: string;
}

const FormInputs: React.FC<FormInputsProps> = ({
  username,
  onUsernameChange,
  password,
  onPasswordChange,
  className,
}) => {
  return (
    <div className={cn("space-y-4", className)}>
      <Input
        id="username"
        type="text"
        value={username}
        onChange={(e) => onUsernameChange(e.target.value)}
        placeholder="Username"
        className="h-10 text-sm bg-card placeholder:text-muted-foreground" // Shadcn Input default styling will use theme vars for border/focus
        autoComplete="username"
        required // Basic HTML5 validation
      />
      <Input
        id="password"
        type="password"
        value={password}
        onChange={(e) => onPasswordChange(e.target.value)}
        placeholder="Password"
        className="h-10 text-sm bg-card placeholder:text-muted-foreground"
        autoComplete="current-password"
        required // Basic HTML5 validation
      />
    </div>
  );
};

export default FormInputs;

import React from 'react';
import { cn } from '@/lib/utils';
import { Button, type ButtonProps } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface PrimaryButtonProps extends ButtonProps { // Extending Shadcn's ButtonProps for full compatibility
  isLoading?: boolean;
  // children is inherited from ButtonProps (React.ReactNode)
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  isLoading,
  children,
  className,
  disabled, // Allow passing explicit disabled prop
  ...props // Spread other ButtonProps (like type, onClick, variant etc.)
}) => {
  return (
    <Button
      className={cn(
        "w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-md h-10 text-base font-semibold",
        className
      )}
      disabled={isLoading || disabled} // Button is disabled if isLoading or if explicitly passed as disabled
      {...props}
    >
      {isLoading && (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      )}
      {children}
    </Button>
  );
};

export default PrimaryButton;

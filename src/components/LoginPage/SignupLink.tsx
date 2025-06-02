import React from 'react';
import { cn } from '@/lib/utils';

interface SignupLinkProps {
  className?: string;
  href?: string;
}

const SignupLink: React.FC<SignupLinkProps> = ({ className, href = "#" }) => {
  return (
    <div className="text-center pt-1"> {/* Small top padding for subtle visual separation if needed */}
      <a
        href={href}
        className={cn(
          "text-sm text-muted-foreground hover:text-primary transition-colors duration-150 ease-in-out",
          className
        )}
      >
        or, sign up
      </a>
    </div>
  );
};

export default SignupLink;

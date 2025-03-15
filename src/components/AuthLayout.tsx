
import { ReactNode } from "react";
import { Link } from "react-router-dom";

const AuthLayout = ({ 
  children,
  title,
  subtitle,
  footer
}: { 
  children: ReactNode;
  title: string;
  subtitle: string;
  footer: ReactNode;
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="w-full bg-card p-6 sm:p-8 rounded-lg border shadow-sm">
          <div className="mb-6 text-center">
            <Link to="/" className="inline-block mb-6">
              <h1 className="text-2xl font-semibold tracking-tight">Minima</h1>
            </Link>
            <h2 className="text-xl font-semibold mb-1">{title}</h2>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
          {children}
        </div>
        <div className="mt-6 text-center text-sm text-muted-foreground">
          {footer}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

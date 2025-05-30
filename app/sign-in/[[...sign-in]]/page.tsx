'use client';

import { SignIn } from "@clerk/nextjs";

/**
 * SignIn page component
 * Uses catch-all route structure required by Clerk
 * @returns {JSX.Element} The sign-in page
 */
export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="w-full max-w-md p-8">
        <SignIn 
          routing="hash"
          afterSignInUrl="/dashboard"
          redirectUrl="/dashboard"
          appearance={{
            elements: {
              formButtonPrimary: 
                "bg-emerald-500 hover:bg-emerald-600 text-white",
              footerActionLink: 
                "text-emerald-400 hover:text-emerald-300",
              card: 
                "bg-slate-800/50 border border-slate-700",
              headerTitle: 
                "text-white",
              headerSubtitle: 
                "text-slate-400",
              socialButtonsBlockButton: 
                "bg-slate-700 hover:bg-slate-600 text-white",
              formFieldLabel: 
                "text-slate-300",
              formFieldInput: 
                "bg-slate-700 border-slate-600 text-white",
              formFieldInputShowPasswordButton: 
                "text-slate-400 hover:text-slate-300",
              footerAction: 
                "text-slate-400",
            },
          }}
        />
      </div>
    </div>
  );
} 
'use client';

import SignInWidget from '@/widgets/PublicSignUp';

export default function SignInPage() {
  const handleSignIn = async (provider: string) => {
    // TODO: Implement actual sign-in logic
    console.log(`Signing in with ${provider}`);
    
    // For now, just simulate a successful sign-in
    setTimeout(() => {
      // Redirect to dashboard or home page after successful sign-in
      window.location.href = '/';
    }, 2000);
  };

  return <SignInWidget onSignIn={handleSignIn} />;
} 
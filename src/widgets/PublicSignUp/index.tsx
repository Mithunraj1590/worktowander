'use client';

import { useState } from 'react';
import Link from 'next/link';

interface SignInWidgetProps {
  onSignIn?: (provider: string) => void;
}

export default function SignInWidget({ onSignIn }: SignInWidgetProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      if (onSignIn) {
        await onSignIn('google');
      }
      // TODO: Implement actual Google sign-in logic
      console.log('Signing in with Google...');
    } catch (error) {
      console.error('Sign-in error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Background Illustration */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Sky */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-blue-200"></div>
        
        {/* Clouds */}
        <div className="absolute top-20 left-20 w-24 h-16 bg-white rounded-full opacity-80"></div>
        <div className="absolute top-32 left-40 w-20 h-12 bg-white rounded-full opacity-70"></div>
        <div className="absolute top-16 right-32 w-28 h-20 bg-white rounded-full opacity-80"></div>
        
        {/* Hot Air Balloons */}
        <div className="absolute top-10 left-10 w-16 h-20 bg-white rounded-full opacity-90">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-400"></div>
        </div>
        <div className="absolute top-20 left-32 w-12 h-16 bg-yellow-200 rounded-full opacity-80">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gray-400"></div>
        </div>
        
        {/* Travel Van */}
        <div className="absolute bottom-32 right-16 w-24 h-16 bg-blue-300 rounded-lg">
          <div className="absolute top-0 left-0 w-full h-8 bg-blue-400 rounded-t-lg"></div>
          <div className="absolute top-2 left-2 w-4 h-4 bg-blue-600 rounded-full"></div>
          <div className="absolute top-2 right-2 w-4 h-4 bg-blue-600 rounded-full"></div>
          <div className="absolute -top-2 left-2 w-20 h-2 bg-yellow-300 rounded-full"></div>
        </div>
        
        {/* Traveler */}
        <div className="absolute bottom-28 right-20 w-4 h-8 bg-yellow-400 rounded-full">
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-yellow-600 rounded-full"></div>
        </div>
        
        {/* Water */}
        <div className="absolute bottom-16 left-0 right-0 h-16 bg-blue-300 opacity-60"></div>
        
        {/* Mountains */}
        <div className="absolute bottom-16 left-0 right-0">
          <div className="w-32 h-16 bg-blue-200 rounded-t-full ml-8"></div>
          <div className="w-24 h-12 bg-blue-100 rounded-t-full ml-20"></div>
          <div className="w-28 h-14 bg-blue-200 rounded-t-full ml-40"></div>
        </div>
        
        {/* Ground Items */}
        <div className="absolute bottom-8 left-8 w-6 h-4 bg-black rounded-lg"></div>
        <div className="absolute bottom-8 left-16 w-8 h-5 bg-yellow-600 rounded-lg"></div>
        <div className="absolute bottom-8 left-28 w-6 h-4 bg-yellow-700 rounded-lg"></div>
        <div className="absolute bottom-10 left-40 w-3 h-3 bg-yellow-400 rounded-full"></div>
        
        {/* Birds */}
        <div className="absolute top-32 right-20">
          <div className="w-8 h-4 bg-white rounded-full opacity-80"></div>
        </div>
        <div className="absolute top-28 right-16">
          <div className="w-6 h-3 bg-white rounded-full opacity-80"></div>
        </div>
      </div>

      {/* Sign In Modal */}
      <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-gray-900">Tourvisto</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Start Your Travel Journey
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-center mb-8 leading-relaxed">
          Sign in with Google to explore AI-generated itineraries, trending destinations, and much more
        </p>

        {/* Google Sign In Button */}
        <button
          onClick={handleGoogleSignIn}
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <>
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Sign in with Google</span>
            </>
          )}
        </button>

        {/* Terms */}
        <p className="text-xs text-gray-500 text-center mt-6">
          By signing in, you agree to our{' '}
          <Link href="/terms" className="text-blue-600 hover:underline">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
} 
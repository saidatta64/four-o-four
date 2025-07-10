/* eslint-disable react/no-unescaped-entities */
'use client';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ConnectForm() {
  const [activeTab, setActiveTab] = useState('consultation');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    const role = activeTab === 'consultation' ? 'Consultation' : 'Contributor';
    const username = email.split('@')[0];
    try {
      const res = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username, role }),
      });
      const data = await res.json();
      if (data.success) {
        toast.success('Thank you! We have sent you an email with a form to connect with us 📧\nIf you do not see the email in your inbox, please check your spam folder.');
        setEmail(''); // Clear the form
      } else {
        toast.error('Failed to send email', {
          description: data.message || 'Please try again.',
        });
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast.error('Failed to send email', {
        description: 'Please check your connection and try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-neutral-900 dark:to-neutral-950">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Header Title */}
    <div className="text-center mb-12">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
        <span className="bg-gray-900 dark:bg-amber-50 text-transparent bg-clip-text">
          Let's Build Together
        </span>
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Join our network or get expert guidance to bring your vision to life.
      </p>
    </div>

    {/* Tab Navigation with sliding animation */}
    <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl border border-gray-100 dark:border-neutral-700 relative overflow-hidden pt-2 pl-2">
      {/*
        The main fix is here:
        - Removed `m-2` from the sliding div.
        - Adjusted `w-1/2` to `w-[calc(50%-8px)]` to account for the parent padding (p-1)
          and ensure it's slightly smaller than half, fitting perfectly within the rounded corners.
        - Adjusted `translate-x` values to account for the new width and parent padding.
        - Added `left-1` to match the parent's `p-1`.
      */}
      <div className="flex relative z-10 p-1"> {/* Increased parent padding slightly to p-1 */}
        {/* Sliding background indicator */}
        <div
          className={`absolute top-1 bottom-1 w-[calc(50%-8px)] bg-sky-600 dark:bg-sky-600 rounded-xl transition-transform duration-300 ease-in-out ${
            activeTab === 'consultation' ? 'left-1 translate-x-0' : 'left-1 translate-x-full'
          }`}
        />

        <button
          onClick={() => setActiveTab('consultation')}
          className={`flex-1 py-4 px-8 text-center font-semibold rounded-xl transition-colors duration-300 relative z-10 ${
            activeTab === 'consultation'
              ? 'text-white'
              : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
          }`}
        >
          Request Consultation
        </button>
        <button
          onClick={() => setActiveTab('collaborate')}
          className={`flex-1 py-4 px-8 text-center font-semibold rounded-xl transition-colors duration-300 relative z-10 ${
            activeTab === 'collaborate'
              ? 'text-white'
              : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'
          }`}
        >
          Collaborate
        </button>
      </div>

      {/* Form Content */}
      <div className="bg-white dark:bg-neutral-800 rounded-b-2xl p-10 mt-4">

        {/* Description Text */}
        <div className="mb-10 p-6 bg-blue-50 dark:bg-neutral-700 rounded-xl border border-blue-100 dark:border-neutral-600">
          <p className="text-gray-700 dark:text-gray-300 text-center text-lg leading-relaxed">
            {activeTab === 'consultation'
              ? 'Get expert guidance and personalized recommendations for your project. We\'ll help you choose the right solutions for your business needs.'
              : 'Join our vibrant network of talented developers and innovative professionals. Connect, share, and explore exciting collaboration opportunities.'
            }
          </p>
        </div>

        {/* Form */}
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-3">
              Email Address
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                name={activeTab === 'consultation' ? 'customer_email' : 'collaborator_email'}
                required
                placeholder="you@example.com"
                className="w-full px-5 py-4 border border-gray-300 dark:border-neutral-600 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 transition-colors duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 bg-white dark:bg-neutral-700 text-lg shadow-sm"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                <svg className="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 dark:from-blue-500 dark:to-sky-500 dark:hover:from-blue-600 dark:hover:to-sky-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-neutral-800 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span className="text-lg">Sending...</span>
              </>
            ) : (
              <>
                <span className="text-lg">
                  {activeTab === 'consultation' ? 'Request Consultation' : 'Join Our Network'}
                </span>
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
                    activeTab === 'consultation'
                      ? "M9 5l7 7-7 7"
                      : "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  } />
                </svg>
              </>
            )}
          </button>
        </form>

        {/* Helper Text */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            On click, we'll send you an email with a form to connect with us.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
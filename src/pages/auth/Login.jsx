import React from 'react'
import { FiLogIn, FiMail, FiLock, FiGithub, FiTwitter, FiZap, FiUser, FiPhone, FiHome } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'
import { BEDROOM_LOGIN_IMAGE } from '../../assets'

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${BEDROOM_LOGIN_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(8px)',
          transform: 'scale(1.05)'
        }}
      />
      
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 z-0 bg-black/60" />
      
      {/* Glassmorphism Container */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">
        
        {/* Left side - Hotel Brand/Info Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between bg-black/30 backdrop-blur-sm border-r border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                <FiHome className="w-7 h-7 text-white" />
              </div>
              <span className="text-white font-bold text-2xl tracking-tight">LuxeStay</span>
              <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider ml-2 bg-amber-400/20 px-2 py-1 rounded-full">
                Premium
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Welcome Back to<br />
              <span className="text-amber-400">Luxury Living</span>
            </h1>
            <p className="text-amber-100/80 text-lg mb-8 max-w-sm">
              Sign in to manage your bookings, access premium services, and experience world-class hospitality.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-amber-100">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <FiUser className="w-4 h-4 text-amber-400" />
                </div>
                <span>Manage your reservations</span>
              </div>
              <div className="flex items-center gap-3 text-amber-100">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <FiZap className="w-4 h-4 text-amber-400" />
                </div>
                <span>24/7 concierge services</span>
              </div>
              <div className="flex items-center gap-3 text-amber-100">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <FiPhone className="w-4 h-4 text-amber-400" />
                </div>
                <span>Instant support & assistance</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-amber-200/60 text-sm">
              By signing in, you agree to our Terms of Service & Privacy Policy
            </p>
          </div>
        </div>
        
        {/* Right side - Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 bg-black/20 backdrop-blur-sm">
          <div className="flex flex-col h-full">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-white mb-1">Staff & Guest Login</h2>
              <p className="text-amber-200/70 text-sm">Enter your credentials to access the hotel management system</p>
            </div>
            
            <form className="flex-1 space-y-5">
              {/* Email Field */}
              <div className="space-y-1.5">
                <label className="text-white/80 text-sm font-medium block">Email Address</label>
                <div className="relative group">
                  <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-400 w-5 h-5 group-focus-within:text-amber-300 transition-colors" />
                  <input
                    type="email"
                    placeholder="guest@luxestay.com"
                    className="w-full pl-10 pr-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition-all"
                  />
                </div>
              </div>
              
              {/* Password Field */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-white/80 text-sm font-medium block">Password</label>
                  <a href="#" className="text-amber-400 text-sm hover:text-amber-300 transition-colors hover:underline">
                    Forgot Password?
                  </a>
                </div>
                <div className="relative group">
                  <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-400 w-5 h-5 group-focus-within:text-amber-300 transition-colors" />
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/30 transition-all"
                  />
                </div>
              </div>
              
              {/* Remember Me & Role Selector */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 rounded border-white/20 bg-white/5 text-amber-500 focus:ring-amber-400 focus:ring-offset-0"
                  />
                  <label htmlFor="remember" className="text-amber-200/80 text-sm">
                    Remember me
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white/50 text-xs">Role:</span>
                  <select className="bg-white/5 border border-white/10 rounded-lg text-white text-sm px-2 py-1 focus:outline-none focus:border-amber-400">
                    <option value="guest" className="bg-gray-900">Guest</option>
                    <option value="staff" className="bg-gray-900">Staff</option>
                    <option value="admin" className="bg-gray-900">Admin</option>
                  </select>
                </div>
              </div>
              
              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg shadow-amber-500/30 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="flex items-center justify-center gap-2">
                  <FiLogIn className="w-5 h-5" />
                  Sign In to Dashboard
                </span>
              </button>
            </form>
            
            {/* Social Login */}
            <div className="mt-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-1 h-px bg-white/10"></div>
                <span className="text-amber-200/50 text-xs uppercase tracking-wider">Or continue with</span>
                <div className="flex-1 h-px bg-white/10"></div>
              </div>
              
              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all">
                  <FcGoogle className="w-5 h-5" />
                  <span className="text-white/80 text-sm font-medium">Google</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all">
                  <FiGithub className="w-5 h-5 text-white/80" />
                  <span className="text-white/80 text-sm font-medium">GitHub</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all">
                  <FiTwitter className="w-5 h-5 text-white/80" />
                  <span className="text-white/80 text-sm font-medium">Twitter</span>
                </button>
              </div>
            </div>
            
            <p className="text-center text-amber-200/60 text-sm mt-6">
              New to LuxeStay?{' '}
              <a href="#" className="text-amber-400 font-semibold hover:text-amber-300 transition-colors hover:underline">
                Create Account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
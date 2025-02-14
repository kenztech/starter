import { useState } from "react";
import { Link } from "react-router";
import {
  GraduationCap,
  BookOpen,
  Users,
  Trophy,
  Brain,
  Rocket,
  Target,
  Award,
  Lightbulb,
  Loader2,
} from "lucide-react";
import { useAuth } from "../../lib/context/auth";

function Login() {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await login(email, password);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Section - Login Form */}
      <div className="w-full min-h-screen lg:w-1/2 p-4 sm:p-8 flex flex-col justify-center bg-white">
        <div className="w-full max-w-md mx-auto">
          <div className="mb-8 sm:mb-12">
            <div className="w-12 h-12 bg-emerald-800 rounded-lg flex items-center justify-center mb-6 sm:mb-8">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600 text-sm">
              Login to access your data and courses.
            </p>
          </div>

          <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
            {error && <p className="text-red-500">{error}</p>}
            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-transparent"
                placeholder="you@school.edu"
              />
            </div>

            <div className="relative">
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="block text-sm">
                  Password
                </label>
                <a
                  href="#"
                  className="text-sm text-emerald-800 hover:text-emerald-700"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-800 focus:border-transparent"
              />
            </div>

            <button
              disabled={loading}
              className="w-full flex gap-2 items-center justify-center bg-emerald-800 text-white py-2 rounded-lg hover:bg-emerald-700 transition-all"
            >
              {loading && (
                <Loader2 className="h-5 w-5 text-white animate-spin" />
              )}
              Login
            </button>

            <p className="text-center text-sm text-gray-600">
              Do not have an account?{" "}
              <Link
                to="/register"
                className="text-emerald-800 hover:text-emerald-700"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Right Section - Marketing (hidden on mobile) */}
      <div className="hidden lg:block w-1/2 bg-emerald-800 p-12 relative overflow-hidden rounded-xl m-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />

        <div className="text-white relative z-20 h-full flex flex-col">
          <div className="flex-shrink-0 pt-16 px-4">
            <h1 className="text-6xl font-light leading-tight">
              Empower
              <br />
              Your Learning
              <br />
              <span className="font-medium">Journey</span>
            </h1>
          </div>

          {/* Floating Cards Container */}
          <div className="relative flex-grow mt-24">
            {/* Main Stats Card */}
            <div className="absolute left-8 top-0 w-72 bg-white/10 backdrop-blur-lg rounded-2xl p-5 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm font-medium mb-1">
                    Global Community
                  </p>
                  <p className="text-2xl font-semibold">50,000+ Students</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Course Card */}
            <div className="absolute right-8 top-24 w-56 bg-white/5 backdrop-blur-sm rounded-xl p-4 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 shadow-lg">
              <div className="flex items-center space-x-3 mb-2">
                <BookOpen className="w-5 h-5 text-white/90" />
                <p className="text-white/90 font-medium">Active Courses</p>
              </div>
              <p className="text-2xl font-semibold">250+</p>
            </div>

            {/* Achievement Card */}
            <div className="absolute left-12 top-48 w-52 bg-white/5 backdrop-blur-sm rounded-xl p-4 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 shadow-lg">
              <div className="flex items-center space-x-3 mb-2">
                <Trophy className="w-5 h-5 text-white/90" />
                <p className="text-white/90 font-medium">Achievements</p>
              </div>
              <p className="text-2xl font-semibold">1,500+</p>
            </div>

            {/* Skills Card */}
            <div className="absolute right-20 top-60 w-48 bg-white/5 backdrop-blur-sm rounded-xl p-4 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 shadow-lg">
              <div className="flex items-center space-x-3 mb-2">
                <Brain className="w-5 h-5 text-white/90" />
                <p className="text-white/90 font-medium">Skills</p>
              </div>
              <p className="text-2xl font-semibold">100+</p>
            </div>

            {/* Innovation Card */}
            <div className="absolute left-8 bottom-40 w-44 bg-white/5 backdrop-blur-sm rounded-xl p-4 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 shadow-lg">
              <div className="flex items-center space-x-3 mb-2">
                <Rocket className="w-5 h-5 text-white/90" />
                <p className="text-white/90 font-medium">Projects</p>
              </div>
              <p className="text-2xl font-semibold">75+</p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute right-8 bottom-24 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center transform rotate-45 hover:rotate-90 transition-all duration-500">
              <Target className="w-5 h-5 text-white/60" />
            </div>
            <div className="absolute left-32 bottom-16 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center transform -rotate-12 hover:rotate-45 transition-all duration-500">
              <Award className="w-5 h-5 text-white/60" />
            </div>
            <div className="absolute right-16 bottom-8 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center transform rotate-90 hover:rotate-180 transition-all duration-500">
              <Lightbulb className="w-5 h-5 text-white/60" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

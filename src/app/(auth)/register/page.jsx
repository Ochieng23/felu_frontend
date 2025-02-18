import Image from 'next/image'
import Link from 'next/link'

export default function Register() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white flex flex-col md:flex-row rounded-xl shadow-lg max-w-4xl w-full overflow-hidden">
        {/* Left Side: Image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto">
          <Image
            src="https://res.cloudinary.com/dhz4c0oae/image/upload/v1739872343/image_6_epd5qc.png" // Replace with actual image URL if needed
            alt="Register"
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
          />
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <div className="mb-6">
            <h1 className="text-3xl font-semibold text-gray-800">Register</h1>
            <p className="text-lg text-gray-600 mt-2">
              Already have an account?{' '}
              <Link href="/login" className="text-blue-600">
                Log in
              </Link>
            </p>
          </div>

          {/* Registration Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm your password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Register
            </button>
          </form>

          {/* Social Registration */}
          <div className="mt-4 text-center text-gray-600">or</div>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="flex items-center justify-center w-full p-3 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 focus:outline-none">
              <Image
                src="https://res.cloudinary.com/dhz4c0oae/image/upload/v1735543615/Google_Logo_yxu2xp.png"
                alt="Google Logo"
                width={24}
                height={24}
                className="mr-2"
              />
              Google
            </button>
            <button className="flex items-center justify-center w-full p-3 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 focus:outline-none">
              <Image
                src="https://res.cloudinary.com/dhz4c0oae/image/upload/v1735543615/Apple_Logo_yxu2xp.png"
                alt="Apple Logo"
                width={24}
                height={24}
                className="mr-2"
              />
              Apple ID
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

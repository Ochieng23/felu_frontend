import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl flex flex-col md:flex-row">
        {/* Left Section: QR Code & Logo */}
        <div className="bg-[#B9E2FF] flex-1 p-8 flex flex-col">
          {/* Header with Logo and Text */}
          <div className="flex items-center mb-4">
            <img
              src="https://res.cloudinary.com/dhz4c0oae/image/upload/v1739871355/Logo_Icon_Colored_1_3_b368w4.png"
              alt="Logo"
              className="w-12 h-12 mr-3"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-800">Fele</span>
              <span className="text-sm text-gray-600">by Aureli</span>
            </div>
          </div>
          {/* QR Code */}
          <div className="flex items-center justify-center flex-1">
            <Link href="/register">
              <img
                src="https://img.freepik.com/free-vector/scan-me-qr-code_78370-2915.jpg"
                alt="QR Code"
                className="w-full max-w-xs object-contain"
              />
            </Link>
          </div>
        </div>

        {/* Right Section: Instruction Text */}
        <div className="bg-white flex-1 p-8 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Scan QR Code
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Welcome to Fele.
          </p>
          <p className="text-sm text-gray-500">
            Scan this QR code with Google Lens or your preferred photo scanning app to verify your identity.
          </p>
        </div>
      </div>
    </div>
  );
}

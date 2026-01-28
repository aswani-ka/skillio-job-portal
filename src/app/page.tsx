import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-700 via-teal-600 to-teal-500 text-white font-league-spartan">
      
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold tracking-wide">
          <span className="text-teal-200">S</span>killio Job<span className="text-teal-200">Portal</span>
        </h1>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="px-4 py-2 rounded text-lg hover:bg-white/10 transition"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-5 py-2 text-lg bg-white text-teal-700 rounded font-semibold hover:bg-gray-100 transition"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 mt-18 animate-fadeIn">
        <h2 className="text-6xl md:text-7xl font-extrabold leading-tight">
          Find Your <span className="text-teal-200">Dream Job</span>
        </h2>

        <p className="mt-6 text-lg md:text-xl max-w-2xl text-white/90">
          Explore thousands of job opportunities from top companies.  
          Apply easily and track your applications in one place.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/jobs"
            className="bg-white text-teal-700 px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition transform"
          >
            Browse Jobs
          </Link>

          <Link
            href="/signup"
            className="border border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-700 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mt-32 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
        <div className="bg-white/10 p-6 rounded-xl backdrop-blur hover:scale-105 transition">
          <h3 className="text-[22px] md:text-2xl font-semibold mb-2">Verified Jobs</h3>
          <p className="text-white/80 text-[15px] md:text-[17px]">
            Only genuine recruiters and trusted companies.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl backdrop-blur hover:scale-105 transition">
          <h3 className="text-[22px] md:text-2xl font-semibold mb-2">Easy Applications</h3>
          <p className="text-white/80 text-[15px] md:text-[17px]">
            Apply with your profile and resume in one click.
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl backdrop-blur hover:scale-105 transition">
          <h3 className="text-[22px] md:text-2xl font-semibold mb-2">Track Status</h3>
          <p className="text-white/80 text-[15px] md:text-[17px]">
            Know whether you are shortlisted or rejected.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-50 text-center text-sm text-white/70 pb-6">
        © {new Date().getFullYear()} JobPortal. All rights reserved.
      </footer>
    </main>
  )
}

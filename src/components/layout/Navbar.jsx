"use client";

import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import { FaHandshakeSimple } from "react-icons/fa6";
import { MdFlightTakeoff } from "react-icons/md";

export default function Navbar() {
  return (
    <header className="container fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div
        className="
          flex items-center justify-between px-4 sm:px-6 py-3
          rounded-[var(--radius-lg)]
          border border-[var(--border-soft)]
          bg-[var(--bg-glass)]
          backdrop-blur-xl
          shadow-[var(--shadow-glass)]
        "
      >
        {/* Logo */}
        <span className="text-lg sm:text-xl font-extrabold tracking-wide text-[var(--text-main)]">
          Wheyer
        </span>

        {/* Menu */}
        <nav className="flex items-center gap-3 text-sm font-medium">

          {/* Desktop Only */}
          <Link
            href="/my-trip"
            className="
              hidden lg:flex
              items-center gap-2 px-4 py-2 rounded-full
              bg-[var(--primary-soft)]
              text-[var(--text-main)]
              hover:bg-[var(--primary)]
              hover:text-white
              transition
            "
          >
            <MdFlightTakeoff />
            My Trip
          </Link>

          {/* Desktop Only */}
          <Link
            href="/partner"
            className="
              hidden lg:flex
              items-center gap-2 px-4 py-2 rounded-full
              bg-[var(--primary-soft)]
              text-[var(--text-main)]
              hover:bg-[var(--primary)]
              hover:text-white
              transition
            "
          >
            <FaHandshakeSimple />
            Become Partner
          </Link>

          {/* Always Visible */}
          <Link
            href="/login"
            className="
              flex items-center gap-2 px-4 py-2 rounded-full
              bg-white text-[var(--text-main)] font-medium
              shadow-[var(--shadow-sm)]
              hover:shadow-[var(--shadow-md)] transition
            "
          >
            <span className="hidden sm:block">Sign In / Sign Up</span>
            <FiLogIn />
          </Link>

        </nav>
      </div>
    </header>
  );
}

import Link from "next/link";
import SearchInput from "./SearchInput";

function Navigation() {
  return (
    <header className="py-7 px-4 bg-black">
      <nav className="flex gap-4 items-center md:grid md:grid-cols-10">
        <div className="md:col-span-1 flex">
          <Link href="/">
            <svg
              className="h-9"
              width="72"
              height="45"
              viewBox="0 0 72 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.34313 44.24C4.98313 44.24 3.76313 43.74 2.68313 42.74C1.60313 41.7 1.06313 39.96 1.06313 37.52C1.06313 35.92 1.28313 34.14 1.72313 32.18C2.20313 30.22 2.76313 28.2 3.40313 26.12C4.08313 24 4.76313 21.96 5.44313 20C6.12313 18.04 6.68313 16.26 7.12312 14.66C7.56313 13.06 7.78313 11.8 7.78313 10.88C7.78313 9.8 7.36313 9.26 6.52313 9.26C5.52313 9.26 4.58313 9.84 3.70313 11C2.82313 12.12 1.84313 13.7 0.763125 15.74L0.403125 15.62C0.403125 12.46 1.24313 9.72 2.92313 7.4C4.60313 5.04 6.86313 3.22 9.70313 1.94C12.5831 0.659998 15.7831 0.0199976 19.3031 0.0199976C22.8631 0.0199976 25.7431 0.639998 27.9431 1.88C30.1831 3.08 31.8231 4.66 32.8631 6.62C33.9431 8.54 34.4831 10.6 34.4831 12.8C34.4831 14.68 34.1231 16.56 33.4031 18.44C32.7231 20.28 31.7231 21.96 30.4031 23.48C29.1231 25 27.6031 26.22 25.8431 27.14C24.0831 28.06 22.1431 28.52 20.0231 28.52C17.8231 28.52 15.5431 27.96 13.1831 26.84C12.6631 28.8 12.2031 30.8 11.8031 32.84C11.4031 34.84 11.2031 36.9 11.2031 39.02C11.2031 40.06 11.2631 41.1 11.3831 42.14C10.7031 42.82 9.90313 43.34 8.98313 43.7C8.10313 44.06 7.22313 44.24 6.34313 44.24ZM15.9431 22.52C17.5431 22.52 18.9431 22.08 20.1431 21.2C21.3431 20.28 22.2631 19.14 22.9031 17.78C23.5831 16.38 23.9231 14.98 23.9231 13.58C23.9231 11.94 23.3831 10.48 22.3031 9.2C21.2631 7.92 19.5431 7.28 17.1431 7.28C16.8231 7.28 16.4431 7.3 16.0031 7.34C15.6031 7.38 15.1831 7.44 14.7431 7.52C15.0631 8.52 15.2631 9.52 15.3431 10.52C15.4631 11.48 15.5231 12.42 15.5231 13.34C15.5231 14.94 15.4031 16.48 15.1631 17.96C14.9231 19.44 14.6431 20.9 14.3231 22.34C14.8831 22.46 15.4231 22.52 15.9431 22.52ZM43.14 44.24C41.78 44.24 40.56 43.74 39.48 42.74C38.4 41.7 37.86 39.96 37.86 37.52C37.86 35.92 38.08 34.14 38.52 32.18C39 30.22 39.56 28.2 40.2 26.12C40.88 24 41.56 21.96 42.24 20C42.92 18.04 43.48 16.26 43.92 14.66C44.36 13.06 44.58 11.8 44.58 10.88C44.58 9.8 44.16 9.26 43.32 9.26C42.32 9.26 41.38 9.84 40.5 11C39.62 12.12 38.64 13.7 37.56 15.74L37.2 15.62C37.2 12.46 38.04 9.72 39.72 7.4C41.4 5.04 43.66 3.22 46.5 1.94C49.38 0.659998 52.58 0.0199976 56.1 0.0199976C59.66 0.0199976 62.54 0.639998 64.74 1.88C66.98 3.08 68.62 4.66 69.66 6.62C70.74 8.54 71.28 10.6 71.28 12.8C71.28 14.68 70.92 16.56 70.2 18.44C69.52 20.28 68.52 21.96 67.2 23.48C65.92 25 64.4 26.22 62.64 27.14C60.88 28.06 58.94 28.52 56.82 28.52C54.62 28.52 52.34 27.96 49.98 26.84C49.46 28.8 49 30.8 48.6 32.84C48.2 34.84 48 36.9 48 39.02C48 40.06 48.06 41.1 48.18 42.14C47.5 42.82 46.7 43.34 45.78 43.7C44.9 44.06 44.02 44.24 43.14 44.24ZM52.74 22.52C54.34 22.52 55.74 22.08 56.94 21.2C58.14 20.28 59.06 19.14 59.7 17.78C60.38 16.38 60.72 14.98 60.72 13.58C60.72 11.94 60.18 10.48 59.1 9.2C58.06 7.92 56.34 7.28 53.94 7.28C53.62 7.28 53.24 7.3 52.8 7.34C52.4 7.38 51.98 7.44 51.54 7.52C51.86 8.52 52.06 9.52 52.14 10.52C52.26 11.48 52.32 12.42 52.32 13.34C52.32 14.94 52.2 16.48 51.96 17.96C51.72 19.44 51.44 20.9 51.12 22.34C51.68 22.46 52.22 22.52 52.74 22.52Z"
                fill="url(#paint0_diamond_13_54)"
              />
              <defs>
                <radialGradient
                  id="paint0_diamond_13_54"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(-0.125867 31.91) rotate(-23.686) scale(69.2763 1966.26)"
                >
                  <stop offset="0.00284781" stopColor="#FF00C1" />
                  <stop offset="1" stopColor="#7000FF" />
                </radialGradient>
              </defs>
            </svg>
          </Link>
        </div>
        <SearchInput />
      </nav>
    </header>
  );
}

export default Navigation;

import Link from "next/link";

function Intro() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="-mt-40 flex flex-col items-center">
        <h1
          style={{ color: "transparent" }}
          className="webkit-background-clip-text bg-gradient-brand text-transparent bg-clip-text font-display h-full grid"
        >
          <span className="text-xl md:text-4xl">Welcome to</span>
          <span className="text-4xl leading-normal md:text-8xl md:leading-snug">
            PoobTunes Party
          </span>
        </h1>
        <Link href={"/#playlist"} className="mt-10 animate-bounce">
          <svg
            width="56"
            height="30"
            viewBox="0 0 56 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 30L0.287191 1.40556e-06L55.7128 -3.4399e-06L28 30Z"
              fill="url(#paint0_linear_13_59)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_13_59"
                x1="-7.36842"
                y1="41.5254"
                x2="51.1843"
                y2="-3.87742"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF00C1" />
                <stop offset="1" stopColor="#7000FF" />
              </linearGradient>
            </defs>
          </svg>
        </Link>
      </div>
    </section>
  );
}
export default Intro;

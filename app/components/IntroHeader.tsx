import { Link } from "react-router";

export default function IntroHeader() {
  return (
    <section className="flex flex-col items-center text-center pt-28 sm:pt-32 pb-12 px-4 bg-gray-100 min-h-screen relative">
      {/* Paper background and heading block */}
      <div className="relative w-full max-w-6xl flex justify-center pb-60">
        {/* Paper image behind text */}
        <img
          src="/Paper.png"
          alt="paper background"
          className="absolute left-1/2 -translate-x-1/2 w-[70%] h-[600px] object-top object-cover z-0"
        />

        {/* Header text on top of paper */}
        <div className="relative z-10 py-12 px-4 sm:px-6 max-w-[90%] sm:max-w-[600px] md:max-w-[700px]">
          <h1 className="text-4xl font-bold leading-tight font-edu mb-4">
            <span className="font-light">IDEAS</span> FOR NEW YORKERS
            <br />
            <span className="font-light">BY NEW YORKERS</span>
          </h1>
          <p className="text-gray-600 text-base">
            An interactive visualization of all ideas submitted to{" "}
            <i>The People's Money</i>,<br />
            NYC’s participatory budgeting program
          </p>
        </div>
      </div>

      {/* Main image visually anchored to the bottom of paper */}
      <div className="z-30 -mt-56 mb-16 w-full flex justify-center relative">
        <img
          src="/MainImage.png"
          alt="Main visual"
          className="w-[1000px] max-w-full object-contain"
        />
      </div>

      {/* Navigation button */}
      <div className="flex justify-center gap-4 flex-wrap z-30">
        <Link to="/map">
          <button className="px-4 py-2 bg-green-100 border border-green-300 font-semibold hover:bg-green-200">
            SEE LAST YEAR’S (2024) IDEAS →
          </button>
        </Link>
      </div>
    </section>
  );
}

import { Link } from "react-router";

export default function IntroHeader() {
  return (
    <section className="flex flex-col justify-between text-center py-12 px-4 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold leading-tight font-edu">
        <span className="font-light">IDEAS</span> FOR NEW YORKERS<br />
        <span className="font-light">BY NEW YORKERS</span>
      </h1>

      <p className="text-gray-600 text-base mt-4 mb-8">
        An interactive visualization of all ideas submitted to The People's Money,<br />
        NYC’s participatory budgeting program
      </p>

      <div className="flex justify-center gap-6 flex-wrap mb-8">
        <div className="bg-green-100 p-4 rounded-xl w-44">
          <img src="/left.png" alt="image" className="rounded-md w-full" />
        </div>
        <div className="bg-yellow-200 p-4 rounded-xl w-44">
          <img src="/center.png" alt="image" className="rounded-md w-full" />
        </div>
        <div className="bg-green-100 p-4 rounded-xl w-44">
          <img src="/right.png" alt="image" className="rounded-md w-full" />
        </div>
      </div>

<div className="flex justify-center gap-4 flex-wrap">
  <button
    className="px-4 py-2 border border-gray-300 bg-white text-gray-500 cursor-not-allowed"
    disabled
  >
    2022 IDEAS
  </button>

  <Link to="/map">
    <button className="px-4 py-2 bg-green-100 border border-green-300 font-semibold hover:bg-green-200">
      SEE LAST YEAR’S (2024) IDEAS →
    </button>
  </Link>
  <button className="px-4 py-2 border border-gray-300 bg-white hover:bg-gray-50">
    2023 IDEAS
  </button>
</div>
</section>
  );
}
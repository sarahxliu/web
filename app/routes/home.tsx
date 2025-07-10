import { Link } from "react-router";
import type { Route } from "./+types/home";

// eslint-disable-next-line react-refresh/only-export-components, no-empty-pattern
export function meta({}: Route.MetaArgs) {
  return [
    { title: "IoNYC - Ideas of New York City" },
    {
      name: "IoNYC- Ideas of New York City",
      content:
        " An interactive visualization of the 12,000+ ideas submitted through NYC's participatory budgeting process",
    },
  ];
}

export default function Home() {
  return (
    <div
      className="w-full h-full flex flex-col items-center 
    "
    >
      <h1>Ideas of NYC</h1>
      <Link to={"/map"}>
        <button className="p-2 border border-neutral-200 bg-neutral-50 hover:bg-white">
          Continue to Site
        </button>
      </Link>
    </div>
  );
}

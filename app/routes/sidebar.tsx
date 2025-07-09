import { useContext } from "react";
import { Outlet } from "react-router";
import { SidebarIdea } from "~/components/SidebarIdea";
import { IdeaContext } from "~/context/IdeaContext";

const SideBar = () => {
  const ideaContext = useContext(IdeaContext);
  console.log("dd");

  if (ideaContext)
    return (
      <div className="flex w-full max-h-screen">
        <div className="border border-r border-neutral-200 p-2 max-h-full overflow-y-scroll flex flex-col gap-2">
          {ideaContext.ideas.map((idea) => (
            <SidebarIdea idea={idea} handleOpen={() => {}}></SidebarIdea>
          ))}
        </div>
        <Outlet></Outlet>
      </div>
    );
  else
    return (
      <div className="flex">
        <p>Loading...</p>
        <Outlet></Outlet>
      </div>
    );
};

export default SideBar;

import { useContext, useMemo } from "react";
import { Outlet } from "react-router";
import { Search } from "~/components/Search";
import { SidebarIdea } from "~/components/SidebarIdea";
import { IdeaContext } from "~/context/IdeaContext";
import { BOROUGHS } from "~/types";
import type { Idea } from "~/types";

const SideBar = () => {
  const ideaContext = useContext(IdeaContext);

  const MemoizedIdeas = useMemo(() => {
    return ideaContext.ideas ? (
      <>
        {ideaContext.ideas.map((idea, idx) => (
          <SidebarIdea
            idea={idea}
            handleOpen={() => {}}
            key={idx}
          ></SidebarIdea>
        ))}
      </>
    ) : (
      <p>Loading Ideas...</p>
    );
  }, [ideaContext.ideas]);

  if (ideaContext)
    return (
      <div className="flex w-full max-h-screen">
        <div className="border border-r border-neutral-200 p-2 max-h-full overflow-y-scroll flex flex-col gap-2">
          <div className="flex gap-2">
            <Search
              handleSearchTermChange={(newTerm) => {
                const newFilterFunction = (idea: Idea) => {
                  const titleContains = idea.solution
                    .toLowerCase()
                    .includes(newTerm.toLocaleLowerCase());
                  return titleContains;
                };
                ideaContext.setIdeaFilter(newFilterFunction);
              }}
            ></Search>
            <select
              className="w-min p-2 border border-neutral-200"
              onChange={(e) => {
                const selectedBorough = e.target.value;
                const newFilterFunction = (idea: Idea) => {
                  if (selectedBorough === "All") {
                    return true;
                  }
                  return (
                    idea.borough.toLowerCase() === selectedBorough.toLowerCase()
                  );
                };
                ideaContext.setIdeaFilter(newFilterFunction);
              }}
            >
              <option value="All">All Boroughs</option>
              {BOROUGHS.map((borough) => (
                <option key={borough} value={borough}>
                  {borough.charAt(0).toUpperCase() + borough.slice(1)}
                </option>
              ))}
            </select>
          </div>
          {MemoizedIdeas}
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

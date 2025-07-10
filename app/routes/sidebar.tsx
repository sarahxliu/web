import { useContext, useMemo } from "react";
import { Outlet } from "react-router";
import { Search } from "~/components/Search";
import { SidebarIdea } from "~/components/SidebarIdea";
import { IdeaContext } from "~/context/IdeaContext";
import type { Idea } from "~/types";

const SideBar = () => {
  const ideaContext = useContext(IdeaContext);

  const MemoizedIdeas = useMemo(() => {
    return ideaContext.ideas ? (
      <>
        {ideaContext.ideas.map((idea) => (
          <SidebarIdea idea={idea} handleOpen={() => {}}></SidebarIdea>
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
          <Search
            handleSearchTermChange={(newTerm) => {
              const newFilterFunction = (idea: Idea) => {
                const tagContains = idea.impactArea.reduce<boolean>(
                  (prev: boolean, cur) => {
                    return (
                      prev ||
                      cur
                        .toLocaleLowerCase()
                        .includes(newTerm.toLocaleLowerCase())
                    );
                  },
                  false
                );
                const boroughContains = idea.borough
                  .toLocaleLowerCase()
                  .includes(newTerm.toLocaleLowerCase());
                const titleContains = idea.solution
                  .toLowerCase()
                  .includes(newTerm.toLocaleLowerCase());
                return titleContains || tagContains || boroughContains;
              };
              ideaContext.setIdeaFilter(newFilterFunction);
            }}
          ></Search>
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

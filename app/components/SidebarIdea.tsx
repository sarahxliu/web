import type { FC } from "react";
import type { Idea } from "~/types";

export interface SidebarIdeaProps {
  idea: Idea;
  handleOpen: (idea: Idea) => void;
}

export const SidebarIdea: FC<SidebarIdeaProps> = ({ idea, handleOpen }) => {
  return (
    <div className="w-full p-2 border border-neutral-200 bg-white flex flex-col gap-2">
      <h1 className="text-lg font-bold">{idea.solution}</h1>

      <div className="flex gap-4 w-full">
        <span className="border border-neutral-200 p-1">{idea.borough}</span>
        <span className="border border-neutral-200 p-1">
          {idea.status === "None"
            ? "Did Not Advance"
            : idea.status.Final20Ideas
            ? "Finalist"
            : "Advanced to BA"}
        </span>
      </div>
      <div className="flex gap-4 w-full">
        <div className="flex flex-col gap-1 w-full">
          <p className="text-sm text-neutral-600">Impact Area:</p>

          <div className="flex gap-2">
            <>
              {idea.impactArea.slice(0, 2).map((someImpactArea, idx) => (
                <span className="border border-neutral-200 p-1" key={idx}>
                  {someImpactArea}
                </span>
              ))}
            </>
            {idea.impactArea.length - 2 > 0 ? (
              <span className="border border-neutral-200 p-1">
                {`+${idea.impactArea.length - 2} More...`}
              </span>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <p className="text-sm text-neutral-600">Audience</p>

          <div className="flex gap-2">
            <>
              {idea.impactArea.slice(0, 2).map((someImpactArea, idx) => (
                <span className="border border-neutral-200 p-1" key={idx}>
                  {someImpactArea}
                </span>
              ))}
            </>
            {idea.impactArea.length - 2 > 0 ? (
              <span className="border border-neutral-200 p-1">
                {`+${idea.impactArea.length - 2} More...`}
              </span>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <p className="text-sm text-neutral-600">Challenge</p>
        <p>{idea.challenge}</p>
      </div>
    </div>
  );
};

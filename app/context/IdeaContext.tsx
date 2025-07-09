import { createContext } from "react";
import type { Idea, IdeaFilterFunction } from "~/types";

export interface IdeaContextType {
  ideas: Idea[] | null;
  setIdeaFilter: (newFilter: IdeaFilterFunction) => void;
}

export const IdeaContext = createContext<IdeaContextType>({
  ideas: null,
  setIdeaFilter: () => {},
});

import { createContext } from "react";
import type { Borough, Idea, IdeaFilterFunction } from "~/types";

export interface IdeaContextType {
  ideas: Idea[] | null;
  setIdeaFilter: (newFilter: IdeaFilterFunction) => void;
  targetBorough: Borough | null;
  setTargetBorough: (newBorough: Borough) => void;
}

export const IdeaContext = createContext<IdeaContextType>({
  ideas: null,
  setIdeaFilter: () => {},
  targetBorough: null,
  setTargetBorough: () => {},
});

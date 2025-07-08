import { createContext } from "react";
import type { Idea } from "~/types";

export interface IdeaContextType {
  ideas: Idea[];
}

export const IdeaContext = createContext<IdeaContextType | null>(null);

import type {
  Idea,
  Borough,
  TestType,
  TestImpact,
  Option,
  BAStatus,
} from "./types";
import { BOROUGHS, TESTTYPES, TESTIMPACTS } from "./types";

const getRandomElement = <T>(arr: T[]): T => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const generateRandomIdea = (): Idea => {
  const randomBorough: Borough = getRandomElement(BOROUGHS);
  const randomIdeaType: TestType = getRandomElement(TESTTYPES);
  const randomImpactArea: TestImpact = getRandomElement(TESTIMPACTS);
  const randomSubCategory: TestType = getRandomElement(TESTTYPES);

  const statusOptions: Option<BAStatus>[] = [
    "None",
    {
      BAImpactArea: [getRandomElement(TESTIMPACTS)],
      BASubcategory: [getRandomElement(TESTTYPES)],
      Final20Ideas: Math.random() > 0.5,
      FinalBallot: Math.random() > 0.5,
      FinalDescription: Math.random() > 0.5,
      FinalTitle: Math.random() > 0.5,
    },
  ];
  const randomStatus: Option<BAStatus> = getRandomElement(statusOptions);

  return {
    audience: `Audience for ${randomBorough} idea`,
    borough: randomBorough,
    flags: ["flag1", "flag2"],
    IGSession: `Session ${Math.floor(Math.random() * 10) + 1}`,
    originalTitle: `Original Title for ${randomIdeaType} Idea`,
    challenge: `Challenge for ${randomImpactArea} area`,
    solution: `Solution for ${randomSubCategory} subcategory`,
    ideaType: randomIdeaType,
    impactArea: randomImpactArea,
    subCategory: randomSubCategory,
    status: randomStatus,
  };
};

export const generateNIdeas = (n: number): Idea[] => {
  const ideas: Idea[] = [];
  for (let i = 0; i < n; i++) {
    ideas.push(generateRandomIdea());
  }
  return ideas;
};

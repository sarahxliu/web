// given the following data, fill out the two functions defined in utils.ts

export type Borough =
  | "brooklyn"
  | "manhattan"
  | "bronx"
  | "staten island"
  | "queens";
export const BOROUGHS: Borough[] = [
  "brooklyn",
  "bronx",
  "manhattan",
  "queens",
  "staten island",
];

// for mock data; replace with real data once csv is cleaned
export type TestType = "Type A" | "Type B" | "Type C";
export const TESTTYPES: TestType[] = ["Type A", "Type B", "Type C"];
export type TestImpact = "Health" | "Education" | "Community";
export const TESTIMPACTS: TestImpact[] = ["Health", "Education", "Community"];

export type Option<T> = "None" | T;

export interface BAStatus {
  BAImpactArea: string[];
  BASubcategory: string[];
  Final20Ideas: boolean;
  FinalBallot: boolean;
  FinalDescription: boolean;
  FinalTitle: boolean;
}

export interface Idea {
  audience: string;
  borough: Borough;
  flags: string[];
  IGSession: string;
  originalTitle: string;
  challenge: string;
  solution: string;
  ideaType: TestType;
  impactArea: TestImpact;
  subCategory: TestType;
  status: Option<BAStatus>;
}

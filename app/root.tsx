import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { IdeaContext } from "./context/IdeaContext";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Idea, IdeaFilterFunction } from "./types";
import { generateNIdeas } from "./utils";

// eslint-disable-next-line react-refresh/only-export-components
export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const [ideas, setIdeas] = useState<Idea[] | null>(null);
  const [filteredIdeas, setFilteredIdeas] = useState<Idea[] | null>(null);
  const [ideaFilterFunction, setIdeaFilterFunction] =
    useState<IdeaFilterFunction | null>(null);

  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  const setFilter = (newFilter: IdeaFilterFunction) => {
    setIdeaFilterFunction(() => newFilter);
  };

  const loadIdeas = async () => {
    const p = new Promise<Idea[]>((value) => {
      value(generateNIdeas(12000));
    });
    p.then((loadedValue) => setIdeas(loadedValue));
  };

  useEffect(() => {
    loadIdeas();
  }, []);

  const filterIdeas = useCallback(
    (ideas: Idea[], filterFunction: IdeaFilterFunction) => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
        timeoutIdRef.current = null;
      }
      setFilteredIdeas(() => []);
      const FILTER_SIZE = 100;
      const filterIdeasAux = (
        ideas: Idea[],
        index: number,
        filterGroupSize: number,
        filterFunction: IdeaFilterFunction
      ) => {
        const currentSlice = ideas.slice(
          Math.max(0, index),
          Math.min(ideas.length, index + filterGroupSize)
        );
        const filteredSlice = currentSlice.filter(filterFunction);

        setFilteredIdeas((lastFiltered) => {
          if (lastFiltered === null) return filteredSlice;
          else return [...lastFiltered, ...filteredSlice];
        });

        if (index + filterGroupSize < ideas.length) {
          timeoutIdRef.current = setTimeout(() => {
            filterIdeasAux(
              ideas,
              index + filterGroupSize,
              filterGroupSize,
              filterFunction
            );
          }, 100);
        } else {
          timeoutIdRef.current = null;
        }
      };

      filterIdeasAux(ideas, 0, FILTER_SIZE, filterFunction);
    },
    []
  );

  useEffect(() => {
    if (ideas) {
      if (ideaFilterFunction) {
        filterIdeas(ideas, ideaFilterFunction);
      } else {
        setFilteredIdeas(ideas);
      }
    }
  }, [ideas, ideaFilterFunction, filterIdeas]);

  useEffect(() => console.log(filteredIdeas?.length), [filteredIdeas]);

  return (
    <IdeaContext.Provider
      value={{ ideas: filteredIdeas, setIdeaFilter: setFilter }}
    >
      <Outlet />
    </IdeaContext.Provider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}

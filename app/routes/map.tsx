import { useContext } from "react";
import { IdeaContext } from "~/context/IdeaContext";

const Map = () => {
  const ideaContext = useContext(IdeaContext);
  if (ideaContext)
    return (
      <div>
        {ideaContext.ideas.map((idea) => (
          <p>{idea.originalTitle}</p>
        ))}
      </div>
    );
  else return <p>Loading</p>;
};

export default Map;

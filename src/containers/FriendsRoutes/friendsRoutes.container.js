import React from "react";
import { useWebId } from "@inrupt/solid-react-components";

const FriendsRoutesComponent = () => {
  const webID = useWebId();
  return (
      <div>
        <h1>My friends routes</h1>
      </div>
  );
};

export default FriendsRoutesComponent;
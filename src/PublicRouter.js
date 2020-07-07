import React from "react";
import { useRoutes } from "hookrouter";

import MyNotes from "./components/MyNotes";
import Notes from "./components/Notes";
import Home from "./components/Home";
const routes = {
  "/create": () => <Notes />,
  "/mynotes": () => <MyNotes />,
  "/": () => <Home />,
};
function PublicRouter() {
  const pages = useRoutes(routes);

  return (
    <div>
      {pages}
      {!pages && (
        <div className="flex justify-center py-16">
          Error 404: Page not found
        </div>
      )}
    </div>
  );
}

export default PublicRouter;

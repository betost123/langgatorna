import * as React from "react";
import { Link, HeadFC } from "gatsby";
import Spacing from "../components/Spacer";

const NotFoundPage = () => {
  return (
    <div>
      <Spacing spacing={4} />
      404 not found
    </div>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;

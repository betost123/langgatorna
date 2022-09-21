import * as React from "react";
import { Link, HeadFC } from "gatsby";

const NotFoundPage = () => {
  return <div>404 not found</div>;
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;

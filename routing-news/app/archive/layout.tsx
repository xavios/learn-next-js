import React from "react";

const Layout = ({
  children,
  archive,
  latest,
}: {
  children: React.ReactNode;
  archive: React.ReactNode;
  latest: React.ReactNode;
}) => {
  return (
    <div>
      <h1>News Archive</h1>
      <div>{archive}</div>
      <div>{latest}</div>
    </div>
  );
};

export default Layout;

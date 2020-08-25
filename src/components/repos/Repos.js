import React from "react";
import propTypes from "prop-types";
import RepoItem from "./RepoItem";

const Repos = ({ repos }) => {
  return (
    <div>
      <h3 className="text-center">10 Latest Repos: </h3>
      {repos.map((repo) => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </div>
  );
};

Repos.propTypes = {
  repos: propTypes.array.isRequired,
};

export default Repos;

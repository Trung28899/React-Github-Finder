import React from "react";
import propTypes from "prop-types";
import RepoItem from "./RepoItem";

const Repos = ({ repos }) => {
  let trackingNo = 0;
  return (
    <div>
      <h3 className="text-center">Latest Repositories: </h3>
      {repos.map((repo) => {
        trackingNo++;
        return (
          <RepoItem repo={repo} key={repo.id} trackingNumber={trackingNo} />
        );
      })}
    </div>
  );
};

Repos.propTypes = {
  repos: propTypes.array.isRequired,
};

export default Repos;

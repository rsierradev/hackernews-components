import React from "react";

export const Menu = () => {
  return (
    <div className="row orangeBG">
      <div className="col-md-12 flex row">
        <div className="hackerNewsTitle col-auto">Hacker News</div>
        <div className="col-auto">
          <a href="https://google.com" className="blackFont pr-1">
            new
          </a>
          <span>|</span>
          <a href="https://google.com" className="blackFont pr-1 pl-1">
            past
          </a>
          <span>|</span>
          <a href="https://google.com" className="blackFont pl-1">
            comments
          </a>
        </div>
      </div>
    </div>
  );
};

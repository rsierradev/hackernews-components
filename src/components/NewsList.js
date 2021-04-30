import React from "react";
import moment from "moment";

export const NewsList = () => {
  var newsList = [
    {
      newsTitle: "QEMU 6.0.0",
      newsSource: "(qemu.org)",
      newsTime: 1470084848,
      newsPoints: 181,
      newsCommentsNo: 9,
    },
    {
      newsTitle:
        "European Union says Apple’s App Store breaches competition rules",
      newsSource: "(cnbc.com)",
      newsTime: 1470082275,
      newsPoints: 91,
      newsCommentsNo: 4,
    },
    {
      newsTitle: "It's Arrived Now Behold the Intelligent Timing Lock",
      newsSource: "(twitter.com/foone)",
      newsTime: 1619785864082,
      newsPoints: 61,
      newsCommentsNo: 33,
    },
    {
      newsTitle: "Building a Distributed Turn-Based Game System in Elixir",
      newsSource: "(fly.io)",
      newsTime: 1619785829404,
      newsPoints: 64,
      newsCommentsNo: 10,
    },
  ];
  return (
    <div className="row newsListContainer" style={{ padding: "0 15px" }}>
      <ul>
        {newsList
          .sort((a, b) => (new Date(a) < new Date(b) ? 1 : -1))
          .map((el) => {
            return (
              <li>
                <p>
                  {el.newsTitle}{" "}
                  <span style={{ color: "grey", fontSize: 7 }}>
                    {el.newsSource}
                  </span>
                </p>
                <p style={{ color: "grey", fontSize: 7 }}>
                  {el.newsPoints} Points by xyz{" "}
                  {moment.unix(el.newsTime).fromNow()}{" "}
                  <span>{el.newsCommentsNo} comments</span>
                </p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

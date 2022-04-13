import React from "react";
import "./resets.scss";

export default function HiddenLink(props) {
  const prevLink = props.prevLink === 0 ? "#" : props.prevLink; //if there's no prev, refresh
  const nextLink = props.nextLink === 0 ? "#" : props.nextLink; //if there's no next, refresh

  return (
    <div className="h-link">
      <a href={prevLink}>
        <abbr title="Prev link">Prev work</abbr>
      </a>
      <a href={nextLink}>
        <abbr title="Next link">Next work</abbr>
      </a>
      <a href="https://hachikoi-portfolio.netlify.app/">
        <abbr title="Portfolio">Portfolio</abbr>
      </a>
      <a href="https://github.com/Hachikoi-the-creator">
        <abbr title="Github">as</abbr>
      </a>
    </div>
  );
}

// shows the most popular tag on the screen of right hand side

import React from "react";

const Tag = ({tags}) => {

  // const onClick = (e) => {
  //     e.preventDefault();
  //     props.onClickTag(tag, )
  // }

  return tags ? (
    <div className="tag-list">
      {tags.map(tag => {
        // const handleClick = ev => {
        //   ev.preventDefault();
        //   props.onClickTag(
        //     tag,
        //     page => agent.Articles.byTag(tag, page),
        //     agent.Articles.byTag(tag)
        //   );
        // };

        return (
          <a
            href=""
            className="tag-default tag-pill"
            key={tag}
            // onClick={handleClick}
          >
            {tag}
          </a>
        );
      })}
    </div>
  ) : (
    <div>Loading Tags...</div>
  );
};

export default Tag

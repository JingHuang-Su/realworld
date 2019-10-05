// shows the most popular tag on the screen of right hand side

import React, {useEffect} from "react";
import {getArticleByTag,getTags} from '../../action'
import { connect } from 'react-redux'


const Tag = ({home, getArticleByTag,getTags }) => {
  useEffect(() => {
    getTags()
  }, [getTags]);

  const onClick = e => {
    e.preventDefault();
    getArticleByTag(e.target.name)
  };

  return home.tag ? (
    <div className="tag-list">
      {home.tag.map(t => 
        
          <a
            href=""
            className="tag-default tag-pill"
            key={t}
            onClick={(e) => onClick(e)}
            name={t}
          >
            {t}
          </a>
        
      )}
    </div>
  ) : (
    <div>Loading Tags...</div>
  );
};


const mapStateToProps = state => ({
  home:state.home
})
export default connect(mapStateToProps, {getArticleByTag, getTags})(Tag)

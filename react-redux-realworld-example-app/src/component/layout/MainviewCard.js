// shows all of article on the screen of left hand side

import MainviewCardPreview from './MainviewCardPreview';
import React from 'react';

const MainviewCard = ({articles}) => {
  return  (
    <div>
      {
        articles.map(article => {
          return (
            <MainviewCardPreview article={article} key={article.slug} />
          );
        })
      }
    </div>
  );
};

export default MainviewCard;
import React from 'react';
import {HomeWrapper} from './home.styled';

import ShowItem from '../../components/show-item';

function Home() {
  return (
    <HomeWrapper>
      <div className="one-wrap">
        <ShowItem item_link="https://blog.aiwan.run/" item_des="My Blog" />
        <ShowItem item_link="https://tools.aiwan.run/" item_des="WebTools" />
      </div>
      <div className="two-wrap">
        <ShowItem item_link="https://u.aiwan.run/" item_des="Find You" />
      </div>
      <a href="https://github.com/Debbl">
        <svg className="icon-box icon-github" aria-hidden="true">
          <use xlinkHref="#icon-github"></use>
        </svg>
      </a>
    </HomeWrapper>
  );
}

export default Home;

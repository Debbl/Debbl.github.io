import React, { memo } from 'react';
import { MineWrapper } from './style';

export default memo(function Mine() {
  return (
    <MineWrapper>
      <a className="my-blog" href="https://blog.aiwan.run/">
          <span>My Blog</span>
      </a>
    </MineWrapper>
  )
})

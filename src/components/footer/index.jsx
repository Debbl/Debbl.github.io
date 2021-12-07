import React, {memo} from 'react';
import {FooterWrapper} from './footer.styled';

export default memo(function Footer() {
  return (
    <FooterWrapper>
      <div className="copyright">
        <a href="https://github.com/Debbl">©2020 - 2021 By Debbl</a>
      </div>
      <div className="framework-info">
        <a href="https://github.com/Debbl">GitHub | GitHub Actions </a>
      </div>
      <div className="footer_custom_text">
        <a href="https://beian.miit.gov.cn/">
          <span>备案号：鄂ICP备19030152号-3</span>
        </a>
      </div>
    </FooterWrapper>
  );
});

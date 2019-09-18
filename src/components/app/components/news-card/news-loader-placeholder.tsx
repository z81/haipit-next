import ContentLoader from 'react-content-loader';
import React from 'react';
import styled from 'styled-components';
import { Card } from 'components/card/card';

export const NewsLoaderPlaceholderStyled = styled.div`
  width: 640px;
`;

export const NewsLoaderPlaceholder = () => (
  <Card>
    <NewsLoaderPlaceholderStyled>
      <ContentLoader
        height={160}
        width={400}
        speed={2}
        primaryColor="#7e7b7e"
        secondaryColor="#a8a8b0"
      >
        <rect x="7" y="10" rx="4" ry="4" width="61" height="8" />
        <rect x="91" y="10" rx="4" ry="4" width="53" height="8" />
        <rect x="7" y="27" rx="4" ry="4" width="380" height="13" />
        <rect x="164" y="10" rx="4" ry="4" width="60" height="8" />
        {[1, 2, 3, 4, 5, 6, 7].map(i => (
          <rect x="9" y={35 + i * 15} rx="4" ry="4" width="380" height="6" key={i} />
        ))}
      </ContentLoader>
    </NewsLoaderPlaceholderStyled>
  </Card>
);

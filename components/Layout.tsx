import React, { ReactNode } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

type LayoutProps = {
  children?: ReactNode,
  title?: string,
};
const Container = styled.div`
  width: 300px;
  margin: 0 auto;
`;

const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'This is the default title',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Container>{children}</Container>
  </div>
);

export default Layout;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';

import Head from '@docusaurus/Head';
import { useTitleFormatter } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import DocPaginator from '@theme/DocPaginator';
import type { Props } from '@theme/DocItem';
import TOC from '@theme/TOC';
import { useBreakpoint } from '../../hooks/use-breakpoint';

import './styles.scss';

function DocItem(props: Props): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const { url: siteUrl } = siteConfig;
  const { content: DocContent } = props;
  const {
    metadata,
    frontMatter: {
      image: metaImage,
      keywords,
      hide_title: hideTitle,
      hide_table_of_contents: hideTableOfContents,
    },
  } = DocContent;
  const {
    description,
    title,
    permalink,
  } = metadata;
  const isWindowLg = useBreakpoint('lg');
  const metaTitle = useTitleFormatter(title);
  const metaImageUrl = useBaseUrl(metaImage, { absolute: true });
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta property="og:title" content={metaTitle} />
        {description && <meta name="description" content={description} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
        {keywords && keywords.length && (
          <meta name="keywords" content={keywords.join(',')} />
        )}
        {metaImage && <meta property="og:image" content={metaImageUrl} />}
        {metaImage && <meta name="twitter:image" content={metaImageUrl} />}
        {metaImage && (
          <meta name="twitter:image:alt" content={`Image for ${title}`} />
        )}
        {permalink && <meta property="og:url" content={siteUrl + permalink} />}
        {permalink && <link rel="canonical" href={siteUrl + permalink} />}
      </Head>
      <main className="lg:col-span-7 col-span-12 mb-22">
        <article>
          {!hideTitle && (
            <header><h1 className="mt-8 mb-4 text-32 leading-48 text-monochrome-default">{title}</h1></header>
          )}
          <div className="markdown">
            <DocContent />
          </div>
        </article>
      </main>
      {!hideTableOfContents && DocContent.toc && isWindowLg && (
        <div className="col-span-2">
          <TOC toc={DocContent.toc} />
        </div>
      )}
    </>
  );
}0;

export default DocItem;

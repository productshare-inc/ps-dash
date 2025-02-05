'use client';
import { BuilderContent, isPreviewing, Content } from '@builder.io/sdk-react';
import DefaultErrorPage from 'next/error';
import { CUSTOM_COMPONENTS } from '../builder-registry';

interface BuilderPageProps {
  content: BuilderContent | null;
  model: string;
}

// Builder Public API Key set in .env file
const builderApiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY!;

export function RenderBuilderContent({ content, model }: BuilderPageProps) {
  // Call the isPreviewing hook to determine if
  // the page is being previewed in Builder
  // If "content" has a value or the page is being previewed in Builder,
  // render the BuilderComponent with the specified content and model props.
  if (content || isPreviewing()) {
    return (
      <Content
        content={content}
        apiKey={builderApiKey}
        model={model}
        customComponents={CUSTOM_COMPONENTS}
      />
    );
  }
  // If the "content" is falsy and the page is
  // not being previewed in Builder, render the
  // DefaultErrorPage with a 404.
  return <DefaultErrorPage statusCode={404} />;
}

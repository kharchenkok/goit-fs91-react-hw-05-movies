export const RenderContent = unsafeHtml => {
  return <div dangerouslySetInnerHTML={{ __html: unsafeHtml }} />;
};

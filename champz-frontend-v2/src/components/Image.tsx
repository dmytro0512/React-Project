export const Image = ({
  url,
  alt,
  width,
  height,
}: {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}) => {
  return <img src={url} alt={alt} width={width} height={height} />;
};

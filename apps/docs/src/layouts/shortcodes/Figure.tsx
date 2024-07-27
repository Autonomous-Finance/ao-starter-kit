import React from "react";

const Figure = ({
  image,
  caption,
  alt,
}: {
  image: string;
  caption: string;
  alt: string;
}) => {
  return (
    <figure>
      <img src={image} alt={alt} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
};

export default Figure;

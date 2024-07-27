import React, { useCallback, useState } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Images = ({ image }: { image: string }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomChange = useCallback(
    (shouldZoom: boolean | ((prevState: boolean) => boolean)) => {
      setIsZoomed(shouldZoom);
    },
    [],
  );

  return (
    <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
      <img
        alt="That wanaka tree, alone in the water near mountains"
        src={image}
        className="cursor-pointer rounded-lg"
        width="640"
      />
    </ControlledZoom>
  );
};

export default Images;

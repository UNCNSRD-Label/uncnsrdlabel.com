// import type { ImageProps } from 'next/image'

// import { useState } from 'react'

export const useImageLoadCallback = () => {
    // const [hasLoaded, setHasLoaded] = useState<boolean>(false)

    return {
    //   className,
      onLoadingComplete: (target: HTMLImageElement) => {
        target.dataset.loaded="true"
        // setHasLoaded(true)
      },
    };
  };
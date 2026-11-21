import { useCallback, useState } from 'react';
import { PhotoViewer } from '../components/PhotoViewer';

/** Returns [open(index), viewerElement] for a list of photos. */
export function usePhotoViewer(photos) {
  const [index, setIndex] = useState(null);
  const move = useCallback(
    (step) => setIndex((i) => (i + step + photos.length) % photos.length),
    [photos.length]
  );
  const viewer =
    index === null ? null : <PhotoViewer photos={photos} index={index} onClose={() => setIndex(null)} onMove={move} />;
  return [setIndex, viewer];
}

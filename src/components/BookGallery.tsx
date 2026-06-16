import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect } from "react";

type BookGalleryProps = {
  photos: string[];
};

export default function BookGallery({ photos }: BookGalleryProps) {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  const [viewerRef, viewerApi] = useEmblaCarousel({
    align: "start",
  });

  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    if (selectedPhoto !== null && viewerApi) {
      viewerApi.scrollTo(selectedPhoto);
    }
  }, [selectedPhoto, viewerApi]);

  useEffect(() => {
    if (!viewerApi) return;

    const onSelect = () => {
      setCurrentPhoto(viewerApi.selectedScrollSnap());
    };

    viewerApi.on("select", onSelect);

    onSelect();

    return () => {
      viewerApi.off("select", onSelect);
    };
  }, [viewerApi]);

  return (
    <>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {photos.map((photo, index) => (
            <div key={index} className="min-w-full md:min-w-[16.6667%] px-2">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <img
                  src={photo}
                  alt=""
                  className="h-70 w-full object-cover cursor-pointer transition duration-300 hover:scale-105"
                  draggable={false}
                  onClick={() => setSelectedPhoto(index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 z-999 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute right-6 top-6 z-1000 text-4xl text-white transition hover:scale-110"
          >
            ✕
          </button>
          <div className="absolute left-1/2 top-6 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-white">
            {currentPhoto + 1} / {photos.length}
          </div>
          <div ref={viewerRef} className="overflow-hidden w-full max-w-[95vw]">
            <div className="flex">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] flex justify-center items-center"
                >
                  <img
                    src={photo}
                    alt=""
                    className="max-h-[90vh] max-w-[90vw] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

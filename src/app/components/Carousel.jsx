'use client';
import useEmblaCarousel from "embla-carousel-react";
import Dots from "./Dots";
import { Children, useEffect, useState } from "react";
import CarouselControls from "./CarouselControls";


const Carousel = ({ children, ...options }) => {
    // 1. useEmblaCarousel returns a emblaRef and we must attach the ref to a container.
    // EmblaCarousel will use that ref as basis for swipe and other functionality.
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const length = Children.count(children);
    const canScrollNext = !!emblaApi?.canScrollNext();
    const canScrollPrev = !!emblaApi?.canScrollPrev();

    // 6. We can use the emblaRef to get the current scroll progress and use that to update the selectedIndex.
    // This will allow us to highlight the correct dot.
    useEffect(() => {
        function selectHandler() {
            const index = emblaApi?.selectedScrollSnap();
            setSelectedIndex(index || 0);
        }

        emblaApi?.on("select", selectHandler);

        return () => {
            emblaApi?.off("select", selectHandler);
        }
    }, [emblaApi]);

    return (
        // Attach ref to a div
        // 2. The wrapper div must have overflow:hidden
        <div className="overflow-hidden" ref={emblaRef}>
            {/* 3. The inner div must have a display:flex property */}
            {/* 4. We pass the children as-is so that the outside component can style it accordingly */}
            <div className="flex">{children}</div>
            <Dots itemsLength={length} selectedIndex={selectedIndex} />
            <CarouselControls
                canScrollNext={canScrollNext}
                canScrollPrev={canScrollPrev}
                onNext={() => emblaApi?.scrollNext()}
                onPrev={() => emblaApi?.scrollPrev()}
            />
        </div>
    );
};
export default Carousel;
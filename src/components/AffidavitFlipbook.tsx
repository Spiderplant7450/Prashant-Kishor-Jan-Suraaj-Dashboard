import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// NOTE: react-pageflip works best with image files for pages.
// To use this, convert your PDF pages into images (e.g., page1.jpg, page2.jpg)
// and place them in the public/ folder.
const pages = Array.from({ length: 21 }, (_, i) => ({
  id: i + 1,
  src: `/Affidavit-1784401521_page-${String(i + 1).padStart(4, '0')}.jpg`,
}));

const Page = React.forwardRef<HTMLDivElement, { children: React.ReactNode; className?: string }>(
  (props, ref) => {
    return (
      <div className={`demoPage ${props.className || ''}`} ref={ref}>
        <div className="h-full bg-white border border-gray-200">
          {props.children}
        </div>
      </div>
    );
  }
);

export default function AffidavitFlipbook() {
  const flipBook = useRef<any>(null);

  const prevPage = () => {
    flipBook.current.pageFlip().flipPrev();
  };

  const nextPage = () => {
    flipBook.current.pageFlip().flipNext();
  };

  return (
    <section className="py-16 bg-[#F8F9FA] border-b-4 border-party-green" id="affidavit-flipbook">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black text-brand-navy mb-12 uppercase tracking-tighter text-center">
          Verified Affidavit <span className="text-saffron">Flipbook</span>
        </h2>
        
        {/* PDF Placement Instructions */}
        <div className="mb-8 p-4 bg-white border border-saffron/30 rounded text-center">
          <p className="text-sm text-brand-navy">
            Browse the official election affidavit flipbook below.
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-6">
          <HTMLFlipBook
            width={400}
            height={500}
            size="fixed"
            minWidth={300}
            maxWidth={400}
            minHeight={400}
            maxHeight={500}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            ref={flipBook}
          >
            {pages.map((page) => (
              <Page key={page.id}>
                <img src={page.src} alt={`Affidavit Page ${page.id}`} className="w-full h-full object-contain" />
              </Page>
            ))}
          </HTMLFlipBook>

          <div className="flex gap-4">
            <button 
              onClick={prevPage}
              className="flex items-center gap-2 px-6 py-3 bg-brand-navy text-white font-black uppercase tracking-wider hover:bg-opacity-90 transition-all border-2 border-brand-navy cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" /> Previous
            </button>
            <button 
              onClick={nextPage}
              className="flex items-center gap-2 px-6 py-3 bg-saffron text-white font-black uppercase tracking-wider hover:bg-saffron-dark transition-all border-2 border-saffron cursor-pointer"
            >
              Next <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

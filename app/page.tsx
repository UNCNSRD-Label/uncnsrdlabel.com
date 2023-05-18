import { ThreeItemGrid } from 'components/grid/three-items';
import { HorizontalScroll } from 'components/horizontal-scroll';
import Footer from 'components/layout/footer';
import { Video, type VideoProps } from 'components/video';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description:
    'UNCNSRD is multifunctional swimwear for female figures who aren’t afraid to show off their assets and want to feel unapologetically sexy.',
  openGraph: {
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(process.env.SITE_NAME || '')}`,
        width: 1200,
        height: 630
      }
    ],
    type: 'website'
  }
};

const video: VideoProps = {
  autoPlay: true,
  alt: 'Campaign video',
  loop: true,
  playsinline: true,
  poster: '/videos/placeholder.jpeg',
  // title: 'Video title',
  url: '/videos/placeholder.mp4'
};

export default async function HomePage() {
  return (
    <>
      <Video {...video} />
      {/* @ts-expect-error Server Component */}
      <HorizontalScroll />
      <ThreeItemGrid />
      <Suspense>
        <Suspense>
          {/* @ts-expect-error Server Component */}
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}

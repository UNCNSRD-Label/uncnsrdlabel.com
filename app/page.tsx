import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
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
  alt: 'aaa',
  title: 'bbb',
  url: 'https://test-videos.co.uk/vids/jellyfish/mp4/h264/1080/Jellyfish_1080_10s_30MB.mp4'
};

export default async function HomePage() {
  return (
    <>
      <Video
        {...video}
        autoPlay
        // fallback={
        //   <Image
        //     alt={video.alt}
        //     className="h-full object-contain"
        //     fill
        //     sizes="33vw"
        //     src="https://i.ytimg.com/vi/M4V_61_kUbs/maxresdefault.jpg"
        //     title={video.title}
        //   />
        // }
        // fallback={<span>Cannot play video</span>}
        loop
        playsinline
        // poster="https://i.ytimg.com/vi/M4V_61_kUbs/maxresdefault.jpg"
      />
      {/* @ts-expect-error Server Component */}
      <ThreeItemGrid />
      <Suspense>
        {/* @ts-expect-error Server Component */}
        <Carousel />
        <Suspense>
          {/* @ts-expect-error Server Component */}
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}

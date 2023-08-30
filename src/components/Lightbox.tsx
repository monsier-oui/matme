import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'
import { useEffect } from 'react'

import type { Work } from '@/libs/works'

const Lightbox = ({
  images,
  galleryID = 'gallery',
  containerMaxWidth,
}: {
  images: Work['images']
  galleryID?: string
  containerMaxWidth?: string | number
}) => {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
      loop: false,
    })
    lightbox.init()

    return () => {
      lightbox.destroy()
      lightbox = null
    }
  }, [])

  return (
    <ul id="gallery" className="flex flex-col gap-2 md:gap-4">
      {images &&
        images.map(({ url, height, width }, i) => (
          <li key={i}>
            <a
              href={url}
              data-pswp-width={width}
              data-pswp-height={height}
              target="_blank"
              rel="noreferrer">
              <img
                src={`${url}?w=${parseInt(containerMaxWidth)}`}
                width={width}
                height={height}
                alt=""
                className="mx-auto"
                loading="lazy"
              />
            </a>
          </li>
        ))}
    </ul>
  )
}

export default Lightbox

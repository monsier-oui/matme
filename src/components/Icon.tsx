import clsx from 'clsx'
import { FaExternalLinkAlt } from 'react-icons/fa/index'
import {
  SiGithub,
  SiNiconico,
  SiPatreon,
  SiRakuten,
  SiTwitter,
} from 'react-icons/si/index.js'

type Props = {
  className?: string
  style?: React.CSSProperties
}

const GitHub = ({ className, ...props }: Props) => {
  return (
    <SiGithub color="#ffffff" className={setClassName(className)} {...props} />
  )
}

const Instagram = (props?: Props) => {
  return <LogoImage name="icon_instagram.png" {...props} />
}

const Mastodon = (props?: Props) => {
  return <LogoImage name="icon_mastodon.svg" {...props} />
}

const Misskey = (props?: Props) => {
  return <LogoImage name="icon_misskey.png" {...props} />
}

const Nicovideo = ({ className, ...props }: Props) => {
  return (
    <SiNiconico
      color="#ffffff"
      className={setClassName(className)}
      {...props}
    />
  )
}

const Patreon = ({ className, ...props }: Props) => {
  return (
    <SiPatreon color="#ff424d" className={setClassName(className)} {...props} />
  )
}

const Pixiv = (props?: Props) => {
  return <LogoImage name="icon_pixiv.png" {...props} />
}

const Rakuten = ({ className, ...props }: Props) => {
  return (
    <SiRakuten color="#bf0000" className={setClassName(className)} {...props} />
  )
}

const Skeb = (props?: Props) => {
  return <LogoImage name="icon_skeb.svg" {...props} />
}

const Twitter = ({ className, ...props }: Props) => {
  return (
    <SiTwitter color="#1d9bf0" className={setClassName(className)} {...props} />
  )
}

const Wavebox = (props?: Props) => {
  return <LogoImage name="icon_wavebox.png" {...props} />
}

const YouTube = (props?: Props) => {
  return <LogoImage name="icon_youtube.svg" {...props} />
}

const LogoImage = ({ name, className, style }?: Props & { name: string }) => {
  if (!name) {
    throw new Error('ロゴ名を指定してください')
  }

  return (
    <img
      src={`/${name}`}
      alt=""
      className={clsx('aspect-square object-contain', className)}
      style={style}
    />
  )
}

const setClassName = (className: string) => {
  return clsx(
    /(^|\s)h-/.test(className) && 'w-auto',
    'aspect-square',
    className
  )
}

export const Logo = ({ url, ...props }?: { url: string } & LogoProps) => {
  if (!url) {
    throw new Error('URLまたはロゴ名を指定してください')
  }

  if (/github/.test(url)) {
    return <GitHub {...props} />
  } else if (/instagram/.test(url)) {
    return <Instagram {...props} />
  } else if (
    /(mastodon|mstdn\.jp|pawoo\.net|fedibird\.com|donshare\.net)/.test(url)
  ) {
    return <Mastodon {...props} />
  } else if (/(misskey|nijimiss\.moe|sushi\.ski|trpger\.us)/.test(url)) {
    return <Misskey {...props} />
  } else if (/nicovideo/.test(url)) {
    return <Nicovideo {...props} />
  } else if (/patreon/.test(url)) {
    return <Patreon {...props} />
  } else if (/pixiv/.test(url)) {
    return <Pixiv {...props} />
  } else if (/rakuten/.test(url)) {
    return <Rakuten {...props} />
  } else if (/skeb/.test(url)) {
    return <Skeb {...props} />
  } else if (/twitter/.test(url)) {
    return <Twitter {...props} />
  } else if (/wavebox/.test(url)) {
    return <Wavebox {...props} />
  } else if (/youtube/.test(url)) {
    return <YouTube {...props} />
  } else {
    return (
      <FaExternalLinkAlt
        className={setClassName(props.className)}
        style={props.style}
      />
    )
  }
}

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
  name: string
  className?: string
  style?: React.CSSProperties
}

type LogoProps = Omot<Props, name>

export const LogoGitHub = ({ className, props }: LogoProps) => {
  return (
    <SiGithub color="#ffffff" className={setClassName(className)} {...props} />
  )
}

export const LogoInstagram = (props?: LogoProps) => {
  return <LogoImage name="icon_instagram.png" {...props} />
}

export const LogoMastodon = (props?: LogoProps) => {
  return <LogoImage name="icon_mastodon.svg" {...props} />
}

export const LogoMisskey = (props?: LogoProps) => {
  return <LogoImage name="icon_misskey.png" {...props} />
}

export const LogoNicovideo = ({ className, props }: LogoProps) => {
  return (
    <SiNiconico
      color="#ffffff"
      className={setClassName(className)}
      {...props}
    />
  )
}

export const LogoPatreon = ({ className, props }: LogoProps) => {
  return (
    <SiPatreon color="#ff424d" className={setClassName(className)} {...props} />
  )
}

export const LogoPixiv = (props?: LogoProps) => {
  return <LogoImage name="icon_pixiv.png" {...props} />
}

export const LogoRakuten = ({ className, props }: LogoProps) => {
  return (
    <SiRakuten color="#bf0000" className={setClassName(className)} {...props} />
  )
}

export const LogoSkeb = (props?: LogoProps) => {
  return <LogoImage name="icon_skeb.svg" {...props} />
}

export const LogoTwitter = ({ className, props }: LogoProps) => {
  return (
    <SiTwitter color="#1d9bf0" className={setClassName(className)} {...props} />
  )
}

export const LogoWavebox = (props?: LogoProps) => {
  return <LogoImage name="icon_wavebox.png" {...props} />
}

export const LogoYouTube = (props?: LogoProps) => {
  return <LogoImage name="icon_youtube.svg" {...props} />
}

const LogoImage = ({ name, ...props }?: Props) => {
  if (!name) {
    throw new Error('ロゴ名を指定してください')
  }

  return (
    <img
      src={`/${name}`}
      alt=""
      className={clsx('aspect-square object-contain', props?.className)}
      style={props?.style}
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
    return <LogoGitHub {...props} />
  } else if (/instagram/.test(url)) {
    return <LogoInstagram {...props} />
  } else if (
    /(mastodon|mstdn\.jp|pawoo\.net|fedibird\.com|donshare\.net)/.test(url)
  ) {
    return <LogoMastodon {...props} />
  } else if (/(misskey|nijimiss\.moe|sushi\.ski|trpger\.us)/.test(url)) {
    return <LogoMisskey {...props} />
  } else if (/nicovideo/.test(url)) {
    return <LogoNicovideo {...props} />
  } else if (/patreon/.test(url)) {
    return <LogoPatreon {...props} />
  } else if (/pixiv/.test(url)) {
    return <LogoPixiv {...props} />
  } else if (/rakuten/.test(url)) {
    return <LogoRakuten {...props} />
  } else if (/skeb/.test(url)) {
    return <LogoSkeb {...props} />
  } else if (/twitter/.test(url)) {
    return <LogoTwitter {...props} />
  } else if (/wavebox/.test(url)) {
    return <LogoWavebox {...props} />
  } else if (/youtube/.test(url)) {
    return <LogoYouTube {...props} />
  } else {
    return (
      <FaExternalLinkAlt
        className={setClassName(props.className)}
        style={props.style}
      />
    )
  }
}

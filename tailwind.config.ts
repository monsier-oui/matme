import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: '0.5rem',
    },
    screens: {
      sm: defaultTheme.screens.sm,
      md: defaultTheme.screens.md,
      lg: defaultTheme.screens.lg,
    },
    extend: {
      colors: {
        primary: {
          ...colors.sky,
          DEFAULT: colors.sky[500],
        },
        body: {
          base: colors.white,
          text: colors.black,
        },
      },
      typography: ({ theme }: { theme: Config['theme'] }) => ({
        DEFAULT: {
          css: {
            'max-width': 'none',
            'overflow-wrap': 'break-word',
            '--tw-prose-links': theme('colors.primary.DEFAULT'),
          },
        },
      }),
    },
  },
  plugins: [typography],
}
export default config

import presetAttributify from '@unocss/preset-attributify'
import transformerDirectives from '@unocss/transformer-directives'
import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetWind3,
  transformerVariantGroup,
} from 'unocss'
import presetTheme from 'unocss-preset-theme'
import { themeConfig } from './src/.config'
import { getSocialIconClass } from './src/utils/socialIcons'

const { colorsDark, colorsLight, fonts } = themeConfig.appearance

const cssExtend = {
  ':root': {
    '--prose-borders': 'var(--un-preset-theme-colors-rule, #e2d6c4)',
  },

  'h1,h2,h3,h4': {
    'font-family': fonts.header,
    'letter-spacing': '0.02em',
    'font-weight': '700',
  },

  'a': {
    'color': 'inherit',
    'text-decoration-color': 'color-mix(in srgb, var(--un-preset-theme-colors-accent, #9c3b2d) 55%, transparent)',
    'text-underline-offset': '0.22em',
  },

  'blockquote': {
    'border-left-color': 'var(--un-preset-theme-colors-accent, #9c3b2d)',
    'font-style': 'normal',
    'color': 'var(--un-preset-theme-colors-muted, #7a7268)',
  },

  'code::before,code::after': {
    content: 'none',
  },

  ':where(:not(pre):not(a) > code)': {
    'white-space': 'normal',
    'word-wrap': 'break-word',
    'padding': '0.1em 0.35em',
    'font-size': '0.9em',
    'background-color': 'color-mix(in srgb, var(--un-preset-theme-colors-rule, #e2d6c4) 70%, transparent)',
    'border-radius': '0.25rem',
  },

  'li': {
    'white-space': 'normal',
    'word-wrap': 'break-word',
  },
}

export default defineConfig({
  presets: [
    presetWind3(),
    presetTypography({ cssExtend }),
    presetAttributify(),
    presetIcons({ scale: 1.15, warn: true }),
    presetTheme({
      theme: {
        dark: {
          colors: { ...colorsDark, shadow: '#00000000' },
        },
      },
    }),
  ],
  theme: {
    colors: { ...colorsLight, shadow: '#00000000' },
    fontFamily: fonts,
  },
  shortcuts: [
    ['page-wrap', 'mx-auto w-full max-w-[42rem] px-6'],
    ['post-title', 'm-0 font-header text-2xl font-bold leading-snug tracking-wide'],
    ['meta-text', 'text-sm text-muted'],
    ['placeholder-note', 'border border-dashed border-rule rounded-md px-4 py-3 text-sm text-muted'],
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: [
    ...themeConfig.site.socialLinks.map(social => getSocialIconClass(social.name)),
    'i-mdi-content-copy',
    'i-mdi-check',
  ],
})

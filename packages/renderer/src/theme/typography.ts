import { TypographyVariantsOptions } from '@mui/material'
import { pxToRem } from '../utils/getFontValue'

const PRIMARY_FONT = 'Inter, sans-serif'

export const typography: TypographyVariantsOptions = {
  fontFamily: PRIMARY_FONT,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: pxToRem(80),
    lineHeight: 1.05,
    fontWeight: 600,
  },
  h2: {
    fontSize: pxToRem(60),
    lineHeight: 1,
    fontWeight: 600,
  },
  h3: {
    fontSize: pxToRem(48),
    lineHeight: 1.3,
    fontWeight: 600,
  },
  h4: {
    fontSize: pxToRem(34),
    lineHeight: 1.18,
    fontWeight: 600,
  },
  h5: {
    fontSize: pxToRem(24),
    lineHeight: 1.3,
    fontWeight: 600,
  },
  h6: {
    fontSize: pxToRem(20),
    lineHeight: 1.2,
    fontWeight: 600,
  },
  subtitle1: {
    fontSize: pxToRem(16),
    lineHeight: 1.5,
    fontWeight: 600,
  },
  subtitle2: {
    fontSize: pxToRem(14),
    lineHeight: 1.4,
    fontWeight: 600,
  },
  body1: {
    fontSize: pxToRem(16),
    lineHeight: 1.5,
    fontWeight: 600,
  },
  body2: {
    fontSize: pxToRem(14),
    lineHeight: 1.4,
    fontWeight: 400,
  },
  button: {
    fontSize: pxToRem(14),
    lineHeight: 1.5,
    fontWeight: 600,
  },
  caption: {
    fontSize: pxToRem(12),
    lineHeight: 1.4,
    fontWeight: 600,
  },
  overline: {
    fontSize: pxToRem(10),
    lineHeight: 1.4,
    fontWeight: 600,
  },
}



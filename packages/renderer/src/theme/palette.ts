import { PaletteOptions } from '@mui/material';

export const palette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: '#2672ED',
    dark: '#143466',
    light: '#66A1FF',
  },
  secondary: {
    main: '#475366',
    dark: '#2D3440',
    light: '#6B7D99',
  },
  error: {
    main: '#CC525F'
  },
  warning: {
    main: '#FFAB00'
  },
  info: {
    main: '#16E8F7',
  },
  success: {
    main: '#36B37E'
  },
  grey: {
    300: '#282F39',
    400: '#1E232A',
    500: '#13161B',
    600: '#0F1115',
  },

  text: {
    primary: 'rgba(245, 249, 255, 0.95)',
    secondary: 'rgba(224, 236, 255, 0.8)',
    disabled: 'rgba(195, 208, 229, 0.5)',
  },
  background: {
    default: '#0B0D0F',
    paper: '#0B0D0F',
  },
}
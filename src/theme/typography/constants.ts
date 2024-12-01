import { StyledObject } from 'styled-components';

export const MOBILE_TYPOGRAPHY: Record<string, StyledObject> = {
  h1Bold: {
    fontWeight: 700,
    fontSize: 56,
    lineHeight: '72px',
    letterSpacing: '-2%',
  },
  h2Bold: {
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 24,
  },
  body1Regular: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '19px',
  },
  body2Regular: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '20px',
  },
  caption1Regular: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '18px',
  },
} as const;

export const DESKTOP_TYPOGRAPHY: Record<string, StyledObject> = {
  h1Bold: {
    fontWeight: 700,
    fontSize: 200,
    lineHeight: '160px',
    letterSpacing: '-2%',
  },
  h2Bold: {
    fontWeight: 700,
    fontSize: 56,
    lineHeight: '67px',
  },
  body1Regular: {
    fontWeight: 400,
    fontSize: 25,
    lineHeight: '30px',
  },
  body2Regular: {
    fontWeight: 400,
    fontSize: 20,
    lineHeight: '30px',
  },
  body2Bold: {
    fontWeight: 700,
    fontSize: 20,
    lineHeight: '30px',
  },
  caption1Regular: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '18px',
  },
} as const;

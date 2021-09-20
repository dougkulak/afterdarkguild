import {useTheme} from '@mui/material/styles';
import {useMediaQuery} from '@mui/material';
import {classColors} from './config/config';
import {wowItemColors} from './theme';

export const useWidth = () => {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || 'xs'
  );
};

export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize('NFD') // separate accent from letter
    .replace(/[\u0300-\u036f]/g, '') // remove all separated accents
    .replace(/\s+/g, '-') // replace spaces with -
    .replace(/&/g, '-and-') // replace & with 'and'
    .replace(/[^\w-]+/g, '') // remove all non-word chars
    .replace(/--+/g, '-'); // replace multiple '-' with single '-'
};

export const getPositionOfOccurrence = (string, subString, index) => {
  const len = string.split(subString, index).join(subString).length;
  if (len === string.length) return -1;
  return len;
};

export const colorTextByClass = (text, playerClass) => {
  const key = playerClass.toUpperCase();
  return <span style={{color: classColors[key]}}>{text}</span>;
};

export const normalize = (value, max) => ((value - 0) * 100) / (max - 0);

export const getColorForScore = (score) => {
  let color = wowItemColors.common;
  if (score >= 30) color = wowItemColors.uncommon;
  if (score >= 50) color = wowItemColors.rare;
  if (score >= 75) color = wowItemColors.epic;
  if (score >= 95) color = wowItemColors.legendary;
  if (score === 99) color = wowItemColors.astounding;
  if (score === 100) color = wowItemColors.artifact;

  return color;
};

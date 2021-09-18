import {useTheme} from '@mui/material/styles';
import {useMediaQuery} from '@mui/material';
import {classColors} from './config/config';

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

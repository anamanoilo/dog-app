import { Typography } from '@mui/material';
import { FC } from 'react';

type SectionTitleProps = {
  title: string;
};

export const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
  const splitString = title.split(' ');
  const lastWord = splitString.pop();
  const remainingString = splitString.join(' ');
  return (
    <Typography fontSize={35} textAlign="center">
      {remainingString}{' '}
      <Typography component="span" fontSize="inherit" fontWeight={700}>
        {lastWord}
      </Typography>
    </Typography>
  );
};

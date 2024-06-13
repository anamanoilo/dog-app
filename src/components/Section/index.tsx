import { Box, Container } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

export const Section: FC<PropsWithChildren> = ({ children }) => (
  <Box component="section" pb={12}>
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'center',
          gap: 4
        }}
      >
        {children}
      </Box>
    </Container>
  </Box>
);

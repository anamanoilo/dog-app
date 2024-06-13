import { FC } from 'react';
import { Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { ProductItemCard } from '../ProductItemCard';
import { SectionTitle } from '../SectionTitle';
import { HOST_URL } from '../../constants';
import { TextButton } from '../Button';
import { ProductItem } from '../../types';

type ProductSectionProps = {
  products?: ProductItem[];
  sectionTitleText: string;
};

export const ProductSection: FC<ProductSectionProps> = ({
  products,
  sectionTitleText
}) => (
  <Box component="section" mb={12}>
    <Container>
      <SectionTitle title={sectionTitleText} />

      <Box
        component="ul"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        flexWrap="wrap"
        p={2}
      >
        {products &&
          products
            .slice(0, 4)
            .map(({ id, name, unitPrice, url }) => (
              <ProductItemCard
                id={id}
                name={name}
                unitPrice={unitPrice}
                url={`${HOST_URL}${url}`}
                key={id}
              />
            ))}
      </Box>

      <Link to="shop">
        <TextButton>SEE ALL PRODUCT</TextButton>
      </Link>
    </Container>
  </Box>
);

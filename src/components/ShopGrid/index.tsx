// import {
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Box,
//   Button
// } from '@mui/material';
// import { HOST_URL } from '../../constants';

// const CardItem = ({ image, title, price }) => (
//   <Card sx={{ position: 'relative', height: '100%' }}>
//     <CardMedia
//       component="img"
//       height="100%"
//       image={`${HOST_URL}${image}`}
//       alt={title}
//     />
//     <CardContent
//       sx={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         background: 'rgba(255, 255, 255, 0.8)'
//       }}
//     >
//       <Typography variant="body2" color="textSecondary" component="p">
//         Dresses
//       </Typography>
//       <Typography gutterBottom variant="h5" component="h2">
//         {title}
//       </Typography>
//       <Typography variant="h6" color="textPrimary">
//         ${price}
//       </Typography>
//       <Box mt={2} display="flex" justifyContent="center">
//         <Button
//           variant="outlined"
//           sx={{ padding: '8px 16px', borderColor: 'black', color: 'black' }}
//         >
//           ADD TO CART
//         </Button>
//       </Box>
//     </CardContent>
//   </Card>
// );

// const CustomGridLayout = () => {
//   const cards = [
//     {
//       image: '/path/to/image1.jpg',
//       title: 'Cropped Faux Leather Jacket',
//       price: 62
//     },
//     { image: '/path/to/image2.jpg', title: 'Item 2', price: 45 },
//     { image: '/path/to/image3.jpg', title: 'Item 3', price: 50 },
//     { image: '/path/to/image4.jpg', title: 'Item 4', price: 55 }
//     // Add more cards as needed
//   ];

//   return (
//     <Grid container spacing={1} sx={{ width: '1410px', height: '1870px' }}>
//       <Grid item xs={12} sm={6} md={6} sx={{ height: '50%' }}>
//         <CardItem
//           image={cards[0].image}
//           title={cards[0].title}
//           price={cards[0].price}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6} md={3} sx={{ height: '25%' }}>
//         <CardItem
//           image={cards[1].image}
//           title={cards[1].title}
//           price={cards[1].price}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6} md={3} sx={{ height: '25%' }}>
//         <CardItem
//           image={cards[2].image}
//           title={cards[2].title}
//           price={cards[2].price}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6} md={3} sx={{ height: '25%' }}>
//         <CardItem
//           image={cards[3].image}
//           title={cards[3].title}
//           price={cards[3].price}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6} md={3} sx={{ height: '25%' }}>
//         <CardItem
//           image={cards[0].image}
//           title={cards[0].title}
//           price={cards[0].price}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6} md={6} sx={{ height: '25%' }}>
//         <CardItem
//           image={cards[1].image}
//           title={cards[1].title}
//           price={cards[1].price}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6} md={3} sx={{ height: '25%' }}>
//         <CardItem
//           image={cards[2].image}
//           title={cards[2].title}
//           price={cards[2].price}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6} md={3} sx={{ height: '25%' }}>
//         <CardItem
//           image={cards[3].image}
//           title={cards[3].title}
//           price={cards[3].price}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6} md={3} sx={{ height: '25%' }}>
//         <CardItem
//           image={cards[0].image}
//           title={cards[0].title}
//           price={cards[0].price}
//         />
//       </Grid>
//       <Grid item xs={12} sm={6} md={3} sx={{ height: '25%' }}>
//         <CardItem
//           image={cards[1].image}
//           title={cards[1].title}
//           price={cards[1].price}
//         />
//       </Grid>
//     </Grid>
//   );
// };

// export default CustomGridLayout;

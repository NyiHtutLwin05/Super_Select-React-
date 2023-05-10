import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem } from '@mantine/core';
import {MdArrowBackIosNew} from 'react-icons/md'
import {GrNext} from 'react-icons/gr';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { useNavigate } from 'react-router';

 export const data = [
  {
    image:'https://zxtodmdglvcilqtuxipr.supabase.co/storage/v1/object/public/SS_Image/Whole_Building/WH2.webp',
    title: 'Aluminium Partition',
    category: 'Best',
  },
  {
    image:'https://zxtodmdglvcilqtuxipr.supabase.co/storage/v1/object/public/SS_Image/Whole_Building/WH3.webp',
    title: 'Glass Partition',
    category: 'Our Project',
  },
  {
    image:'https://zxtodmdglvcilqtuxipr.supabase.co/storage/v1/object/public/SS_Image/Whole_Building/WH5.webp',
    title: 'Handrail',
    category: 'nature',
  },
  {
    image:'https://zxtodmdglvcilqtuxipr.supabase.co/storage/v1/object/public/SS_Image/Whole_Building/WH6.webp',
    title: 'Glass Show Case',
    category: 'nature',
  },
  {
    image:'https://zxtodmdglvcilqtuxipr.supabase.co/storage/v1/object/public/SS_Image/Whole_Building/WH9.webp',
    title: 'Bathroom Door',
    category: 'Best',
  }
];
const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.8,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  
}));



function Card({ image, title, category }) {
  const { classes } = useStyles();
  const navigateGalley = useNavigate();
  const handleGalley =()=>{
      navigateGalley('/gallery')
  }
  return (
    <>
   
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div className=' overflow-hidden '>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={1}  className={`${classes.title} font-monument`}>
          {
            title
          }
        </Title>
      </div>
      <Button variant="white" color="white" className=' bg-stone-50 hover:text-primiray-text' onClick={handleGalley}>
        Explore 
        
      </Button>
  
    </Paper>
    </>
  );
}



function Demo() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));
  const autoplay = useRef(Autoplay({ delay: 3000 }));
 
  return (
    <>
      {/* <GalleryTest/> */}
     <div className=' flex justify-center'>
    <Carousel
     withIndicators
      slideSize="50%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
      slideGap="lg"
      align="start"
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      slidesToScroll={mobile ? 1 : 2}
      className=' mt-10 mb-10 w-[90%]'
      previousControlIcon={<MdArrowBackIosNew size={16} color='white' />}
      nextControlIcon={<GrNext size={19} color='white' />}
     
      styles={{
        control:{
          width:'2.5rem',
          height:'2.5rem',
          color:'blue',
          border:'none',
          background: 'black',
               
        }}
      }
    >
      {slides}
   
    </Carousel>
    
    </div>
    
    {/* <Footer/> */}
  
    </>
  );
}
export default Demo;
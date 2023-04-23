import { createStyles, ThemeIcon, Text, SimpleGrid, Box, Stack, Space } from '@mantine/core';
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';
import {BiPhone} from 'react-icons/bi'
import {AiOutlineMail} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
// type ContactIconVariant = 'white' | 'gradient';

// interface ContactIconStyles {
//   variant: ContactIconVariant;
// }

const useStyles = createStyles((theme, { variant }) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    color: theme.white,
  },

  icon: {
    marginRight: theme.spacing.md,
    // backgroundImage:
    //   variant === 'gradient'
    //     ? `linear-gradient(135deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
    //         theme.colors[theme.primaryColor][6]
    //       } 100%)`
    //     : 'none',
    background:'white',
    color:'black'
  },

  title: {
    color: variant === 'gradient' ? theme.colors.gray[6] : theme.colors[theme.primaryColor][0],
  },

  description: {
    color: variant === 'gradient' ? theme.black : theme.white,
  },
}));

// interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
//   icon: React.FC<any>;
//   title: React.ReactNode;
//   description: React.ReactNode;
//   variant?: ContactIconVariant;
// }

function ContactIcon({
  icon: Icon,
  title,
  description,
  variant = 'gradient',
  className,
  ...others
}) {
  const { classes, cx } = useStyles({ variant });
  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      {variant === 'gradient' ? (
        <ThemeIcon size={40} radius="md" className={classes.icon}>
          <Icon size="1.5rem" />
        </ThemeIcon>
      ) : (
        <Box mr="md">
          <Icon size="1.5rem" />
        </Box>
      )}

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

// interface ContactIconsListProps {
//   data?: ContactIconProps[];
//   variant?: ContactIconVariant;
// }

const MOCKDATA = [
  { title: 'Email', description: 'superselectdecoration@gmail.com', icon: IconAt },
  { title: 'Phone', description: '+95 95016422', icon: IconPhone },
  { title: 'Address', description: '2, Waizayandar Rd., Thingankyun Tsp., Yangon', icon: IconMapPin },
//   { title: 'Working hours', description: '9 a.m. – 5 p.m.', icon: IconSun },
];

export function ContactIconsList({ data = MOCKDATA, variant }) {
  const items = data.map((item, index) => <ContactIcon key={index} variant={variant} {...item} />);
  return <Stack>{items}</Stack>;
}

export function ContactIcons() {
  return (
    <>
    <div className=" mt-8 flex md:flex-row flex-col ">
    <div className=' flex flex-col justify-center'>
        <div className=" w-full md:w-1/2">
          <p className=" font-monument text-primiray-text text-2xl md:text-3xl">
            Get In Touch
          </p>
          <Space h="lg" />
          <p className=" font-sfPro md:w-450 w-60">
            Let us bring a touch of elegance to your home or business with our
            precision and attention to detail. Contact us for a free
            consultation and estimates, and we stand behind our work with a
            comprehensive warranty.
          </p>
          <Space h="md" />
          <span className=" font-bold">Office Hours :9AM-5PM</span> <br />
          
          <span className=" font-bold">Working Days :Monday-Saturday</span>
          <Space h="md" />
          </div>
         
    <SimpleGrid cols={2} breakpoints={[{ maxWidth: 755, cols: 1 }]}>
      <Box
        sx={(theme) => ({
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
         
        })}
      >
        <ContactIconsList  />
      </Box>
    </SimpleGrid>
    </div>
    <div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2159.281252381194!2d96.18169562692911!3d16.82271103003024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1933d001b512b%3A0xe17362b4c26a11e!2sSuper%20Select!5e0!3m2!1smy!2smm!4v1681896549344!5m2!1smy!2smm" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
    </>
  );
}
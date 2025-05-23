import {
    Box,
    CardMedia,
    Grid,
    Typography
} from '@mui/material';
import { useEffect, useState } from 'react';
import CircleImg from '../../assets/svg/CircleWing.svg';
import DnaWingImg from '../../assets/svg/DnaWing.svg';
import DnaWingImg2 from '../../assets/svg/DnaWingImg2.svg';
import MaskGroupImg from '../../assets/svg/MaskGroup.svg';

const contents = [
    {
        image: MaskGroupImg,
        description: 'A Fresh Approach to Market Research',
        width: 400,
        height: 350
    },
    {
        image: CircleImg,
        description: 'From Data to Decisions: Tailored research as unique as your brand',
        width: 450,
        height: 400
    },
    {
        image: DnaWingImg2,
        secondaryImage: DnaWingImg, 
        description: "Your customers don't fit in a box, and neither does our approach",
        width: 500,
        height: 440
    }
];

const HeroCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        let imageOnlyTimer;
        let fullSlideTimer;

        if (currentIndex === 0) {
            setShowText(false);

            imageOnlyTimer = setTimeout(() => {
                setShowText(true);
            }, 1000);

            fullSlideTimer = setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
            }, 4000);
        } else {
            setShowText(true);
            fullSlideTimer = setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
            }, 4000);
        }

        return () => {
            clearTimeout(imageOnlyTimer);
            clearTimeout(fullSlideTimer);
        };
    }, [currentIndex]);

    const currentContent = contents[currentIndex];

    return (
        <Box sx={{ backgroundColor: '#FBEEEE', height: '65vh', p: 4, position: 'relative' }}>
            <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ height: '100%' }}>
                <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
                    <Box
                        sx={{
                            position: 'relative',
                            width: currentContent.width,
                            height: currentContent.height,
                            margin: '0 auto',
                        }}
                    >
                        {currentContent.secondaryImage && (
                            <CardMedia
                                component="img"
                                image={currentContent.secondaryImage}
                                alt="Secondary"
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    objectFit: 'contain',
                                    transition: 'all 0.5s ease-in-out'
                                }}
                            />
                        )}

                        <CardMedia
                            component="img"
                            image={currentContent.image}
                            alt={currentContent.description}
                            sx={{
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                objectFit: 'contain',
                                transition: 'all 0.5s ease-in-out'
                            }}
                        />
                    </Box>

                </Grid>
                <Grid item xs={12} md={6} width={600}>
                    {showText && (
                        <Typography
                            sx={{
                                fontSize: "45px",
                                fontWeight: 600,
                                color: '#000',
                                transition: 'opacity 0.5s ease-in-out',
                                "&::after": {
                                    content: '"."',
                                    color: '#E8505E'
                                }
                            }}
                        >
                            {currentContent.description}
                        </Typography>
                    )}
                </Grid>
            </Grid>

            <Box sx={{
                position: 'absolute',
                bottom: 16,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: 1
            }}>
                {contents.map((_, i) => (
                    <Box
                        key={i}
                        sx={{
                            width: 12,
                            height: 12,
                            borderRadius: '50%',
                            backgroundColor: i === currentIndex ? '#E8505E' : '#ccc',
                            transition: 'background-color 0.3s'
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default HeroCarousel;
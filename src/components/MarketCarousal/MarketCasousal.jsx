import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    Typography
} from '@mui/material';
import AudienceIcon from '../../assets/js/Audience';
import QualitativeResearch from '../../assets/js/QualitativeResearch';
import QualityChecks from '../../assets/js/QualityChecks';
import WomanImage from '../../assets/svg/WomanImage.svg';

const MarketCarousal = () => {

    const cards1 = [
        {
            title: 'Audience',
            icon: <AudienceIcon />,
        },
        {
            title: 'Qualitative Research',
            icon: <QualitativeResearch />,
        },
    ];

    const card2 = [
        {
            title: 'Quantitative Research',
            icon: <QualityChecks />,
        },
        {
            title: 'Quality Checks',
            icon: <QualityChecks />,
        },
    ]

    return (
        <Box sx={{ backgroundColor: '#fff', p: 4 }}>
            <Grid container spacing={3} alignItems="center" justifyContent="center" >

                <Grid item xs={12} md={3}>
                    <Box
                        sx={{
                            position: 'relative',
                            borderRadius: '5px',
                            border: '1px solid #000',
                            height: '300px',
                            width: '250px',
                        }}
                    >
                        <img
                            src={WomanImage}
                            alt="Woman"
                            style={{
                                position: 'absolute',
                                transform: 'translate(10%, -28.5%)',
                            }}
                        />
                    </Box>
                </Grid>

                <Grid item xs={12} md={3} >
                    <CardContent
                        sx={{ backgroundColor: '#D0F0A2', color: '#1A1A1A', fontWeight: 500, fontSize: '20px', borderRadius: "10px", width: '200px' }}
                    >
                        Unlock in-depth market insights
                    </CardContent>
                    <Typography variant="h4" fontWeight={700} color='#000' width={200} mt={5}>
                        Everything You Need, All in One Place
                    </Typography>
                    <Typography color="textSecondary" mt={5} width={200}>
                        Harness our comprehensive solutions to unearth valuable insights that drive innovation, improve customer connections, and boost efficiency
                    </Typography>
                </Grid>

                <Grid item xs={12} md={3} >
                    {cards1.map((card, index) => (
                        <Card
                            variant="outlined"
                            key={index}
                            sx={{
                                height: { xs: '200px', sm: '250px', md: '300px' },
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                border: '1px solid #000',
                                mb: 3,
                                transition: '0.3s',
                                '&:hover': {
                                    backgroundColor: '#E8505E',
                                    borderColor: '#1976d2',
                                },
                                '&:hover .MuiButton-root': {
                                    backgroundColor: '#ffffff',
                                    color: '#E8505E',
                                },
                                '&:hover .MuiButton-root .MuiSvgIcon-root': {
                                    color: 'black',
                                }
                            }}
                        >
                            <CardContent>
                                <Box mb={1}>{card.icon}</Box>
                                <Typography variant="subtitle1" fontWeight="bold">
                                    {card.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" mt={1} width={250}>
                                    Tap into a wide panel of respondents for any of your market research needs.
                                </Typography>
                            </CardContent>
                            <Box sx={{ p: 1, textAlign: 'right' }}>
                                <Button
                                    variant="contained"
                                    color="error"
                                    sx={{ borderRadius: 2, minWidth: "40px", px: 2, backgroundColor: "#E8505E", }}
                                >
                                    <ArrowForwardIcon />
                                </Button>
                            </Box>
                        </Card>
                    ))}
                </Grid>

                <Grid item xs={12} md={3}>
                    {card2.map((card, index) => (
                        <Card
                            variant="outlined"
                            key={index}
                            sx={{
                                height: { xs: '200px', sm: '250px', md: '300px' },
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                border: '1px solid #000',
                                mb: 3,
                                transition: '0.3s',
                                '&:hover': {
                                    backgroundColor: '#E8505E',
                                    borderColor: '#1976d2',
                                },
                                '&:hover .MuiButton-root': {
                                    backgroundColor: '#ffffff',
                                    color: '#E8505E',
                                },
                                '&:hover .MuiButton-root .MuiSvgIcon-root': {
                                    color: 'black',
                                }
                            }}
                        >
                            <CardContent>
                                <Box mb={1}>{card.icon}</Box>
                                <Typography variant="subtitle1" fontWeight="bold">
                                    {card.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" mt={1} width={250}>
                                    Tap into a wide panel of respondents for any of your market research needs.
                                </Typography>
                            </CardContent>
                            <Box sx={{ p: 1, textAlign: 'right' }}>
                                <Button
                                    variant="contained"
                                    color="error"
                                    sx={{ borderRadius: 2, minWidth: "40px", px: 2, backgroundColor: "#E8505E", }}
                                >
                                    <ArrowForwardIcon />
                                </Button>
                            </Box>
                        </Card>
                    ))}
                </Grid>

            </Grid>
        </Box>
    );
};

export default MarketCarousal;

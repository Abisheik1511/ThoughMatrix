import {
    Box,
    Grid,
    Typography
} from "@mui/material";
import GreenBG from '../../assets/image/Box1.png';
import GreenBGOverlay from '../../assets/image/BoxInside1.png';
import GrayBox from '../../assets/image/GrayBox.png';
import GrayIcon from '../../assets/image/GrayIcon.png';
import RedBox from '../../assets/image/RedBox.png';
import RedBoxIcon1 from '../../assets/image/RedBoxIcon1.png';
import RedBoxIcon2 from '../../assets/image/RedBoxIcon2.png';
import VioletBox from '../../assets/image/VioletBox.png';
import VioletIcon from '../../assets/image/VioletIcon.png';
import ArrowIcon from "../../assets/js/Arrow";
import '../FullService/FullService.css';


const FullService = () => {
    return (
        <Box
            sx={{
                backgroundColor: "#ECECEC",
                color: "white",
                p: 4,
                position: "relative",
            }}
        >
            <Grid container xs={12}>
                <Typography
                    variant="h5"
                    fontWeight="bold"
                    mb={2}
                    ml={5}
                    color="#000"
                    fontFamily="'Barlow', sans-serif"
                    sx={{ maxWidth: 990 }}
                >
                    We’re a full-service B2B market research thought partner committed
                    to strengthening your strategies with deep, subject matter
                    expertise.
                </Typography>
            </Grid>
            <Grid container spacing={4} sx={{ margin: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Grid item xs={12} md={4} >
                    <Box sx={{ position: 'relative' }}>
                        <img src={GreenBG}  />
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '70%',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                padding: 2,
                                textAlign: 'left',
                                color: '#000',
                                gap: 1,
                            }}
                            mt={3}
                        >
                            <Typography fontSize={16} fontWeight="bold">
                                Branding and Advertising Communication
                            </Typography>

                            <Typography fontSize={14}>
                                We help brands resonate. From brand perception and awareness to message
                                testing and ad effectiveness, our research empowers you to communicate
                                with clarity and impact. Backed by qualitative insights and robust
                                tracking, we ensure your brand voice connects with the right audience.
                            </Typography>

                            <Box sx={{ mt: 1 }}>
                                <ArrowIcon />
                            </Box>
                        </Box>
                        <img src={GreenBGOverlay} className="sub-image" />
                    </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box sx={{ position: 'relative' }}>
                        <img src={VioletBox} className='image' />
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '50%',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                padding: 2,
                                textAlign: 'left',
                                color: '#000',
                                gap: 1,
                            }}
                            mt={5}
                        >
                            <Typography fontSize={18} fontWeight="bold" width={200}>
                                Market Opportunity Research
                            </Typography>

                            <Typography fontSize={16}>
                                Find your edge before you enter. Our market opportunity research identifies whitespace, tests feasibility,
                                and maps competitive dynamics. Whether you're planning a launch or exploring
                                new segments, we provide the insights to make bold, informed moves.
                            </Typography>

                            <Box sx={{ mt: 1 }}>
                                <ArrowIcon />
                            </Box>
                        </Box>
                        <img src={VioletIcon} className='sub-image' />
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={4} sx={{ margin: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Grid item xs={12} md={8}>
                    <Box sx={{ position: 'relative' }}>
                        <img src={GrayBox} className='image' />
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '50%',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                padding: 2,
                                textAlign: 'left',
                                color: '#000',
                                gap: 1,
                            }}
                            mt={5}
                        >
                            <Typography fontSize={18} fontWeight="bold" width={200}>
                                Customer Research and Segmentation
                            </Typography>

                            <Typography fontSize={16}>
                                Know who you're talking to — and why it matters. We uncover the motivations, behaviors,
                                and needs of your customers, then segment them meaningfully to guide strategy. Our blend
                                of qualitative and quantitative approaches ensures depth, accuracy, and actionable clarity.
                            </Typography>

                            <Box sx={{ mt: 1 }}>
                                <ArrowIcon />
                            </Box>
                        </Box>
                        <img src={GrayIcon} className='sub-image' />
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{ position: 'relative' }}>
                        <img src={RedBox} style={{width:'100%'}}/>
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '70%',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                padding: 2,
                                textAlign: 'left',
                                color: '#000',
                                gap: 1,
                            }}
                            mt={7}
                        >
                            <img src={RedBoxIcon2} className="sub-image-3" />
                            <Typography fontSize={16} fontWeight="bold">
                                Product Research
                            </Typography>

                            <Typography fontSize={14}>
                                Build products that solve real problems. From concept testing and feature prioritization
                                to in-use feedback, we support every phase of product development. Our insights help you
                                align innovation with user expectations — minimizing risk and maximizing relevance.
                            </Typography>

                            <Box sx={{ mt: 1 }}>
                                <ArrowIcon />
                            </Box>
                        </Box>
                        <img src={RedBoxIcon1} className="sub-image-2"/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FullService;

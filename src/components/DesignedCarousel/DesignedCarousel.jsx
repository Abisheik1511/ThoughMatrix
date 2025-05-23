import {
    Box,
    Button,
    Grid,
    List,
    ListItemButton,
    ListItemText,
    Paper,
    Typography
} from "@mui/material";
import { useState } from "react";
import AdvertisingImg from '../../assets/svg/AdvertisingImg.svg';
import AutomobileImg from '../../assets/svg/AutomobileImg.svg';
import EducationImg from '../../assets/svg/EducationImg.svg';
import FinancialImg from '../../assets/svg/FinancialServicesImg.svg';
import FMCGImg from '../../assets/svg/FMCGImg.svg';
import HealthcareImg from '../../assets/svg/HealthcareImg.svg';
import HRImg from '../../assets/svg/HRImg.svg';
import InsuranceImg from '../../assets/svg/InsuranceImg.svg';
import InvestorsImg from '../../assets/svg/InvestorsImg.svg';
import MediaImg from '../../assets/svg/MediaImg.svg';
import RetailImg from '../../assets/svg/RetailMerchandisingImg.svg';
import TechImg from '../../assets/svg/TechImg.svg';

const categories = [
    "FMCG",
    "Retail and Merchandising",
    "Financial Services",
    "Insurance",
    "Investors",
    "Media",
    "Technology",
    "Automotive",
    "Advertising and Marketing",
    "Human Resources",
    "Education",
    "Healthcare and Life Sciences",
];

const categoryContent = [
    {
        title: "FMCG",
        subtitle: "Accelerate Supply Chain Efficiency",
        description: "In the fast-moving world of consumer goods, every second counts. Our platform helps you:",
        bullets: [
            "Monitor inventory in real time",
            "Predict demand with AI",
            "Streamline vendor management",
        ],
        image: FMCGImg,
    },
    {
        title: "Retail and Merchandising",
        subtitle: "Drive Smarter Decisions on the Shop Floor",
        description: "In retail, every display, promotion, and product placement counts. Thought Metrics helps you:",
        bullets: [
            "Stay in tune with changing shopper behaviors and preferences.",
            "Optimize in-store and online experiences based on real insights.",
            "Test pricing, promotions, and layouts quickly to boost conversions.",
        ],
        image: RetailImg,
    },
    {
        title: "Financial Services",
        subtitle: "Improve Investment Decisions with Confidence",
        description: "Deliver accurate and timely insights for better client experiences and returns.",
        bullets: [
            "Automate financial reporting and risk analysis",
            "Enhance fraud detection",
            "Personalize client communications",
        ],
        image: FinancialImg,
    },
    {
        title: "Insurance",
        subtitle: "Simplify the Complex, Earn Customer Confidence",
        description: "Insurance decisions are personal and complex — we help you:",
        bullets: [
            "Decode the motivations and anxieties behind insurance choices.",
            "Test policy concepts, channels, and messaging before launch.",
            "Build clarity and trust through research - led communication.",
        ],
        image: InsuranceImg,
    },
    {
        title: "Investors",
        subtitle: "See the Market Before It Moves",
        description: "Whether you're sizing up a new market or evaluating a venture:",
        bullets: [
            "Use rigorous market assessments to make informed investment decisions.",
            "Gauge brand traction and customer sentiment with real-time insights.",
            "Back your thesis with evidence, not just instinct.",
        ],
        image: InvestorsImg,
    },
    {
        title: "Media",
        subtitle: "Create Content That Captures Minds",
        description: "In media, engagement is everything. Our insights help you:",
        bullets: [
            "Understand audience preferences across platforms and formats.",
            "Test content, characters, and story arcs before the launch.",
            "Track media consumption shifts and stay ahead of trends.",
        ],
        image: MediaImg,
    },
    {
        title: "Technology",
        subtitle: "Design for Humans, Not Just Users",
        description: "Innovation is only as good as its adoption. Thought Metrics enables you to:",
        bullets: [
            "Discover what real users want from your tools and platforms.",
            "Uncover usability gaps through qualitative testing.",
            "Optimize UX and messaging for clarity, trust, and adoption.",
        ],
        image: TechImg,
    },
    {
        title: "Automotive",
        subtitle: "From Test Drive to Loyalty — Know the Journey",
        description: "Buyers are evolving — from EV interest to digital-first expectations. We help you:",
        bullets: [
            "Understand the full decision-making journey, from research to purchase..",
            "Test features, designs, and positioning for different segments.",
            "Navigate category shifts and competitive dynamics with confidence.",
        ],
        image: AutomobileImg,
    },
    {
        title: "Advertising and Marketing",
        subtitle: "Make Every Message Matter",
        description: "Creative is powerful when it connects. Our approach helps you:",
        bullets: [
            "Test campaign ideas, messages, and visuals before going live.",
            "Track brand recall, perception, and effectiveness over time.",
            "Measure emotional and cognitive response for deeper creative impact.",
        ],
        image: AdvertisingImg,
    },
    {
        title: "Human Resources",
        subtitle: "Shape Cultures People Want to Belong To",
        description: "Attracting and retaining talent starts with understanding people. We help you:",
        bullets: [
            "Explore employee motivations, engagement drivers, and pain points.",
            "Test new HR initiatives before rollout.",
            "Benchmark satisfaction and guide culture-building efforts.",
        ],
        image: HRImg,
    },
    {
        title: "Education",
        subtitle: "Design Learning That Sticks",
        description: "From students to institutions, we uncover insights that improve education outcomes:",
        bullets: [
            "Understand learner needs, habits, and barriers.",
            "Test curricula, content, and platforms for effectiveness.",
            "Track engagement and feedback to continuously improve learning delivery.",
        ],
        image: EducationImg,
    },
    {
        title: "Healthcare and Life Sciences",
        subtitle: "Build Empathy Into Every Innovation",
        description: "Patients and providers each have unique needs — we help you listen better:",
        bullets: [
            "Understand patient journeys, behaviors, and gaps in care.",
            "Test health communications and interventions for clarity and trust.",
            "Equip R&D and marketing with real-world insights that save lives.",
        ],
        image: HealthcareImg,
    },

];

const DesignedCarousal = () => {
    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleListItemClick = (index) => {
        setSelectedIndex(index);
    };

    const selectedContent = categoryContent[selectedIndex] || {};

    return (
        <Box sx={{ p: 4, backgroundColor: "#fff" }}>
            <Box sx={{ px: { xs: 2, md: 6 }, py: 4 }}>
                <Typography variant="h5" fontWeight="bold" mb={2} color="#000" fontFamily="'Barlow', sans-serif" >
                    Designed to meet your unique needs.
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={9}>
                        <Paper
                            sx={{
                                p: 4,
                                borderRadius: 2,
                                minHeight: "600px",
                                border: "1px solid #000",
                                mx: 2,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <Grid
                                container
                                spacing={2}
                                sx={{
                                    flexGrow: 1,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    px: 4,
                                }}
                            >
                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    sx={{ width: { xs: "100%", md: "500px" } }}
                                >
                                    <Typography fontSize={24} fontWeight="bold" gutterBottom>
                                        {selectedContent.title}
                                    </Typography>
                                    <Typography fontSize={21} fontWeight={600} mt={4}>
                                        {selectedContent.subtitle}
                                    </Typography>
                                    <Typography fontSize={18} mt={1}>
                                        {selectedContent.description}
                                    </Typography>
                                    <ul style={{ marginTop: 8 }}>
                                        {selectedContent.bullets?.map((point, i) => (
                                            <li key={i}>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        fontFamily: "Barlow, sans-serif",
                                                        fontSize: "18px",
                                                    }}
                                                >
                                                    {point}
                                                </Typography>
                                            </li>
                                        ))}
                                    </ul>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <Box
                                        component="img"
                                        src={selectedContent.image}
                                        alt={selectedContent.title}
                                        sx={{ width: "100%", borderRadius: 2 }}
                                    />
                                </Grid>
                            </Grid>

                            <Grid
                                container
                                spacing={2}
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    mt: 2,
                                }}
                            >
                                <Grid item xs={12} md={6}>
                                    <Box
                                        sx={{
                                            width: 40,
                                            height: 40,
                                            bgcolor: "error.main",
                                            color: "#fff",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontWeight: "bold",
                                            backgroundColor: '#E8505E'
                                        }}
                                    >
                                        {String(selectedIndex + 1).padStart(2, "0")}
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        sx={{ textTransform: "none", fontWeight: "bold", backgroundColor:'#E8505E' }}
                                    >
                                        See More
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>

                    </Grid>

                    <Grid item xs={12} md={3}>
                        <List component="nav">
                            {categories.map((text, index) => {
                                const isSelected = selectedIndex === index;
                                return (
                                    <ListItemButton
                                        key={index}
                                        selected={isSelected}
                                        onClick={() => handleListItemClick(index)}
                                        sx={{
                                            width: '300px',
                                            mb: 1,
                                            borderRadius: 1,
                                            bgcolor: isSelected ? '#E8505E' : '#f0f0f0',
                                            color: isSelected ? '#fff' : '#000',
                                            '&:hover': {
                                                bgcolor: '#E8505E',
                                                color: '#fff',
                                            },
                                            '&.Mui-selected': {
                                                bgcolor: '#E8505E',
                                                color: '#fff',
                                            },
                                            '&.Mui-selected:hover': {
                                                bgcolor: '#E8505E',
                                                color: '#fff',
                                            },
                                        }}
                                    >
                                        <ListItemText
                                            primary={text}
                                            primaryTypographyProps={{
                                                fontWeight: 600,
                                                textAlign: 'center',
                                            }}
                                        />
                                    </ListItemButton>

                                );
                            })}
                        </List>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default DesignedCarousal;

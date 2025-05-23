import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
    Box,
    Button,
    Card,
    CardContent,
    Typography
} from "@mui/material";
import Image1 from '../../assets/svg/Image1.svg';
import Image2 from '../../assets/svg/Image2.svg';
import Image3 from '../../assets/svg/Image3.svg';
import Image4 from '../../assets/svg/Image4.svg';

const cardsData = [
    {
        image: Image1,
        description: "Gain feedback at every phase of product and ad development, from concept to execution with agile testing."
    },
    {
        image: Image2,
        description: "Gain feedback at every phase of product and ad development, from concept to execution with agile testing."
    },
    {
        image: Image3,
        description: "Gain feedback at every phase of product and ad development, from concept to execution with agile testing."
    },
    {
        image: Image4,
        description: "Gain feedback at every phase of product and ad development, from concept to execution with agile testing."
    }
];

const FreashIdeaCarousel = () => {
    return (
        <Box sx={{ backgroundColor: "#eaffe1", p: 4 }}>
            <Typography fontSize={32} fontWeight={600} mb={5} ml={10} color="#000" sx={{ fontFamily: 'Barlow, sans-serif' }}>
                Fresh Ideas to Help You Reach New Heights.
            </Typography>

            <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", justifyContent: "center" }}>
                {cardsData.map((card, index) => (
                    <Card key={index} sx={{
                        width: 300, borderRadius: 2, display: "flex", flexDirection: "column", border: "1px solid #000", boxShadow: "none"}}>
                        <Box
                            component="img"
                            src={card.image}
                            alt="card"
                            sx={{ width: "100%", height: 200, objectFit: "cover", borderRadius: "8px 8px 0 0" }}
                        />
                        <CardContent sx={{ flexGrow: 1, bgcolor: "#eaffe1" }}>
                            <Box
                                sx={{
                                    backgroundColor: "#c8ffff",
                                    color: "#000",
                                    display: "inline-block",
                                    px: 1.5,
                                    py: 0.5,
                                    borderRadius: 1,
                                    fontSize: 12,
                                    fontWeight: 500,
                                    mb: 1,
                                    fontFamily: 'Barlow, sans-serif'
                                }}
                            >
                                Blog
                            </Box>
                            <Typography variant="body2" sx={{ mb: 2 }}>{card.description}</Typography>
                            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                                <Button
                                    variant="contained"
                                    color="error"
                                    sx={{ borderRadius: 2, minWidth: "40px", px: 2, backgroundColor: "#E8505E", }}
                                   
                                >
                                    <ArrowForwardIcon />
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default FreashIdeaCarousel;

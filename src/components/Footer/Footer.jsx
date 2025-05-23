import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {
    Box,
    Grid,
    IconButton,
    Typography
} from "@mui/material";
import CompanyName from "../../assets/js/CompanyName";
import LinkedInLog from "../../assets/js/LinkedInLog";
import Log from '../../assets/js/ThoughMatrixLog';
import VLog from "../../assets/js/VLog";
import XLog from "../../assets/js/XLog";

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "#E45460", color: "white", p: 4, position: "relative", }}>
            <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item xs={12} md={2}>
                    <Typography variant="h6">
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box component="span" sx={{ display: "inline-block", mr: 1 }}>
                                <Log />
                            </Box>
                            <CompanyName />
                        </Box>
                    </Typography>
                    <Box display="flex" gap={2}>
                        <IconButton sx={{ border: "1px solid white", borderRadius: "50%", color: "white" }}>
                            <LinkedInLog />
                        </IconButton>
                        <IconButton sx={{ border: "1px solid white", borderRadius: "50%", color: "white" }}>
                            <XLog />
                        </IconButton>
                        <IconButton sx={{ border: "1px solid white", borderRadius: "50%", color: "white" }}>
                            <VLog />
                        </IconButton>
                    </Box>
                </Grid>

                <Grid item xs={12} md={2}>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>Research Methods</Typography>
                    {["Qualitative Research", "Quantitative Research", "Fieldwork", "Surveys", "Focus Group Discussions", "Quality checks"].map((item) => (
                        <Typography key={item}>{item}</Typography>
                    ))}
                </Grid>

                <Grid item xs={12} md={3}>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>Capabilities</Typography>
                    {[
                        "Branding and Advertising Communication",
                        "Market Opportunity Research",
                        "Product Research",
                        "Consumer Research and Segmentation"
                    ].map((item) => (
                        <Typography key={item}>{item}</Typography>
                    ))}
                </Grid>

                <Grid item xs={12} md={2}>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>Legal</Typography>
                    {["Privacy", "AI Policy", "Business Conduct and Ethics", "Site Disclaimer"].map((item) => (
                        <Typography key={item}>{item}</Typography>
                    ))}
                </Grid>

                <Grid item xs={12} md={2}>
                    <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>Connect</Typography>
                    {["Join Our Panel", "Request a Bid", "Careers", "Contact Us"].map((item) => (
                        <Typography key={item}>{item}</Typography>
                    ))}
                </Grid>
            </Grid>

            <Box sx={{ borderTop: "2px solid white", mt: 2, pt: 2, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                <Typography variant="body2">© Copyright 2025. All Rights Reserved.</Typography>

                <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
                    <Box
                        sx={{
                            backgroundColor: "#f8d2d4",
                            borderRadius: 2,
                            width: 40,
                            height: 40,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer"
                        }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <KeyboardArrowUpIcon sx={{ color: "#fff" }} />
                    </Box>
                </Box>
            </Box>

        </Box>
    );
};

export default Footer;

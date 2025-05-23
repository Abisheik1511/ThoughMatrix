import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar,
    Box,
    Button,
    Divider,
    Drawer,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography
} from '@mui/material';
import { useState } from 'react';
import DropdownIcon from '../../assets/js/DropdownIcon';
import DropdownUpSideIcon from '../../assets/js/DropdownUpSideIcon';
import '../Navbar/Navbar.css';

const drawerWidth = 280;

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [menuType, setMenuType] = useState("");

    const navItems = ['Research Methods', 'Capabilities', 'Industries', 'Resources'];

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleMenuToggle = (type) => {
        setMenuType(prev => (prev === type ? "" : type));
    };

    const dropdownContent = {
        'Research Methods': {
            columns: [
                ['Quantitative Research', 'Qualitative Research', 'Recruitment and Fieldwork'],
                ['Online and Offline Surveys', 'Focus Group Discussions', 'Quality Checks']
            ]
        },
        'Capabilities': {
            columns: [
                [
                    'Branding and Advertising Communication',
                    'Brand Perception Research',
                    'Brand Awareness Research',
                    'Brand Tracking Research',
                    'Message Testing',
                    'Advertising Effectiveness Research',
                ],
                [
                    'Market Opportunity Research',
                    'Go-to-market Research',
                    'Market Feasibility Study',
                    'Market Entry Research',
                    'Competitive Research'
                ],
                [
                    'Product Research',
                    'Concept Testing Research',
                    'Conjoint Analysis',
                    'MaxDiff Analysis',
                    'Product Validation Testing',
                    'UI/UX Research',
                ],
                [
                    'Customer Research and Segmentation',
                    'Customer Journey Research',
                    'Customer Loyalty Research',
                    'Customer Satisfaction Research',
                    'Persona Research',
                    'Pricing Research'
                ]
            ]
        },
        'Industries': {
            columns: [
                ['FMCG', 'Retail and Merchandising', 'Healthcare and Life Sciences', 'Advertising and Marketing'],
                ['Financial Services and Institutions', 'Insurance', 'Investors', 'Automotive'],
                ['Education', 'Human Resources', 'Media and Internet Publishers', 'Technology']
            ]
        },
        'Resources': {
            columns: [['Articles', 'Reports', 'Case Studies', 'Webinars']]
        }
    };

    const renderDropdown = (type) => {
        if (menuType !== type) return null;
        const data = dropdownContent[type];
        if (!data) return null;

        return (
            <Box
                sx={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '100%',
                    backgroundColor: '#e6515f',
                    color: 'white',
                    py: 6,
                    px: 4,
                    zIndex: 1300,
                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                }}
            >
                <Grid container spacing={1}>
                    <Grid item xs={12} md={3} width={300}>
                        <Typography className='dropdownTitle'>Understand our approach to B2B and B2C research.</Typography>
                        <Typography className='dropdownOverView' sx={{ mt: 1 }}>OVERVIEW</Typography>
                    </Grid>
                    {data.columns.map((column, colIndex) => (
                        <Grid item xs={12} md={2.1} width={280} key={colIndex}>
                            {column.map((item, itemIndex) => (
                                <Typography
                                    key={itemIndex}
                                    fontSize={type === 'Capabilities' && itemIndex === 0 ? 20 : 18}
                                    fontWeight={type === 'Capabilities' && itemIndex === 0 ? 600 : 500}
                                    className='dropdownSubTitle hoverUnderline'
                                >
                                    {item}
                                </Typography>
                            ))}
                        </Grid>
                    ))}
                </Grid>
            </Box>
        );
    };
    

    const drawer = (
        <Box onClick={handleDrawerToggle} 
        sx={{
            textAlign: 'center',
            backgroundColor: '#121212', 
            height: '100%',
            color: 'white',
          }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Menu
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem button key={item} onClick={() => handleMenuToggle(item)}>
                        <ListItemText primary={item} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ position: 'relative', zIndex: 1200 }}>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ backgroundColor: '#FBEEEE' }}
            >
                <Toolbar sx={{
                    display: 'flex',
                    justifyContent: {
                        xs: 'space-between', 
                        md: 'space-evenly', 
                    },
                    alignItems: 'center',
                }}>
                   
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { xs: 'block', md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
                        {navItems.map((item) => (
                            <Button
                                key={item}
                                className='headerTitle'
                                endIcon={menuType === item ? <DropdownUpSideIcon /> : <DropdownIcon />}
                                onClick={() => handleMenuToggle(item)}
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                        <Button variant="outlined" className='researchButton'>
                            Start Your Research
                        </Button>
                        <Button variant="contained" className='focusGroupButton'>
                            Join a Paid Focus Group
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            {renderDropdown('Research Methods')}
            {renderDropdown('Capabilities')}
            {renderDropdown('Industries')}
            {renderDropdown('Resources')}

            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
};

export default Navbar;

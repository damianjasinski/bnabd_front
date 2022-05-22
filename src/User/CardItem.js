
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const CardItem = (props) => {
    return (
        <Box sx={{ mx: "auto" }}>

            <Card sx={{ maxWidth: 520, mx: "auto" }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={5}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Grid>
                    <Grid item xs={6} md={7}>
                        <CardMedia
                            component="img"
                            height="500"
                            image={props.imUrl}
                            alt="green iguana"
                        />
                    </Grid>
                </Grid>
            </Card>

        </Box >
    );
}

CardItem.defaultProps = {
    name: "",
    image: ""
}

export default CardItem
import { Stack, Typography, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from '@mui/icons-material/Business';

export const ContactUser = ({ userdata }) => {
    const { location, twitter_username, blog, company } = userdata

    return (
        <Grid container spacing={2}>

            <Grid item xs={6}>
                <Stack>
                    <LocationOnIcon/>
                    <Typography>{location}</Typography>
                </Stack>
            </Grid>

            <Grid item xs={6}>
                <Stack>
                    <TwitterIcon/>
                    <Typography>{twitter_username}</Typography>
                </Stack>
            </Grid>

            <Grid item xs={6}>
                <Stack>
                    <LanguageIcon/>
                    <Typography>{blog}</Typography>
                </Stack>
            </Grid>

            <Grid item xs={6}>
                <Stack>
                    <BusinessIcon/>
                    <Typography>{company}</Typography>
                </Stack>
            </Grid>

        </Grid>
    )
}
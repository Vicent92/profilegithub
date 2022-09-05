import { Grid, CardMedia, Stack } from "@mui/material";
import { InfoUser } from "./infoUser";

export const UserCardt = ({ userdata }) => {
    const { avatar_url } = userdata

    return (
        <Grid 
        container 
        spacing={2}
        sx={{
            marginTop: '15px'
        }}
        >

            <Grid item sx={3}>
                <CardMedia
                sx={{
                    width: '200px',
                    height: '200px',
                    borderRadius: '100px',
                    marginLeft: '20px'
                }}
                component='img'
                alt="Git User"
                image={avatar_url}
                />
            </Grid>

            <Grid item sx={9}>
                <Stack
                    direction='column'
                    sx={{
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        justifyContent: 'space-around',
                        // background: 'red',
                        width: '100%',
                        height: '310px'
                    }}
                >
                    <InfoUser 
                        userdata={userdata}
                    />
                </Stack>
            </Grid>

        </Grid>
    )
}
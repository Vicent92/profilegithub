import { Stack, Typography, Paper } from "@mui/material";

export const AnalyticUser = ({ userdata }) => {
    const { public_repos, following, followers } = userdata;

    return (
        <Paper 
            elevation={2}
            sx={{
                width: '100%',
            }}
        >
        
            <Stack
                direction='row'
                sx={{
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}
            >

                <Stack 
                    direction='column'
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Typography>Repos</Typography>
                    <Typography>{public_repos}</Typography>
                </Stack>

                <Stack
                    direction='column'
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Typography>Followers</Typography>
                    <Typography>{followers}</Typography>
                </Stack>

                <Stack
                    direction='column'
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Typography>Following</Typography>
                    <Typography>{following}</Typography>
                </Stack>

            </Stack>

        </Paper>

        
    )
}
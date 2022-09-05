import { Stack, Typography } from "@mui/material";

export const DescriptionUser = ({ userdata }) => {
    const { bio } = userdata

    return (
        <Stack 
            direction="row"
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '50%'
            }}
        >

        {
            bio != undefined
            ? <Typography>{bio}</Typography>
            : <Typography variant='body1'>Pudin</Typography>
        }

        </Stack>
    )
}
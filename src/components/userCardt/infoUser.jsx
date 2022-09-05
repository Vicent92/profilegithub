import { Stack, Typography } from "@mui/material";
import { AnalyticUser } from "./analyticUser";
import { ContactUser } from "./contactUser";
import { DescriptionUser } from "./descriptionUser";


export const InfoUser = ({ userdata }) => {
    const { name, login, created_at } = userdata
    return (
        <>
        
            <Stack
                direction='row'
                sx={{
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >

                <Typography>{name}</Typography>

                <Typography>{login}</Typography>

            </Stack>

            <DescriptionUser userdata={userdata}/>

            <AnalyticUser userdata={userdata}/>

            <ContactUser userdata={userdata}/>
        
        </>
    )
}
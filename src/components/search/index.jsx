import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react'

export const Search = ({ userInput }) => {
    const [value, setValue] = useState('')

    const handleSubmit = () => {
        userInput(value)
    }

    const handleChange = (e) => {
        const { value } = e.target
        setValue(value)
    }
    return (
        <Stack 
        direction='row'
        sx={{
            width: '80%',
            marginTop: '30px'
        }}>
            <TextField
                id="outlined-basic" 
                label="Git User" 
                variant="outlined"
                placeholder="Octocat"
                value={value}
                onChange={handleChange}
                sx={{
                    width: '75%'
                }}
            >

            </TextField>

            <IconButton
                onClick={handleSubmit}
                sx={{
                    left: '-50px'
                }}
            >
                <SearchIcon/>
            </IconButton>
        </Stack>
    )
}
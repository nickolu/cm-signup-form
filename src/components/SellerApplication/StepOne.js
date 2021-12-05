import {useState} from 'react';
import {
    Box,
    FormControl,
    FormControlLabel,
    FormLabel,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField,
} from '@mui/material';

export default function StepOne() {
    return (
        <Box
            component="form"
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <TextField id="first-name" label="First Name" />
            <TextField id="last-name" label="Last Name" />
            <FormControl>
                <InputLabel id="your-shop-category-label">
                    Your Shop Category
                </InputLabel>
                <Select
                    labelId="your-shop-category-label"
                    id="your-shop-category"
                    value={0}
                    label="Your Shop Category"
                    onChange={() => {}}
                >
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                </Select>
            </FormControl>
            <TextField id="portfolio-link" label="Portfolio Link" />
            <FormControl component="fieldset">
                <FormLabel component="legend">
                    Do you already have an online store?
                </FormLabel>
                <RadioGroup
                    aria-label="online store"
                    defaultValue="yes"
                    name="have-online-store"
                >
                    <FormControlLabel
                        value="yes"
                        control={<Radio disableRipple />}
                        label="Yes"
                    />
                    <FormControlLabel
                        value="no"
                        control={<Radio disableRipple />}
                        label="No"
                    />
                </RadioGroup>
            </FormControl>
        </Box>
    );
}

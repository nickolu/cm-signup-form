import {useState} from 'react';
import {useForm} from 'react-hook-form';
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
    const [category, selectCategory] = useState(0);
    const {register, handleSubmit, reset} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <TextField id="first-name" label="First Name" />
            <TextField id="last-name" label="Last Name" />
            <FormControl>
                <InputLabel id="your-shop-category-label">
                    Your Shop Category
                </InputLabel>
                <Select
                    labelId="your-shop-category-label"
                    id="your-shop-category"
                    value={category}
                    label="Your Shop Category"
                    onChange={(e) => {
                        selectCategory(e.target.value);
                    }}
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

import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function LearnGrid(props) {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: 'gray',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: (theme.vars ?? theme).palette.text.secondary,
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
        }),
    }));
    return (
        <div className="my-4">
            <Box sx={{ flexGrow: 1 }}>
                {/* <Grid container spacing={2}>

                    <Grid size={4}>
                        <Item>size=4</Item>
                    </Grid>
                    <Grid size={4}>
                        <Item>size=4</Item>
                    </Grid>
                    <Grid size={4}>
                        <Item>size=4</Item>
                    </Grid>


                    <Grid size={3}>
                        <Item>size=3</Item>
                    </Grid>
                    <Grid size={3}>
                        <Item>size=3</Item>
                    </Grid>
                    <Grid size={3}>
                        <Item>size=3</Item>
                    </Grid>
                    <Grid size={3}>
                        <Item>size=3</Item>
                    </Grid>


                    <Grid size={4}>
                        <Item>size=4</Item>
                    </Grid>
                    <Grid size={8}>
                        <Item>size=8</Item>
                    </Grid>


                    <Grid size={12}>
                        <Item>size=12</Item>
                    </Grid>
                </Grid> */}

                {/* <Grid container spacing={2}>
                    <Grid size={{ xs: 6, md: 8 }}>
                        <Item>xs=6 md=8</Item>
                    </Grid>
                    <Grid size={{ xs: 6, md: 4 }}>
                        <Item>xs=6 md=4</Item>
                    </Grid>
                    <Grid size={{ xs: 6, md: 4 }}>
                        <Item>xs=6 md=4</Item>
                    </Grid>
                    <Grid size={{ xs: 6, md: 8 }}>
                        <Item>xs=6 md=8</Item>
                    </Grid>
                </Grid> */}

                {/* <h2>Row and column spacing</h2>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 4 }}>
                    <Grid size={6}>
                        <Item>1</Item>
                    </Grid>
                    <Grid size={6}>
                        <Item>2</Item>
                    </Grid>
                    <Grid size={6}>
                        <Item>3</Item>
                    </Grid>
                    <Grid size={6}>
                        <Item>4</Item>
                    </Grid>
                </Grid> */}


                {/* <h2>Responsive values</h2>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    <Grid size={{ xs: 2, sm: 4, md: 3 }}>
                        <Item>1</Item>
                    </Grid>

                    <Grid size={{ xs: 2, sm: 4, md: 4, xl: 3 }}>
                        <Item>2</Item>
                    </Grid>

                    <Grid size={{ xs: 2, sm: 4, md: 4, xl: 3 }}>
                        <Item>3</Item>
                    </Grid>

                    <Grid size={{ xs: 2, sm: 4, md: 4, xl: 3 }}>
                        <Item>4</Item>
                    </Grid>

                    <Grid size={{ xs: 2, sm: 4, md: 4, xl: 3 }}>
                        <Item>5</Item>
                    </Grid>

                    <Grid size={{ xs: 2, sm: 4, md: 4, xl: 3 }}>
                        <Item>6</Item>
                    </Grid>

                </Grid> */}

                {/* <h2>Auto-layout</h2>
                <Grid container spacing={3}>
                    <Grid size="grow">
                        <Item>size=grow</Item>
                    </Grid>
                    <Grid size={8}>
                        <Item>size=6</Item>
                    </Grid>
                    <Grid size="grow">
                        <Item>size=grow</Item>
                    </Grid>
                </Grid> */}


                {/* <Grid container spacing={3}>
                    <Grid size="auto">
                        <Item>size=auto   When a breakpoint's value is given as "auto", then a column's size will automatically </Item>
                    </Grid>
                    <Grid size={6}>
                        <Item>size=6 </Item>
                    </Grid>
                    <Grid size="grow">
                        <Item>size=grow</Item>
                    </Grid>
                </Grid> */}


                <Grid container spacing={3} sx={{ flexGrow: 1 }}>
                    <Grid size={{ xs: 6, md: 2 }} offset={{ xs: 3, md: 0 }}>
                        <Item>1</Item>
                    </Grid>
                    <Grid size={{ xs: 4, md: 2 }} offset={{ md: 1 }}>
                        <Item>2</Item>
                    </Grid>
                    <Grid size={{ xs: 4, md: 2 }} offset={{ xs: 4, md: 1 }}>
                        <Item>3</Item>
                    </Grid>
                    <Grid size={{ xs: 'grow', md: 6 }} offset={{ md: 2 }}>
                        <Item>4</Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default LearnGrid;

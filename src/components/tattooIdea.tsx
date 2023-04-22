import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel'
import Box from '@mui/material/Box';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import RadioGroup from '@mui/material/RadioGroup'
import FromControl from '@mui/material/FormControl'
import Radio from '@mui/material/Radio'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

export default function TattooIdea() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <DesignServicesIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Tattoo Details
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} lg={12}>
                <TextField
                  id="outlined-multiline-static"
                  label="Tattoo Placement"
                  multiline
                  rows={3}
                  placeholder="Example: Wrist, Forearm, Bicep, Thigh, Ribs etc. IF YOU ARE NOT SURE PLEASE put UNDECIDED or LIST THE AREAS YOU ARE CONSIDERING"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" component="label">
                  Upload: Placement Reference Photo
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
                <IconButton color="primary" aria-label="upload picture" component="label">
                  <input hidden accept="image/*" type="file" />
                  <PhotoCamera />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
          <Box component="form" onSubmit={handleSubmit} 
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          >
          <Typography component="h1" variant="h5">
            Tattoo Idea 
          </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} lg={12}>
                <TextField
                  id="outlined-multiline-static"
                  label="Tattoo Description"
                  multiline
                  rows={3}
                  placeholder="Approximate Size, Any Specific Colors, Coverup, Rework, Touchup."
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={12}>
                <FromControl> 

                <FormLabel id="demo-radio-buttons-group-label">Choose a Tattoo Style</FormLabel>
                <RadioGroup aria-labelledby='radio-buttons-group-tattoo-style-selection'
                defaultValue="black-work"
                name="radio-buttons-group">
                  <FormControlLabel value="american-traditional" control={<Radio />} label="American Traditional" />
                  <FormControlLabel value="black-work" control={<Radio />} label="Black Work" />
                  <FormControlLabel value="fine-line" control={<Radio />} label="Fine Line" />
                  <FormControlLabel value="illustrative" control={<Radio />} label="Illustrative" />
                  <FormControlLabel value="japanese-traditonal" control={<Radio />} label="Japanese Traditional" />
                  <FormControlLabel value="neo-traditonal" control={<Radio />} label="Neo Traditional" />
                  <FormControlLabel value="new-school" control={<Radio />} label="New School" />
                  <FormControlLabel value="realism" control={<Radio />} label="Realism" />
                  <FormControlLabel value="script" control={<Radio />} label="Script" />
                  <FormControlLabel value="traditonal" control={<Radio />} label="Traditional" />
                  <FormControlLabel value="tribal" control={<Radio />} label="Tribal" />
                  <FormControlLabel value="watercolor" control={<Radio />} label="Watercolor" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
                </FromControl>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" component="label">
                  Upload: Tattoo Reference Photo 
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
                <IconButton color="primary" aria-label="upload picture" component="label">
                  <input hidden accept="image/*" type="file" />
                  <PhotoCamera />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

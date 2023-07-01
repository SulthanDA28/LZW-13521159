import * as React from 'react';
import {
    Typography,
    TextField,
    Button,
    RadioGroup,
    FormControlLabel,
    Radio,
    Box
  } from '@mui/material';

export default function MyApp() {
    const [inputencode, setInputencode] = React.useState('');
    const [inputdecode, setInputdecode] = React.useState('');
    const [outputencode, setOutputencode] = React.useState('');
    const [outputdecode, setOutputdecode] = React.useState('');
    const [modeencode, setModeencode] = React.useState('decimal');
    const [modedecode, setModedecode] = React.useState('decimal');
    const encodeasli = (e) => {
        const ubah = inputencode
        setInputencode(inputencode)
        setOutputencode(ubah)
    }
  return (
    <div>
        <Typography variant="h3" component="div" gutterBottom>Selamat Datang di Text Composser</Typography>
        <Typography variant="h5" component="div" gutterBottom>Text Composser adalah aplikasi yang dapat membantu anda dalam mengcompress text</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', p: 2, m: 1, bgcolor: 'background.paper' }}>Encoder</Box>
        <Box sx={{  display: 'flex', flexDirection: 'row', p: 1, m: 1, bgcolor: 'background.paper'  }}>
            <TextField sx={{ m: -1, width: '100ch' }} label="Masukkan Text" variant="outlined" multiline fullWidth value={inputencode} onChange={(e)=>setInputencode(e.target.value)} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', p: 2, m: 1, bgcolor: 'background.paper' }}>
            <RadioGroup row aria-label="position" name="position" defaultValue="top" value={modeencode} onChange={(e)=>setModeencode(e.target.value)}>
                <FormControlLabel value="decimal" control={<Radio color="primary" />} label="Decimal" />
                <FormControlLabel value="binary" control={<Radio color="primary" />} label="Binary" />
            </RadioGroup>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', p: 1, m: 1, bgcolor: 'background.paper' }}>
            <Button variant="contained" onClick={encodeasli}>Compress</Button>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', p: 2, m: 1, bgcolor: 'background.paper' }}>Output:</Box>
        <Box component="div" sx={{ overflow: 'auto',display: 'flex', flexDirection: 'row', p: 2, m: 1, bgcolor: 'background.paper' }}>
            {outputencode}
        </Box>


        <Box sx={{ display: 'flex', flexDirection: 'row', p: 2, m: 1, bgcolor: 'background.paper' }}>Decoder</Box>
        <Box sx={{  display: 'flex', flexDirection: 'row', p: 1, m: 1, bgcolor: 'background.paper'  }}>
            <TextField sx={{ m: -1, width: '100ch' }} label="Masukkan Text" variant="outlined" multiline fullWidth value={inputdecode} onChange={(e)=>setInputdecode(e.target.value)}/>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', p: 2, m: 1, bgcolor: 'background.paper' }}>
            <RadioGroup row aria-label="position" name="position" defaultValue="top" value={modedecode} onChange={(e)=>setModedecode(e.target.value)}>
                <FormControlLabel value="decimal" control={<Radio color="primary" />} label="Decimal" />
                <FormControlLabel value="binary" control={<Radio color="primary" />} label="Binary" />
            </RadioGroup>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', p: 1, m: 1, bgcolor: 'background.paper' }}>
            <Button variant="contained">Decompress</Button>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', p: 2, m: 1, bgcolor: 'background.paper' }}>Output:</Box>
        <Box component="div" sx={{ overflow: 'auto',display: 'flex', flexDirection: 'row', p: 2, m: 1, bgcolor: 'background.paper' }}>
            {modedecode}
        </Box>
        
    </div>
  );
}
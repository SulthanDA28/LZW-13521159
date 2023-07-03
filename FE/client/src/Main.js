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
import axios from 'axios';

export default function MyApp() {
    const [inputencode, setInputencode] = React.useState('');
    const [inputdecode, setInputdecode] = React.useState('');
    const [outputencode, setOutputencode] = React.useState('');
    const [outputdecode, setOutputdecode] = React.useState('');
    const [modeencode, setModeencode] = React.useState('decimal');
    const [modedecode, setModedecode] = React.useState('decimal');
    const [Algo,setAlgorithm] = React.useState('LZW');
    axios.defaults.baseURL = 'http://localhost:5000';
    const encodeasli = () => {
        if(Algo === 'LZW'){
            axios.post('/encode/LZW', {
                input: inputencode,
                pilihan: modeencode
            }).then((res) => {
                setOutputencode(res.data);
            })
        }
        else if(Algo === 'LZW+RLE'){
            axios.post('/encode/LZW_RLE', {
                input: inputencode,
                pilihan: modeencode
            }).then((res) => {
                setOutputencode(res.data);
            })
        }
    }
    const decodeasli = () => {
        if(Algo === 'LZW'){
            axios.post('/decode/LZW', {
                input: inputdecode,
                pilihan: modedecode
            }).then((res) => {
                setOutputdecode(res.data);
            })
        }
        else if(Algo === 'LZW+RLE'){
            axios.post('/decode/LZW_RLE', {
                input: inputdecode,
                pilihan: modedecode
            }).then((res) => {
                setOutputdecode(res.data);
            })
        }
    }
  return (
    <div>
        <Typography variant="h3" component="div" gutterBottom>Selamat Datang di Text Composser</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', p: 2, m: 1, bgcolor: 'background.paper' }}>Pilih Algoritma</Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', p: 2, m: 1, bgcolor: 'background.paper' }}>
            <RadioGroup row aria-label="position" name="position" defaultValue="top" value={Algo} onChange={(e)=>setAlgorithm(e.target.value)}>
                <FormControlLabel value="LZW" control={<Radio color="primary" />} label="LZW" />
                <FormControlLabel value="LZW+RLE" control={<Radio color="primary" />} label="LZW+RLE" />
            </RadioGroup>
        </Box>
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
            <Button variant="contained" onClick={decodeasli}>Decompress</Button>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', p: 2, m: 1, bgcolor: 'background.paper' }}>Output:</Box>
        <Box component="div" sx={{ overflow: 'auto',display: 'flex', flexDirection: 'row', p: 2, m: 1, bgcolor: 'background.paper' }}>
            {outputdecode}
        </Box>
        
    </div>
  );
}
import React from "react";
import { Box, Button } from '@mui/material';
import BeautifulBox from "./BoxHistory";
import axios from 'axios';

function History(){
    const [jsonData, setJsonData] = React.useState([]);
    React.useEffect(() => {
        axios.defaults.baseURL = 'http://localhost:5000';
        axios.get('/gethistory').then((res) => {
            setJsonData(res.data);
        })
    }, []);
    const boxlist = jsonData.map((item) =>
    <BeautifulBox key={item.id} data={item} />
    );
    axios.defaults.baseURL = 'http://localhost:5000';
    const deletehistory = () => {
        axios.delete('/deletehistory').then((res) => {
            alert(res.data);
        })
    }


    return (
        //buat tombol hapus
        <Box sx={{ display: 'flex', flexDirection: 'column', p: 2, m: 1, bgcolor: 'background.paper' }}>
            <Button variant="contained" color="error" sx={{marginBottom: 2}} onClick={deletehistory}>Hapus History</Button>
            {boxlist}
        </Box>
  );
}
export default History;
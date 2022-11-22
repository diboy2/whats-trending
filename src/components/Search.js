import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Search({ fetchHashtagResults, instaAccountId, accessToken }) {
  const [ searchValue, setSearchValue ] = useState("");
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider', padding: "16px" }}>
        <TextField 
          variant="outlined"
          size='small' 
          fullWidth={true}
          value={searchValue}
          placeholder="Enter A Trending Word"
          onChange={(event) => setSearchValue(event.target.value.trim()) }
          InputProps={{
            endAdornment: 
            <Button 
              onClick={
                () => { 
                  setSearchValue("");
                  fetchHashtagResults(searchValue, instaAccountId, accessToken);
                }
              }
            >
              <SendIcon/>
            </Button>
            }}
          />
      </Box>

  );
}


export default Search;

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

function Filters() {
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs aria-label="basic tabs example">
        <Tab label="Item One" />
        <Tab label="Item Two" />
      </Tabs>
    </Box>
  );
}


export default Filters;

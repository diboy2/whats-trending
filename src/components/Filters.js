import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

function Filters({ filters }) {
  const handleChange = () => {};
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={filters.length-1} aria-label="basic tabs example">
        {
        filters.map((filter,index)=> <Tab label={filter} value={index}/>)
        }
      </Tabs>
    </Box>
  );
}


export default Filters;

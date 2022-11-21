import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

function Filters({ filters, filterResults, filterValue}) {
  const handleChange = (event, newValue) => {
    console.log("New value: ", newValue);
    filterResults(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs onChange={handleChange} value={filterValue} aria-label="basic tabs example">
        {filters.map(
          (filter) => <Tab label={filter} value={filter}/>
        )}
      </Tabs>
    </Box>
  );
}


export default Filters;

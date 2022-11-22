import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { DataStore } from '@aws-amplify/datastore';

function Filters({ setFilters, filters, filterResults, filterValue}) {
  const handleChange = (event, newValue) => {
    filterResults(filters.find((filter) => filter.id === newValue));
  };
  const deleteFilter = async (deletedFilter) => {
    await DataStore.delete(deletedFilter);
    setFilters([...(filters.filter((filter) => filter.id !== deletedFilter.id))]);
    filterResults(filters[0]);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs onChange={handleChange} value={filterValue.id} aria-label="basic tabs example">
        {
          filters.map(
            (filter) =>  {
              if(filter.id !== "0") {
                return (
                  <Tab label={filter.text} value={filter.id} 
                    icon={<IconButton onClick={() => deleteFilter(filter)}><ClearIcon /></IconButton>} 
                    iconPosition="right" />
                );
              }
              return <Tab label={filter.text} value={filter.id} />;
            }
          ) 
        }
      </Tabs>
    </Box>
  );
}


export default Filters;

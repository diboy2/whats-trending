import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
        
function TrendingContent({ content, isLoading }) {
  return (
    <Box className="App-trending-content" sx={{
      flexGrow: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      { 
        isLoading ?
        <CircularProgress /> :
        <ImageList cols={5}>
          {content.map((item, index) => (
            <ImageListItem key={index}>
              {
                item.media_type === "IMAGE" &&
                <img
                  src={`${item.media_url}&w=248&fit=crop&auto=format`}
                  srcSet={`${item.media_url}&w=248&fit=crop&auto=format&dpr=2 2x`}
                  maxWidth={248}
                  alt={"Failed to load"}
                  loading="lazy"
                />
              }
              <ImageListItemBar
                title={item.caption}
                subtitle={item.username}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    href={item.permalink}
                  >
                    <InstagramIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      }
    </Box>
    
  );
}


export default TrendingContent;

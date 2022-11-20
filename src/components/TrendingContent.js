import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

function TrendingContent({ content }) {
  return (
    <ImageList cols={4}>
      <ImageListItem key="Subheader" cols={4}>
        <ListSubheader component="div">What's Trending</ListSubheader>
      </ImageListItem>
      {content.map((item, index) => (

        <ImageListItem key={index}>
          <img
            src={`${item.media_url}&w=248&fit=crop&auto=format`}
            srcSet={`${item.media_url}&w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.caption}
            loading="lazy"
          />
          <ImageListItemBar
            // title={item.caption}
            subtitle={item.username}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                // aria-label={`info about ${item.caption}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}


export default TrendingContent;

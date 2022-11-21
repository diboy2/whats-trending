import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

function TrendingContent({ content }) {
  return (
    <ImageList cols={4}>
      {content.map((item, index) => (

        <ImageListItem key={index}>

          {
            item.media_type === "IMAGE" &&
            <img
              src={`${item.media_url}&w=248&fit=crop&auto=format`}
              srcSet={`${item.media_url}&w=248&fit=crop&auto=format&dpr=2 2x`}
              maxWidth={248}
              // alt={item.caption}
              loading="lazy"
            />
          }
          
          

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

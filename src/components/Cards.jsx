
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Cards = ({ data }) => {
 
  return (
    <Card sx={{ width: 345 }}>
      <CardActionArea sx={{ width: 345 }}>
        <CardMedia
          sx={{ height: 140, objectFit: "fill" }}
          image={data.attributes.coverImg.data.attributes.url}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.attributes.blogTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.attributes.blogDesc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Cards



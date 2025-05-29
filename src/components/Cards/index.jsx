import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Cards = ({ data }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        alignItems: "center",
        mb: 2,
        px: 2,
      }}
    >
      {data.map((hero) => (
        <div className="cards" key={hero.id}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 240 }}
              image={hero.image.url}
              title={hero.name}
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {hero.name}
              </Typography>

              {hero.powerstats ? (
                <Box>
                  {hero.powerstats.intelligence !== "null" && (
                    <Typography variant="body2" color="text.secondary">
                      Intelligence: {hero.powerstats.intelligence}
                    </Typography>
                  )}
                  {hero.powerstats.strength !== "null" && (
                    <Typography variant="body2" color="text.secondary">
                      Strength: {hero.powerstats.strength}
                    </Typography>
                  )}
                </Box>
              ) : (
                <Typography variant="body2" color="text.secondary">
                  No powerstats available
                </Typography>
              )}
            </CardContent>

            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </Box>
  );
};

export default Cards;

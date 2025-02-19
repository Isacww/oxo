import React from "react";
import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";

const CustomCard = ({ title, description, image, layout = "default" }) => {
  return (
    <Card 
      sx={{ 
        maxWidth: 345, 
        m: 2, 
        backgroundColor: "transparent", 
        boxShadow: "none",
        position: "relative", 
        display: layout === "side" ? "flex" : "block",
        alignItems: "center"
      }}
    > 
      {/* Background Image Layout */}
      {layout === "background" && image && (
        <Box 
          sx={{
            position: "absolute",
            top: 0, left: 0, width: "100%", height: "100%",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5,  // Adjust transparency
            zIndex: 0
          }}
        />
      )}

      {/* Default & Side Layouts */}
      {layout !== "background" && image && (
        <CardMedia 
          component="img" 
          height={layout === "side" ? "100%" : "140"} 
          image={image} 
          alt={title} 
          sx={{ 
            backgroundColor: "transparent", 
            objectFit: "contain",
            width: layout === "side" ? "40%" : "100%" // Adjust size in side layout
          }}
        />
      )}

      {/* Text Content */}
      <CardContent sx={{ zIndex: 1, position: layout === "background" ? "relative" : "static" }}>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;

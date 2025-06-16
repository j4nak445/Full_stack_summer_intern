import React from 'react';
import { Grid, Card, CardContent, CardActions, Typography, Button, CardMedia } from '@mui/material';

const cardData = [
  { 
    title: "Card 1", 
    content: "This is the first card.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  { 
    title: "Card 2", 
    content: "This is the second card.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  { 
    title: "Card 3", 
    content: "This is the third card.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  { 
    title: "Card 4", 
    content: "This is the fourth card.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  { 
    title: "Card 5", 
    content: "This is the fifth card.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  { 
    title: "Card 6", 
    content: "This is the sixth card.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  }
];

const Cards = () => (
  <Grid container spacing={3} sx={{ mt: 4 }}>
    {cardData.map((card, idx) => (
      <Grid item xs={12} sm={6} md={4} key={idx}>
        <Card>
          <CardMedia
            sx={{ height: 180 }}
            image={card.image}
            title={card.title}
          />
          <CardContent>
            <Typography variant="h6">{card.title}</Typography>
            <Typography variant="body2">{card.content}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Read More</Button>
          </CardActions>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default Cards;
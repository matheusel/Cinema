import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Card2({ nome, descricao, page }) {
  return (
    <Card component={Link} to={page} sx={{ mx: 'auto', my: '100px', maxWidth: 900, minWidth: 200, textDecoration: 'none', textAlign: "center", justifyContent: "center", alignItems: "center", display: "block", bgcolor: "#161F30", color: "white" }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {nome}
          </Typography>
          <Typography variant="body2">
            {descricao}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
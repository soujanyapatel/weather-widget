import './Infobox.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function Infobox({info}){
    const initial_url = "https://images.unsplash.com/photo-1545134969-8debd725b007?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const hot_url="https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.webp?s=1024x1024&w=is&k=20&c=FaZwWyck7yOcZQGFIFUsChGv532Wh8eN9nrk5tMyCkg=";
    const cold_url="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const rain_url="https://images.unsplash.com/photo-1584269655525-c2ec535de1d0?q=80&w=1491&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

   

    return(
        <div className="infobox">
            
            <div className='cardcontainer'>
              <br></br>
            <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image= {info.humidity>80? rain_url: info.temp>15 ? hot_url: cold_url}
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
       {info.city} {
         info.humidity>80?
          <ThunderstormIcon />: 
          info.temp>15 ? 
          <WbSunnyIcon />: 
          < AcUnitIcon/>
       }

      </Typography>
      <Typography variant="body2" color="text.secondary">
       <div>Temperature: {info.temp}</div>
       <div>humidity: {info.humidity}&deg;C</div>
       <div>Min temp: {info.tempmin}</div>
       <div>Max temp:  {info.tempmax}</div>
       <div>weather description is {info.weather},weather feels like:  {info.feelslike}&deg;C </div>
      </Typography>
    </CardContent>
  </Card>
  </div>

        </div>
    );
}

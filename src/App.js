
import './App.css';
import {Box,Button, Typography,AppBar,Card,CardActions,CardContent,CssBaseline,Grid,Toolbar,Container,CardMedia} from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';





function App() {

const array = ['https://images.pexels.com/photos/18078984/pexels-photo-18078984/free-photo-of-man-arm-hands-people.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',"https://images.pexels.com/photos/17901583/pexels-photo-17901583/free-photo-of-swimming-boats-in-a-bay.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/17485819/pexels-photo-17485819/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-represents-the-ways-in-which-ai-can-solve-important-problems-it-was-created-by-vincent-schwenk-as-part-of-the-visualis.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/18091953/pexels-photo-18091953/free-photo-of-kolchigina-photo-worldphotoday-photoberlin.jpeg","https://images.pexels.com/photos/17908342/pexels-photo-17908342/free-photo-of-aerial-view-of-a-sydney-australia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/17824719/pexels-photo-17824719/free-photo-of-heron-in-a-stream.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/13018720/pexels-photo-13018720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/17907023/pexels-photo-17907023/free-photo-of-white-vintage-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://images.pexels.com/photos/17685526/pexels-photo-17685526/free-photo-of-sea-city-dawn-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"]


  return (
 
     <>
     <CssBaseline/>
    
      <AppBar position='relative' color='primary'>
        <Toolbar >
          <PhotoCameraIcon sx={{marginRight:"10px"}}/>
          <Typography variant="h6">PHOTO GALLERY</Typography>

        </Toolbar>

      </AppBar>

      <main style={{marginTop:"100px"}}>
      <div>
        <Container  maxWidth="sm">
          <Typography variant="h2" align='center' color="textPrimary" gutterBottom>PHOTO GALLERY</Typography>
          <Typography variant="h5" align='center' color="textPrimary" paragraph>Explore our captivating online photo gallery, built with Material UI. Immerse yourself in a visual journey, featuring stunning landscapes, vibrant portraits, and memorable moments. Discover the beauty of the world through our lens.</Typography>
          <div>
            <Grid container spacing={2} justifyContent="center" marginTop="40px" >
             
             <Grid item>
              <Button variant='contained' color="secondary">
                See my pictures

              </Button>

              </Grid>
             <Grid item>
              <Button variant='contained' color="primary">
                See my videos

              </Button>

              </Grid>

            </Grid>
           
          </div>


           
        </Container>
        
     </div>
    <Container sx={{padding:"20px 0px "}} maxWidth="md">
      <Grid container spacing={4}>
          {array.map((card)=>(
        <Grid item key={card} xs={12} sm={6} md={4} >
          <Card sx={{height:"100%",display:"flex",flexDirection:"column"}} >

            <CardMedia sx={{paddingTop:"56.25%"}}
            image={card}
            title = "image title"
            
            >
            </CardMedia>
            <CardContent sx={{flexGrow:"1"}}> 
            <Typography variant='h5' gutterBottom>
              heading
            </Typography>
            <Typography>
            this is a media card
            </Typography>
            </CardContent>
            <CardActions>
              <Button  size="small" color='primary'>view</Button>
              <Button  size="small" color='primary'>edit</Button>
            </CardActions>
          </Card>

        </Grid>

))}
 </Grid>
    </Container>
      </main>
    
     <footer style={{backgroundColor:"white" 
    
    ,padding:"50px 0"
    }}>
      <Typography variant="h6" align='center' color="default" gutterBottom>
     footer
      </Typography>
      <Typography variant="subtitle1" align='center' color="textSecondary" gutterBottom>
    this is the footer
      </Typography>


     </footer>
     
     </>
   
     
  );
}

export default App;

import Head from 'next/head'
import Layout from '../Components/Layout'
import CardMedia from '../Components/CardMedia';
import data from '../data';
import { 
  GridContainer,
  Grid,
  Card, 
  CardActionArea,
  CardContent,
  CardActions,
  Title,
  Button,
} from '../styles/Home/home';

const Home:React.FC = () => {

  const dataItems = data;

  return (
    <div>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://www.omninews.com.br/wp-content/uploads/2019/09/Alecive-Flatwoken-Apps-Amazon.ico" />
      </Head>

      <main>
        <Layout>
          <div>
            <h1 style={{marginLeft: 100, marginTop: 30, fontWeight: 'bold'}}>Products</h1>
            <GridContainer>
                {dataItems.products.map((item, index) => (
                  <Grid key={index}>
                    <Card>
                      <CardActionArea>
                        <CardMedia 
                          title={item.name}
                          image={item.image}
                        />
                        <CardContent>
                          <Title>{item.name}</Title>
                        </CardContent>
                        <CardActions>
                          <Title>${item.price}</Title>
                          <Button>Buy Now</Button>
                        </CardActions>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
            </GridContainer>
          </div>
        </Layout>
      </main>
    </div>
  )
}

export default Home;
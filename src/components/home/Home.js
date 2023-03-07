import Header from "../header/header";
import Tours from "../tours/Tours";
import Footer from "../footer/footer";

function Home(){
return(
<>
<Header/>
<Tours arrData={data}/>
<Footer/>


</>
);

}

export default Home;
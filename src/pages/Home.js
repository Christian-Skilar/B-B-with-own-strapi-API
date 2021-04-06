import Container from "react-bootstrap/Container";
import Heading from "../components/Heading";

function Home() {
    return (
        <>
        <Container>
            <Heading heading="Home Page" />

            <div>
                <img src="../img/nightcity.jpg" alt="city"/>
            </div>

        </Container>
        </>
    )
}

export default Home

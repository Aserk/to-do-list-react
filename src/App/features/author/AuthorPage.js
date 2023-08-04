import { Container } from "../../common/Container/styled";
import Section from "../../common/Section";

export default () => (
    <Container>
        <header>
            <h1>O autorze</h1>
        </header>
        <Section
            title="Rafał Jabłoński"
            body={
                <>
                    Mam na imię Rafał. Lubię oglądać anime, uprawiać różne sporty i oglądać zachody słońca. 
                    Pochodzę z Mazur, ale kilka lat mieszkałem w Gdańsku. 
                    Wyjechałem na studia, a później zacząłem pracować w gastronomii.
                </>
            }
        />
    </Container>
);
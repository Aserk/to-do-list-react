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
                    <p>Mam na imię <strong>Rafał</strong> i obecnie <strong>28 lat</strong>. Jestem pasjonatem programowania, szczególnie frond-endu.</p>
                    <p>Aktualnie poświęcam czas na zgłębienie tajników <em>Reacta</em>.
                        W planach mam również rozwijanie się w kierunku <em>TypeScript</em>, aby poszerzyć moje umiejętności.</p>
                    <p>Uwielbiam tworzyć piękne i interaktywne interfejsy, które zapewniają użytkownikom wspaniałe doświadczenia.</p>
                    <p>Oprócz tego, uwielbiam zachody słońca - te magiczne momenty natury zawsze mnie fascynują.</p>
                    <p>W wolnych chwilach często też oglądam <strong>anime</strong>, które dostarcza mi emocji i ciekawych historii.</p>
                </>
            }
        />
    </Container>
);
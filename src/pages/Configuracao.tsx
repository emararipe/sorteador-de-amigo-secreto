import Card from '../components/Card/Card'
import Formulario from '../components/Formulario/Formulario'
import Lista from '../components/Lista'
import Rodape from '../components/Rodape'

const Configuracao = () => {
    return (
        <Card>
            <section>
                <h2>Vamos começar!</h2>
                <Formulario />
                <Lista />
                <Rodape />
            </section>
        </Card>
    )
}

export default Configuracao
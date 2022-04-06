import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SelectOption } from '../../components/SelectOption';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormsContext'
import * as C from './styles';

export const FormStep2 = () => {
    const history = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            history('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }
    }, []);

    const handleNextStep = () => {
        if (state.name !== '') {
            history('/step3');
        } else {
            alert("Preencha os dados.")
        }

    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que condiz com seu estado atual.</p>

                <hr />

                <SelectOption
                    title="Sou iniciante"
                    description="Comecei a programar a menos de 2 anos"
                    icon="👶"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />
                <SelectOption
                    title="Sou Programador"
                    description="Já programo a 2 anos ou mais"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />

                <Link to="/" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    );
}
import { Router } from './router';
import { FormProvider } from './contexts/FormsContext'
const App = () => {
  return (
    <FormProvider>
      <Router />
    </FormProvider>
  );
}

export default App;

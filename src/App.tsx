import './App.css';
import { RestfulProvider } from 'restful-react';
import { FormComponent } from './form';
import { FormDisplayComponent } from './formDisplay';
import { LibrarianProvider, useLibrarians } from './providers/librarian/index';

function RestfulAppExample() {
  const { displayMode } = useLibrarians();

  return <div className="App">{!displayMode ? <FormComponent /> : <FormDisplayComponent />}</div>;
}

export const RestfulAppExampleWithProviders = () => {
  return (
    <RestfulProvider base="https://localhost:44309">
      <LibrarianProvider>
        <RestfulAppExample></RestfulAppExample>
      </LibrarianProvider>
    </RestfulProvider>
  );
};

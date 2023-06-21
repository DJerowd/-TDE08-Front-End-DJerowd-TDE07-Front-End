import React from 'react';
import TodosList from './TodosList';

function App() {
  return (
    <TodosList />
  );
}

export default App;

/*
import React from "react";
import Form from "./components/Form";

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <Form />
      </header>
    </div>
  );
};

export default App;
*/


/*
import React from "react";
import NumberList from "./components/NumberList";
import UserInput from "./components/UserImput";
import Card from "./components/Card";

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <Card bgColor="#7070AF">
          <NumberList />
        </Card>

        <Card bgColor="#7070AF">
          <UserInput />
        </Card>
      </header>
    </div>
  );
};

export default App;
*/



/*
import React from 'react';
import UserInfo from './components/UserInfo';

const App = () => {
  const items = [
    {
      name: 'Teste nome',
      birthday: '10/10/10',
      email: "teste@teste.com"
    },
    {
      name: 'Teste nome 2',
      birthday: '10/10/10',
      email: "teste2@teste.com"
    },
    {
      name: 'Teste nome 3',
      birthday: '10/10/10',
      email: "teste3@teste.com"
    },
  ];

  return (
    <div>
      {items.map((item, index) => (
        <UserInfo
          key={index}
          name={item.name}
          birthday={item.birthday}
          email={item.email}
        />
      ))}
    </div>
  );
};

export default App;
*/



/*
import React from 'react';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default App;
*/

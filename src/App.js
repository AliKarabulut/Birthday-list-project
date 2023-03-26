import { useState } from "react";
import data from "./data/data";
import List from "./components/List/List";
import styles from "./App.module.css";
import Form from "./components/Form/Form";

function App() {
  const [people, setPeople] = useState(data);
  const [click, setClick] = useState(false);

  const abc = (e) => {
    const newPerson = { ...e, id: people.length + 1 };
    setPeople([...people, newPerson]);
    setClick(!click);
  };
  const clickHandler = () => {
    setClick(!click);
  };

  const handleDeletePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {click && (
          <div>
            <Form onPeople={abc}></Form>
            <button className={styles.btn} onClick={clickHandler}>
              Geri Dön
            </button>
          </div>
        )}
        {!click && (
          <div>
            {" "}
            <h3>{people.length} Doğum Günü Var</h3>
            <List people={people} handleDeletePerson={handleDeletePerson} />
            <button
              className={`${styles.btn} ${styles.addBtn}`}
              onClick={clickHandler}
            >
              Ekle
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;

import { Fragment } from "react";
import UseAnimations from "react-useanimations";
import trash from "react-useanimations/lib/trash";

import styles from "./List.module.css";

const List = ({ people, handleDeletePerson }) => {
  return (
    <Fragment>
      {people.map((person) => {
        const { id, name, birthday, image } = person;
        return (
          <div key={id} className={styles.wrapper}>
            <div key={id} className={styles.person}>
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>Doğum günü: {birthday} </p>
              </div>
            </div>
            <UseAnimations
              onClick={() => handleDeletePerson(id)}
              animation={trash}
            />
          </div>
        );
      })}
    </Fragment>
  );
};

export default List;

import { useState } from "react";
import axios from "axios";

import SortJson from "../../utils/sort-json";

var send = true;

function PersonItem() {
  const [users, setUsers] = useState([]);

  if (send) {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        send = false;
        response.data.sort(SortJson("name"));
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(`Erro na api: ${error}`);
      });
  }

  function removeUser(id): void {
    const newList = users.filter((remove) => remove.id !== id);

    setUsers(newList);
  }

  return (
    <>
      {users.length > 0 &&
        users?.map((user) => (
          <div key={user.id} className="personItem">
            <div>
              <p>
                <strong>{user.name}</strong> ({user.company.name})
              </p>
              <p>E-mail: {user.email}</p>
              <p>Phone: {user.phone}</p>
            </div>
            <button onClick={() => removeUser(user.id)}>X</button>
          </div>
        ))}
    </>
  );
}

export default PersonItem;

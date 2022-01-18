import PersonItem from "../person-item";

function PersonList() {
  return (
    <div className="container">
      <div className="row border borderTop"></div>
      <div className="row topTitle">
        <h1>Lista de Usuários</h1>
      </div>
      <div className="row bodyList">
        <PersonItem />
      </div>
    </div>
  );
}

export default PersonList;

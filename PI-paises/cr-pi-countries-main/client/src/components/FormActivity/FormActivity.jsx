const FormActivity = () => {
  return (
    <div>
      <h1>Crear Actividad Turistica</h1>
      <form>
        <label>Nombre</label>
        <input
          className="inputFormAct"
          type="text"
          placeholder="Nombre de su actividad"
          name="name"
        ></input>
        <label>Dificultad</label>
        <input
          className="inputFormAct"
          type="number"
          placeholder="Valor numerico 1 a 10"
          name="dificulty"
        ></input>
        <label>Duración</label>
        <input
          className="inputFormAct"
          type="number"
          placeholder="Duración en horas"
          name="duration"
        ></input>
        <label>Temporada</label>
        <input
          className="inputFormAct"
          type="text"
          placeholder="Temporada de su actividad"
          name="season"
        ></input>
        <label>País/es</label>
        <input
          className="inputFormAct"
          type="text"
          placeholder="País/es de su actividad"
          name="country"
        ></input>
        <button>Crear</button>
      </form>
    </div>
  );
};

export default FormActivity;

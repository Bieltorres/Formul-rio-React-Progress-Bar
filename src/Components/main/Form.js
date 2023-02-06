import React, { useState, Fragment } from "react";
import "./style/index.css";

const Form = () => {
  const initialState = {
    fullName: "",
    email: "",
    maritalStatus: "",
    genre: "",
  };

  const [data, setData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((data) => {
      const newData = { ...data, [name]: value };
      return newData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(initialState);
  };

  const handleClick = () => {
    alert("Formulário enviado com sucesso!");
  };

  const calculateProgress = () => {
    let value = 0;
    let amountToAdd = 25;

    if (data.fullName) {
      const expodString = data.fullName.split(" ");
      if (expodString[1]) {
        value += amountToAdd;
      }
    }
    if (data.email) {
      const validateEmail = data.email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      if (validateEmail) {
        value += amountToAdd;
      }
    }
    if (data.maritalStatus) {
      value += amountToAdd;
    }
    if (data.genre) {
      value += 25;
    }

    return value;
  };
  calculateProgress();

  return (
    <Fragment>
      <h3>Formulário com Barra de Progresso</h3>

      <main>
        <h1>progresso do formulário</h1>
        <div className="bar-container">
          <div
            className="bar"
            style={{ width: `${calculateProgress()}%` }}
          ></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Nome Completo</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={data.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="state-civi">Estado Civil</label>

            <select
              name="maritalStatus"
              value={data.maritalStatus}
              onChange={handleChange}
            >
              <option value="">selecione...</option>
              <option value="solteiro">Solteiro</option>
              <option value="casado">Casado</option>
              <option value="divorciado">Divorciado</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="">Gênero</label>
            <div className="radios-container">
              <span>
                <input
                  type="radio"
                  name="genre"
                  value="masculino"
                  onChange={handleChange}
                  checked={data.genre === "masculino"}
                />
                Masculino
              </span>
              <span>
                <input
                  type="radio"
                  name="genre"
                  value="feminino"
                  onChange={handleChange}
                  checked={data.genre === "feminino"}
                />
                Feminino
              </span>
            </div>
          </div>
          <button onClick={handleClick} disabled={calculateProgress() !== 100}>
            Enviar Formulário
          </button>
        </form>
      </main>
    </Fragment>
  );
};

export default Form;

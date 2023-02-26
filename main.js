const inputs = document.querySelectorAll("#inputs input");

// Expresión regular
const expresiones = {
  hashtag: /^#[A-Z]([a-z0-9]{1,13})$/,
  correo:
    /^[a-zA-Z]+[a-zA-Z0-9]+[-\_\.]?[a-zA-Z0-9]+@[a-zA-Z][a-zA-Z0-9]+\.[a-zA-Z0-9]+\.?[a-zA-Z0-9]+$/,
  numComplejos:
    /[-]?\d+\.?\d+[-|+]\d+\.?(\d+)?i$/,
};

// ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$

const resultHashTag = document.querySelector("#resultHashTag");
const resultCorreo = document.querySelector("#resultCorreo");
const resultNumCompejos = document.querySelector("#resultNumCompejos");

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "hashtag":
      if (expresiones.hashtag.test(e.target.value)) {
        resultHashTag.textContent = `Cadena validada ${e.target.value}, es un #Hashtag valido`;
        resultHashTag.style.color = "black";
        e.target.style.boxShadow = "3px 3px 0px 0px black";
        e.target.style.border = "black solid 2px";
      } else {
        resultHashTag.textContent = `${e.target.value}, no es una etiqueta (#Hasthtag)`;
        resultHashTag.style.color = "#e74c3c";
        e.target.style.boxShadow = "3px 3px 0px 0px #e74c3c";
        e.target.style.border = "#e74c3c solid 2px";
      }
      break;
    case "correo":
      if (expresiones.correo.test(e.target.value)) {
        resultCorreo.textContent = `Cadena validada ${e.target.value}, es un correo valido`;
        resultCorreo.style.color = "black";
        e.target.style.boxShadow = "3px 3px 0px 0px black";
        e.target.style.border = "black solid 2px";
      } else {
        resultCorreo.textContent = `${e.target.value}, no es un correo valido`;
        resultCorreo.style.color = "#e74c3c";
        e.target.style.boxShadow = "3px 3px 0px 0px #e74c3c";
        e.target.style.border = "#e74c3c solid 2px";
      }
      break;

    case "numComplejos":
      if (expresiones.numComplejos.test(e.target.value)) {
        resultNumCompejos.textContent = `Cadena validada ${e.target.value}, es un numero complejo valido`;
        resultNumCompejos.style.color = "black";
        e.target.style.boxShadow = "3px 3px 0px 0px black";
        e.target.style.border = "black solid 2px";
      } else {
        resultNumCompejos.textContent = `${e.target.value}, no es un numero complejo valido`;
        resultNumCompejos.style.color = "#e74c3c";
        e.target.style.boxShadow = "3px 3px 0px 0px #e74c3c";
        e.target.style.border = "#e74c3c solid 2px";
      }
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

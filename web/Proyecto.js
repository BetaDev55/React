  window.input = function (a) {
    var prompted = prompt(a);
    if (!isNaN(prompted)) return parseInt(prompted);
    return prompted;
  };

  window.output = function (a) {
    document.write(a);
  };

  window.clear = function () {
    document.body.innerHTML = ``;
  };
  var nombre = prompt("Tu nombre.");

 /* const bootstrap = document.querySelectorAll("#bootstrap path");
  console.log("bootstrap");
  for (let i = 0; i < bootstrap.length; i++) {
    console.log(`letter ${i} is ${bootstrap[i].getTotalLength()}`);
  }

  const html = document.querySelectorAll("#html path");
  console.log("html");
  for (let i = 0; i < html.length; i++) {
    console.log(`letter ${i} is ${html[i].getTotalLength()}`);
  }

  const css = document.querySelectorAll("#css path");
  console.log("css");
  for (let i = 0; i < css.length; i++) {
    console.log(`letter ${i} is ${css[i].getTotalLength()}`);
  }

  const js = document.querySelectorAll("#js path");
  console.log("js");
  for (let i = 0; i < js.length; i++) {
    console.log(`letter ${i} is ${js[i].getTotalLength()}`);
  }

  const react = document.querySelectorAll("#react path");
  console.log("react");
  for (let i = 0; i < react.length; i++) {
    console.log(`letter ${i} is ${react[i].getTotalLength()}`);
  }

  const svg = document.querySelectorAll("#svg path");
  console.log("svg");
  for (let i = 0; i < svg.length; i++) {
    console.log(`letter ${i} is ${svg[i].getTotalLength()}`);
  }*/

  class Proyecto extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visible: 0,
        color: "",
        color1: "",
        fsize: "",
        borde: "",
        color2: "transparent",
        center: "",
        justify: "",
        align: "",
        btn: "order-2",
        btn1: "",
        h1: " ",
        between: "d-flex",
        checkForm: "",
        checkBox: "",
        checked: "",
        checked1: "",
        checked2: "",
        checked3: "",
        checked4: "",
        btnBorde: "",
        displayH: "d-none",
        displayC: "d-none",
        displayJ: "d-none",
        displayB: "d-none",
        displayR: "d-none",
        displayS: "d-none",
      };
    }
    changeV1 = (event) => {
      event.preventDefault();
      this.setState({
        visible: this.state.visible + 1,
      });
    };
    goBack = (event) => {
      event.preventDefault();
      this.setState({
        visible: this.state.visible - 1,
      });
    };
    goBackH1 = (event) => {
      event.preventDefault();
      this.setState({
        visible: this.state.visible - 1,
      });
      if (this.state.fsize >= 34) {
        this.setState({
          h1: "h11",
        });
      }
    };
    cambioDato = (event) => {
      var aux = event.target.value;
      this.setState({
        color: aux,
      });
    };
    cambioDato1 = (event) => {
      var aux1 = event.target.value;
      this.setState({
        color1: aux1,
      });
    };
    cambioDato2 = (event) => {
      var aux2 = event.target.value;
      if (aux2 >= 16 && aux2 <= 50) {
        this.setState({
          fsize: aux2,
        });
      }
    };
    cambioDato3 = (event) => {
        this.setState({
          borde: "2px 0 " +
          this.state.color2 +
          "," +
          "-2px 0 " +
          this.state.color2 +
          "," +
          "0 2px " +
          this.state.color2 +
          "," +
          "0 -2px " +
          this.state.color2 +
          "," +
          "1px 1px " +
          this.state.color2 +
          "," +
          "-1px -1px " +
          this.state.color2 +
          "," +
          "1px -1px " +
          this.state.color2 +
          "," +
          "-1px 1px " +
          this.state.color2,
          checked: "checked",
        });
    };
    cambioDato4 = (event) => {
      var aux4 = event.target.value;
      if (aux4.length >= 3) {
        this.setState({
          color2: aux4,
        });
      } else {
        this.setState({
          color2: "transparent",
        });
      }
    };
    cambioDato5 = (event) => {
      if (document.getElementById("checkbox1").checked) { 
        this.setState({
          checkForm: "d-flex form-switch",
          checkBox: "checkBox form-check-input order-2 position-relative mb-2",
          checked1: "checked"
        });
      } else {
        this.setState({
          checkForm: "",
          checkBox: "",
          checked1: "",
        });
      }
    };
    cambioDato6 = (event) => {
      if (document.getElementById("checkbox2").checked) { 
        this.setState({
          btn: " btn btn-success w-50 order-2",
          btn1: "btn btn-danger w-50",
          btnBorde: "btn btn-primary w-50 justify-content-center",
          between: "d-flex justify-content-around",
          checked2: "checked",
        });
      } else {
        this.setState({
          btn: "order-2",
          btn1: "",
          between: "d-flex",
          checked2: "",
        });
      }
    };
    cambioDato7 = (event) => {
      if (document.getElementById("checkbox3").checked) { 
        this.setState({
          center: "flex",
          justify: "center",
          align: "center",
          checked3: "checked"
        });
      } else {
        this.setState({
          center: "",
          justify: "",
          align: "",
          block: "",
          checked3: ""
        });
      }
    };
    cambioDato8 = (event) => {
      if (document.getElementById("checkbox4").checked) {
        this.setState({
          fade: "fadeIn ",
          duration: "2s ",
          status: "infinite ",
          checked4: "checked",
        });
      } else {
        this.setState({
          fade: "",
          duration: "",
          status: "",
          checked4: "",
        });
      }
    };
    displayH = (event) => {
      this.setState({
        displayH: "d-flex",
        displayC: "d-none",
        displayJ: "d-none",
        displayB: "d-none",
        displayR: "d-none",
        displayS: "d-none",
      });
    }
    displayC = (event) => {
      this.setState({
        displayH: "d-none",
        displayC: "d-flex",
        displayJ: "d-none",
        displayB: "d-none",
        displayR: "d-none",
        displayS: "d-none",
      });
    }
    displayJ = (event) => {
      this.setState({
        displayH: "d-none",
        displayC: "d-none",
        displayJ: "d-flex",
        displayB: "d-none",
        displayR: "d-none",
        displayS: "d-none",
      });
    }
    displayB = (event) => {
      this.setState({
        displayH: "d-none",
        displayC: "d-none",
        displayJ: "d-none",
        displayB: "d-flex",
        displayR: "d-none",
        displayS: "d-none",
      });
    }
    displayR = (event) => {
      this.setState({
        displayH: "d-none",
        displayC: "d-none",
        displayJ: "d-none",
        displayB: "d-none",
        displayR: "d-flex",
        displayS: "d-none",
      });
    }
    displayS = (event) => {
      this.setState({
        displayH: "d-none",
        displayC: "d-none",
        displayJ: "d-none",
        displayB: "d-none",
        displayR: "d-none",
        displayS: "d-flex",
      });
    }
    render() {
      if (this.state.visible == 0) {
        return (
          <div
            className="container-fluid size"
            style={{
              background: this.state.color,
              color: this.state.color1,
              fontSize: this.state.fsize + "px",
              textShadow: this.state.borde,
              display: this.state.center,
              alignItems: this.state.align,
              justifyContent: this.state.justify,
            }}
          >
            <form className="bg-transparent" onSubmit={this.changeV1}>
              <input
                className="input opacity-0 d-flex"
                type="text"
                autoFocus
              ></input>
              <div className="container">
                <div
                  style={{
                    animation:
                      this.state.fade + this.state.duration + this.state.status,
                  }}
                >
                  <h1 className={this.state.h1}>{"Hola " + nombre}</h1>
                  <p>
                    El objetivo de este sitio, es que entiendas las bases de como
                    funciona HTML, CSS, JS & React
                  </p>
                  <p>
                    Ahora mismo, solo estamos usando HTML, como puedes observar
                    hay un botón de siguiente "→", sin embargo, es muy poco
                    intuitivo y además es poco agradable a la vista, intenta darle
                    clic.
                  </p>
                </div>
                <button className={this.state.btn} type="submit">
                  →
                </button>
              </div>
            </form>
          </div>
        );
      }
      if (this.state.visible == 1) {
        return (
          <div
            className="container-fluid size"
            style={{
              background: this.state.color,
              color: this.state.color1,
              fontSize: this.state.fsize + "px",
              textShadow: this.state.borde,
            }}
          >
            <form className="bg-transparent" onSubmit={this.changeV1}>
              <input
                className="input opacity-0 d-flex"
                type="text"
                autoFocus
              ></input>
              <div className="container">
                <div
                  style={{
                    animation:
                      this.state.fade + this.state.duration + this.state.status,
                  }}
                >
                  <p>
                    Por otra parte, con CSS podemos dar distintos estilos a
                    nuestro sitio.
                  </p>
                  <p>
                    Intentemos darle un poco de color y vida al sitio usando CSS
                  </p>
                </div>
                <div className={this.state.between}>
                  <button className={this.state.btn} type="submit">
                    →
                  </button>
                  <button className={this.state.btn1} onClick={this.goBackH1}>
                    ←
                  </button>
                </div>
              </div>
            </form>
          </div>
        );
      }
      if (this.state.visible == 2) {
        return (
          <div
            className="container-fluid size"
            style={{
              background: this.state.color,
              color: this.state.color1,
              fontSize: this.state.fsize + "px",
              textShadow: this.state.borde,
            }}
          >
            <form className="form-group" onSubmit={this.changeV1}>
              <div className="container">
                <div
                  style={{
                    animation:
                      this.state.fade + this.state.duration + this.state.status,
                  }}
                > 
                  <p>
                    ¿Cual es tu color favorito? (Puedes usar colores en inglés o
                    codigo hexadecimal)
                  </p>
                </div>
                <input
                  id="input"
                  key="1"
                  className="form-control"
                  autoFocus
                  type="text"
                  onChange={this.cambioDato}
                ></input>
                <div className={this.state.between}>
                  <button className={this.state.btn} type="submit">
                    →
                  </button>
                  <button className={this.state.btn1} onClick={this.goBack}>
                    ←
                  </button>
                </div>
              </div>
            </form>
            <div className="box container d-lg-flex justify-content-around">
              <a
                href="https://www.w3schools.com/cssref/css_colors.php"
                target="_blank"
              >
                <button className="colorsBtn mb-3 bg-info">
                  Clickeame para ver una lista de los colores de css en inglés y
                  en hexadecimal.
                </button>
              </a>
                          <img
                className="colorsImg"
                src="./Recursos/instrucciones.png"
              ></img>
            </div>
            </div>
        );
      }
      if (this.state.visible == 3) {
        return (
          <div
            className="container-fluid size"
            style={{
              background: this.state.color,
              color: this.state.color1,
              fontSize: this.state.fsize + "px",
              textShadow: this.state.borde,
            }}
          >
            <form className="form-group" onSubmit={this.changeV1}>
              <div className="container">
                <div
                  style={{
                    animation:
                      this.state.fade + this.state.duration + this.state.status,
                  }}
                >
                  <p>
                    Como puedes ver, si eliges un color muy oscuro, debido a que
                    el color del texto es negro, entonces no se ve muy bien
                  </p>
                  <p>
                    ¡Elige un color para el texto! (Puedes usar colores en inglés
                    o codigo hexadecimal)
                  </p>
                </div>
                <input
                  id="input"
                  key="2"
                  className="form-control"
                  autoFocus
                  type="text"
                  onChange={this.cambioDato1}
                ></input>
                <div className={this.state.between}>
                  <button className={this.state.btn} type="submit">
                    →
                  </button>
                  <button className={this.state.btn1} onClick={this.goBack}>
                    ←
                  </button>
                </div>
              </div>
            </form>
            <div className="box container d-lg-flex justify-content-around">
              <a
                href="https://www.w3schools.com/cssref/css_colors.php"
                target="_blank"
              >
                <button className="colorsBtn mb-3 bg-info">
                  Clickeame para ver una lista de los colores de css en inglés y
                  en hexadecimal.
                </button>
              </a>
              <img
                className="colorsImg"
                src="./Recursos/instrucciones.png"
              ></img>
              </div>
            </div>
        );
      }
      if (this.state.visible == 4) {
        return (
          <div
            className="container-fluid size"
            style={{
              background: this.state.color,
              color: this.state.color1,
              fontSize: this.state.fsize + "px",
              textShadow: this.state.borde,
              display: this.state.center,
              alignItems: this.state.align,
              justifyContent: this.state.justify,
            }}
          >
            <form className="form-group" onSubmit={this.changeV1}>
              <div className="container">
                <div
                  style={{
                    animation:
                      this.state.fade + this.state.duration + this.state.status,
                  }}
                >
                  <p>
                    Sin embargo, cambiar el color del texto no es la única manera
                    de hacerlo más "distinguible" podemos probar a subir el tamaño
                    de la fuente
                  </p>
                  <p>
                    ¡Elige un tamaño de letra! (Puedes usar cualquier valor entre
                    16 y 50)
                  </p>
                </div>
                <input
                  id="input"
                  key="3"
                  className="form-control"
                  autoFocus
                  type="number"
                  onChange={this.cambioDato2}
                ></input>
                <div className={this.state.between}>
                  <button className={this.state.btn} type="submit">
                    →
                  </button>
                  <button className={this.state.btn1} onClick={this.goBack}>
                    ←
                  </button>
                </div>
              </div>
            </form>
          </div>
        );
      }
      if (this.state.visible == 5) {
        return (
          <div
            className="container-fluid size"
            style={{
              background: this.state.color,
              color: this.state.color1,
              fontSize: this.state.fsize + "px",
              textShadow: this.state.borde
            }}
          >
            <form className="form-group" onSubmit={this.changeV1}>
              <div className="container">
                <div
                  style={{
                    animation:
                      this.state.fade + this.state.duration + this.state.status,
                  }}
                >
                  <p>
                    Sin embargo, tambien podemos incluso agregar un borde a la
                    letra, de este modo sería aún más visible.
                  </p>
                  {/*TODO Hacer responsive este botón.*/}
                  <p>¿Te gustaría agregar un borde?</p>
                </div>
                <div className={this.state.checkForm}>
                </div>
                <div
                  style={{
                    animation:
                      this.state.fade + this.state.duration + this.state.status,
                  }}
                >
                  <p>
                    Elige el color del borde (Puedes usar colores en inglés o
                    codigo hexadecimal)
                  </p>
                  <p>
                    Para eliminar el borde, simplemente deja la casilla del color en blanco.
                    </p>
                    <p>Recuerda clickear el botón de "Aplicar cambios" para cambiar el color.</p>
                </div>
                <input
                  id="input"
                  key="5"
                  className="form-control"
                  type="text"
                  onChange={this.cambioDato4}
                ></input>
                <div className={this.state.between}>
                  <input className={this.state.btnBorde} type="button" value="¡Aplicar borde!" onClick={this.cambioDato3} id="inputBorde" >
                  </input>
                  </div>
                <div className={this.state.between}>
                  <button className={this.state.btn} type="submit">
                    →
                  </button>
                  <button className={this.state.btn1} onClick={this.goBack}>
                    ←
                  </button>
                </div>
              </div>
            </form>
            <div className="box container d-lg-flex justify-content-around">
              <a
                href="https://www.w3schools.com/cssref/css_colors.php"
                target="_blank"
              >
                <button className="colorsBtn mb-3 bg-info">
                  Clickeame para ver una lista de los colores de css en inglés y
                  en hexadecimal.
                </button>
              </a>
                          <img
                className="colorsImg"
                src="./Recursos/instrucciones.png"
              ></img>
            </div>
          </div>
        );
      }
      if (this.state.visible == 6) {
        return (
          <div
            className="container-fluid size"
            style={{
              background: this.state.color,
              color: this.state.color1,
              fontSize: this.state.fsize + "px",
              textShadow: this.state.borde,
              display: this.state.center,
              alignItems: this.state.align,
              justifyContent: this.state.justify,
            }}
          >
            <form className="form-group" onSubmit={this.changeV1}>
              <div className="container">
                <div
                  style={{
                    animation:
                      this.state.fade + this.state.duration + this.state.status,
                  }}
                >
                  <p>Nuestro sitio empeieza a cobrar vida.</p>
                  <p>
                    sin embargo, no sé tú, pero yo encuentro horrible la casilla actual ¿Que tal si le aplicamos unos estilos?
                  </p>
                  <p>¿Te gustaría darle estilos a las casillas?</p>
                </div>
                <div className={this.state.checkForm}>
              <input
                className={this.state.checkBox}
                id="checkbox1"
                key="6"
                autoFocus
                type="checkbox"
                checked={this.state.checked1}
                onChange={this.cambioDato5}
                ></input>
                </div>
                <div className={this.state.between}>
                  <button className={this.state.btn} type="submit">
                    →
                  </button>
                  <button className={this.state.btn1} onClick={this.goBack}>
                    ←
                  </button>
                </div>
              </div>
            </form>
          </div>
        );
      }
      if (this.state.visible == 7) {
        return (
          <div
            className="container-fluid size"
            style={{
              background: this.state.color,
              color: this.state.color1,
              fontSize: this.state.fsize + "px",
              textShadow: this.state.borde,
              display: this.state.center,
              alignItems: this.state.align,
              justifyContent: this.state.justify,
            }}
          >
            <form className="form-group" onSubmit={this.changeV1}>
              <div className="container">
                <div
                  style={{
                    animation:
                      this.state.fade + this.state.duration + this.state.status,
                  }}
                >
                  <p>¡ESO ESTÁ MUCHO MEJOR!</p>vida
                  <p>
                    sin embargo, creo que es hora de deshacernos del feo botón por
                    defecto de html ¿No crees?
                  </p>
                  <p>¿Te gustaría dar vida al botón?</p>
                </div>
                <div className={this.state.checkForm}>
                <input
                className={this.state.checkBox}
                id="checkbox2"
                key="7"
                type="checkbox"
                checked={this.state.checked2}
                onChange={this.cambioDato6}
                ></input>
                </div>
                <div className={this.state.between}>
                  <button className={this.state.btn} type="submit">
                    →
                  </button>
                  <button className={this.state.btn1} onClick={this.goBack}>
                    ←
                  </button>
                </div>
              </div>
            </form>
          </div>
        );
      }
      if (this.state.visible == 8) {
        return (
          <div
            className="container-fluid size"
            style={{
              background: this.state.color,
              color: this.state.color1,
              fontSize: this.state.fsize + "px",
              textShadow: this.state.borde,
              display: this.state.center,
              alignItems: this.state.align,
              justifyContent: this.state.justify,
            }}
          >
            <form className="form-group" onSubmit={this.changeV1}>
              <div className="container">
                <div
                  style={{
                    animation:
                      this.state.fade + this.state.duration + this.state.status,
                  }}
                >
                  <p>
                    Ahora, el texto no se ve bien en una esquina pegado al inicio
                    de la pagina
                  </p>
                  <p>¿Te gustaría centrar el texto?</p>
                </div>
                <div className={this.state.checkForm}>
                <input
                className={this.state.checkBox}
                id="checkbox3"
                key="8"
                type="checkbox"
                checked={this.state.checked3}
                onChange={this.cambioDato7}
                ></input>
                </div>
                <div className={this.state.between}>
                  <button className={this.state.btn} type="submit">
                    →
                  </button>
                  <button className={this.state.btn1} onClick={this.goBack}>
                    ←
                  </button>
                </div>
              </div>
            </form>
          </div>
        );
      }
      if (this.state.visible == 9) {
        return (
          <div
            className="container-fluid size"
            style={{
              background: this.state.color,
              color: this.state.color1,
              fontSize: this.state.fsize + "px",
              textShadow: this.state.borde,
              display: this.state.center,
              alignItems: this.state.align,
              justifyContent: this.state.justify,
            }}
          >
            <form className="form-group" onSubmit={this.changeV1}>
              <div className="container">
                <div
                  style={{
                    animation:
                      this.state.fade + this.state.duration + this.state.status,
                  }}
                >
                  <p>
                    Mira nada más, que bonita pagina hemos logrado, pasamos de un
                    simple texto que no tenía color ni gracia a esto!
                  </p>
                  <p>
                    sin embargo, tambien podríamos darle un poco de vida al texto
                    con una animación ¿No te parece?
                  </p>
                  <p>¿Te gustaría animar el texto?</p>
                </div>
                <div className={this.state.checkForm}>
              <input
                className={this.state.checkBox}
                id="checkbox4"
                key="9"
                autoFocus
                type="checkbox"
                checked={this.state.checked4}
                onChange={this.cambioDato8}
              ></input>
              </div>
                <div className={this.state.between}>
                  <button className={this.state.btn} type="submit">
                    →
                  </button>
                  <button className={this.state.btn1} onClick={this.goBack}>
                    ←
                  </button>
                </div>
              </div>
            </form>
          </div>
        );
      }
      if (this.state.visible == 10) {
        return (
          <div
            className="container-fluid size"
            style={{
              background: this.state.color,
              color: this.state.color1,
              fontSize: this.state.fsize + "px",
              textShadow: this.state.borde,
              display: this.state.center,
              alignItems: this.state.align,
              justifyContent: this.state.justify,
            }}
          >
            <form className="form-group" onSubmit={this.changeV1}>
            <div className="container">
            <p className="d-flex">¿Mantener la animación?</p>
            <div className={this.state.checkForm}>
              <input
                className={this.state.checkBox}
                id="checkbox4"
                key="10"
                autoFocus
                type="checkbox"
                checked={this.state.checked4}
                onChange={this.cambioDato8}
              ></input>
              </div>
              <div
                style={{
                  animation:
                    this.state.fade + this.state.duration + this.state.status,
                }}
              >
                <p>
                  Y bueno, con eso llegamos al final, {nombre}, me gustaría que te
                  dieras cuenta de todo lo que logramos y como. Empezamos con algo
                  muy basico ¿No? HTML, estructura, texto plano sin estilos, sin
                  vida.
                  </p>
                  <p>
                    Luego con css, literalmente hicimos todo lo que ves, pero no
                    es todo.
                  </p>
                <p>
                  Mediante JavaScript, transforme todo lo que pediste en codigo,
                  interactuando contigo por medio del mismo. Y finalmente, React
                  nos ayudo a dar más "reaccion" a todo y poder variar más a
                  JavaScript que es más "estatico"
                </p>
                <p>
                  Así mismo, usamos bootstrap para facilitarnos un poco la vida
                  con algunos estilos!
                </p>
                <p>
                  Espero que hayas disfrutado pasandote por mi pagina, hasta una
                  proxima ocasión.
                </p>
              </div>
              <div className={this.state.between}>
                  <button className={this.state.btn} type="submit">
                    →
                  </button>
                  <button className={this.state.btn1} onClick={this.goBack}>
                    ←
                  </button>
                </div>
            </div>
            </form>
          </div>
        );
      }
      if (this.state.visible == 11){
        return (
          <div className="container-fluid bg-secondary size px-0">
            <h1>
            <button onClick={this.displayH}>html</button>
            <button onClick={this.displayC}>CSS</button>
            <button onClick={this.displayJ}>JS</button>
            <button onClick={this.displayB}>Bootstrap</button>
            <button onClick={this.displayR}>React</button>
            <button onClick={this.displayS}>SVG</button>
            </h1>
      <svg
        className={this.state.displayH}
        id="html"
        width="512"
        height="512"
        viewBox="0 0 512 512"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            id="path0"
            d="M84.000 27.607 L 84.000 55.214 93.700 55.107 L 103.400 55.000 103.507 45.700 L 103.615 36.400 111.007 36.400 L 118.400 36.400 118.400 45.800 L 118.400 55.200 128.200 55.200 L 138.000 55.200 138.000 27.600 L 138.000 0.000 128.200 0.000 L 118.400 0.000 118.400 8.400 L 118.400 16.800 111.000 16.800 L 103.600 16.800 103.600 8.400 L 103.600 0.000 93.800 0.000 L 84.000 0.000 84.000 27.607 M144.000 9.200 L 144.000 18.400 151.800 18.400 L 159.600 18.400 159.600 36.167 C 159.600 45.939,159.709 54.219,159.843 54.567 C 160.055 55.121,161.332 55.200,170.043 55.200 L 180.000 55.200 180.000 36.800 L 180.000 18.400 187.800 18.400 L 195.600 18.400 195.600 9.200 L 195.600 0.000 169.800 0.000 L 144.000 0.000 144.000 9.200 M202.000 27.607 L 202.000 55.214 211.700 55.107 L 221.400 55.000 221.506 43.300 C 221.564 36.865,221.712 31.600,221.835 31.600 C 222.267 31.600,223.200 32.750,223.200 33.283 C 223.200 33.580,223.560 34.083,224.000 34.400 C 224.440 34.717,224.813 35.252,224.829 35.588 C 224.845 35.925,225.203 36.740,225.625 37.400 C 226.046 38.060,226.519 38.870,226.675 39.200 C 226.832 39.530,227.284 40.149,227.680 40.575 C 228.076 41.002,228.400 41.547,228.400 41.787 C 228.400 42.027,228.760 42.483,229.200 42.800 C 229.640 43.117,230.000 43.657,230.000 44.000 C 230.000 44.343,230.360 44.883,230.800 45.200 C 231.240 45.517,231.600 46.097,231.600 46.488 C 231.600 46.986,231.909 47.200,232.629 47.200 C 233.743 47.200,234.800 46.381,234.800 45.517 C 234.800 45.220,235.160 44.717,235.600 44.400 C 236.040 44.083,236.400 43.543,236.400 43.200 C 236.400 42.857,236.760 42.317,237.200 42.000 C 237.640 41.683,238.000 41.221,238.000 40.974 C 238.000 40.726,238.360 40.198,238.800 39.800 C 239.240 39.402,239.600 38.932,239.600 38.756 C 239.600 38.580,240.050 37.772,240.600 36.962 C 241.150 36.151,241.600 35.193,241.600 34.832 C 241.600 34.472,241.960 33.917,242.400 33.600 C 242.840 33.283,243.200 32.780,243.200 32.483 C 243.200 31.950,244.133 30.800,244.566 30.800 C 244.688 30.800,244.836 36.245,244.894 42.900 L 245.000 55.000 254.700 55.107 L 264.400 55.214 264.400 27.607 L 264.400 0.000 253.795 -0.000 L 243.190 -0.000 242.148 2.200 C 241.575 3.410,240.947 4.400,240.753 4.400 C 240.559 4.400,240.400 4.760,240.400 5.200 C 240.400 5.640,240.220 6.000,240.000 6.000 C 239.780 6.000,239.600 6.320,239.600 6.712 C 239.600 7.103,239.240 7.683,238.800 8.000 C 238.360 8.317,238.000 8.807,238.000 9.088 C 238.000 9.370,237.820 9.600,237.600 9.600 C 237.380 9.600,237.200 9.920,237.200 10.312 C 237.200 10.703,236.840 11.283,236.400 11.600 C 235.960 11.917,235.600 12.457,235.600 12.800 C 235.600 13.143,235.240 13.683,234.800 14.000 C 234.360 14.317,234.000 14.820,234.000 15.117 C 234.000 15.654,233.066 16.800,232.629 16.800 C 232.503 16.800,232.400 16.440,232.400 16.000 C 232.400 15.560,232.220 15.200,232.000 15.200 C 231.780 15.200,231.600 14.880,231.600 14.488 C 231.600 14.097,231.240 13.517,230.800 13.200 C 230.360 12.883,230.000 12.303,230.000 11.912 C 230.000 11.520,229.820 11.200,229.600 11.200 C 229.380 11.200,229.200 10.964,229.200 10.675 C 229.200 10.387,228.840 9.764,228.400 9.292 C 227.960 8.820,227.600 8.246,227.600 8.017 C 227.600 7.788,227.420 7.600,227.200 7.600 C 226.980 7.600,226.800 7.280,226.800 6.888 C 226.800 6.497,226.440 5.917,226.000 5.600 C 225.560 5.283,225.200 4.799,225.200 4.525 C 225.200 3.781,223.901 1.200,223.526 1.200 C 223.347 1.200,223.200 0.930,223.200 0.600 C 223.200 0.082,221.756 0.000,212.600 0.000 L 202.000 0.000 202.000 27.607 M271.600 27.600 L 271.600 55.200 294.200 55.200 L 316.800 55.200 316.800 45.400 L 316.800 35.600 304.000 35.600 L 291.200 35.600 291.200 17.800 L 291.200 0.000 281.400 0.000 L 271.600 0.000 271.600 27.600 "
            strokeWidth="5"
            fill="#040404"
            fillRule="evenodd"
          ></path>
          <path
            id="path1"
            d="M57.600 80.100 C 57.600 81.367,57.780 82.400,58.000 82.400 C 58.241 82.400,58.400 84.067,58.400 86.600 C 58.400 88.910,58.541 90.800,58.714 90.800 C 58.887 90.800,59.000 91.475,58.965 92.300 C 58.931 93.125,59.072 95.240,59.281 97.000 C 59.489 98.760,59.714 102.027,59.781 104.260 C 59.849 106.493,60.023 108.513,60.168 108.748 C 60.314 108.984,60.513 110.906,60.612 113.020 C 60.711 115.134,60.878 117.003,60.983 117.173 C 61.088 117.343,61.200 119.264,61.232 121.441 C 61.264 123.619,61.431 125.490,61.603 125.600 C 61.776 125.710,61.989 127.693,62.077 130.006 C 62.164 132.319,62.361 134.413,62.512 134.658 C 62.664 134.904,62.817 136.791,62.851 138.852 C 62.886 140.914,63.051 142.871,63.219 143.202 C 63.386 143.533,63.575 145.693,63.638 148.002 C 63.701 150.311,63.888 152.387,64.055 152.616 C 64.222 152.844,64.390 154.869,64.428 157.116 C 64.467 159.362,64.656 161.200,64.849 161.200 C 65.042 161.200,65.200 163.075,65.200 165.367 C 65.200 167.658,65.366 169.593,65.568 169.667 C 65.771 169.740,65.993 171.661,66.063 173.935 C 66.132 176.209,66.326 178.154,66.494 178.258 C 66.662 178.362,66.800 180.381,66.800 182.744 C 66.800 185.107,66.970 187.211,67.177 187.420 C 67.384 187.629,67.604 189.735,67.665 192.100 C 67.726 194.465,67.916 196.400,68.088 196.400 C 68.260 196.400,68.400 198.290,68.400 200.600 C 68.400 202.941,68.566 204.800,68.774 204.800 C 69.125 204.800,69.250 206.303,69.823 217.400 C 69.948 219.820,70.219 221.971,70.425 222.180 C 70.631 222.389,70.800 224.594,70.800 227.080 C 70.800 229.827,70.957 231.600,71.200 231.600 C 71.440 231.600,71.600 233.192,71.600 235.576 C 71.600 237.796,71.777 239.662,72.000 239.800 C 72.227 239.940,72.400 241.937,72.400 244.424 C 72.400 247.075,72.558 248.800,72.800 248.800 C 73.041 248.800,73.200 250.440,73.200 252.920 C 73.200 255.186,73.367 257.211,73.572 257.420 C 73.777 257.629,73.999 259.750,74.065 262.134 C 74.132 264.518,74.324 266.553,74.493 266.658 C 74.662 266.762,74.800 268.626,74.800 270.800 C 74.800 272.974,74.947 274.843,75.126 274.954 C 75.305 275.065,75.486 277.074,75.527 279.418 C 75.568 281.762,75.707 283.850,75.835 284.057 C 75.963 284.264,76.131 286.001,76.209 287.917 C 76.286 289.833,76.518 292.300,76.724 293.400 C 76.930 294.500,77.067 296.480,77.029 297.800 C 76.991 299.120,77.103 300.398,77.278 300.639 C 77.453 300.880,77.662 303.062,77.743 305.487 C 77.823 307.912,77.994 310.067,78.123 310.275 C 78.252 310.484,78.389 312.442,78.428 314.627 C 78.467 316.812,78.635 318.690,78.801 318.800 C 78.967 318.910,79.169 320.890,79.251 323.200 C 79.333 325.510,79.521 327.492,79.668 327.604 C 79.816 327.716,79.983 329.696,80.041 332.004 C 80.098 334.312,80.275 336.290,80.434 336.400 C 80.593 336.510,80.785 338.535,80.861 340.900 C 80.938 343.264,81.135 345.199,81.300 345.200 C 81.465 345.200,81.600 346.808,81.600 348.774 C 81.600 350.740,81.773 352.803,81.984 353.359 C 82.196 353.915,82.404 356.184,82.448 358.401 C 82.492 360.618,82.679 362.525,82.864 362.639 C 83.049 362.754,83.201 364.052,83.203 365.524 C 83.206 368.408,83.869 369.200,86.280 369.200 C 86.786 369.200,87.200 369.380,87.200 369.600 C 87.200 369.820,87.729 370.000,88.376 370.000 C 89.023 370.000,89.640 370.141,89.746 370.313 C 89.852 370.485,90.538 370.670,91.270 370.725 C 92.001 370.780,92.660 371.000,92.733 371.213 C 92.807 371.426,93.392 371.600,94.033 371.600 C 94.675 371.600,95.200 371.791,95.200 372.024 C 95.200 372.257,95.349 372.355,95.532 372.242 C 95.715 372.129,96.795 372.282,97.932 372.582 C 99.069 372.882,100.000 373.032,100.000 372.915 C 100.000 372.798,100.250 372.910,100.556 373.164 C 100.862 373.418,101.672 373.665,102.355 373.713 C 103.039 373.761,103.599 373.935,103.599 374.100 C 103.600 374.265,104.320 374.400,105.200 374.400 C 106.080 374.400,106.800 374.580,106.800 374.800 C 106.800 375.020,107.340 375.200,108.000 375.200 C 108.660 375.200,109.200 375.380,109.200 375.600 C 109.200 375.820,109.909 376.000,110.776 376.000 C 111.643 376.000,112.464 376.180,112.600 376.400 C 112.736 376.620,113.197 376.800,113.624 376.800 C 114.051 376.800,114.400 376.980,114.400 377.200 C 114.400 377.420,115.120 377.600,116.000 377.600 C 116.880 377.600,117.600 377.742,117.600 377.915 C 117.600 378.088,118.185 378.269,118.900 378.317 C 119.615 378.364,120.560 378.558,121.000 378.746 C 122.566 379.418,124.670 380.000,125.528 380.000 C 126.008 380.000,126.400 380.180,126.400 380.400 C 126.400 380.620,126.929 380.800,127.576 380.800 C 128.223 380.800,128.864 380.980,129.000 381.200 C 129.136 381.420,129.877 381.600,130.647 381.600 C 131.479 381.600,131.947 381.762,131.800 382.000 C 131.653 382.238,132.121 382.400,132.953 382.400 C 133.723 382.400,134.464 382.580,134.600 382.800 C 134.736 383.020,135.366 383.200,136.000 383.200 C 136.634 383.200,137.264 383.380,137.400 383.600 C 137.536 383.820,138.256 384.000,139.000 384.000 C 139.744 384.000,140.464 384.180,140.600 384.400 C 140.736 384.620,141.276 384.800,141.800 384.800 C 142.324 384.800,142.864 384.980,143.000 385.200 C 143.136 385.420,143.867 385.600,144.624 385.600 C 145.381 385.600,146.000 385.780,146.000 386.000 C 146.000 386.220,146.542 386.400,147.205 386.400 C 147.868 386.400,148.723 386.558,149.105 386.751 C 150.351 387.380,152.634 388.000,153.705 388.000 C 154.281 388.000,154.854 388.164,154.978 388.365 C 155.103 388.566,155.968 388.855,156.902 389.006 C 157.836 389.158,159.617 389.620,160.859 390.032 C 162.102 390.444,163.677 390.824,164.359 390.876 C 165.042 390.928,165.600 391.112,165.600 391.285 C 165.600 391.458,166.230 391.600,167.000 391.600 C 167.770 391.600,168.400 391.780,168.400 392.000 C 168.400 392.220,169.030 392.400,169.800 392.400 C 170.570 392.400,171.200 392.580,171.200 392.800 C 171.200 393.020,171.830 393.200,172.600 393.200 C 173.370 393.200,174.000 393.380,174.000 393.600 C 174.000 393.820,174.720 394.000,175.600 394.000 C 176.480 394.000,177.200 394.180,177.200 394.400 C 177.200 394.620,177.650 394.800,178.200 394.800 C 178.750 394.800,179.200 394.943,179.200 395.118 C 179.200 395.293,179.875 395.482,180.699 395.537 C 181.524 395.593,182.370 395.810,182.579 396.019 C 182.789 396.229,183.554 396.400,184.280 396.400 C 185.006 396.400,185.600 396.580,185.600 396.800 C 185.600 397.020,186.140 397.200,186.800 397.200 C 187.460 397.200,188.000 397.380,188.000 397.600 C 188.000 397.820,188.619 398.000,189.376 398.000 C 190.133 398.000,190.864 398.180,191.000 398.400 C 191.136 398.620,191.762 398.800,192.390 398.800 C 193.019 398.800,193.607 399.020,193.696 399.288 C 193.932 399.995,205.264 400.006,205.500 399.300 C 205.595 399.014,206.336 398.800,207.233 398.800 C 208.095 398.800,208.800 398.620,208.800 398.400 C 208.800 398.180,209.329 398.000,209.976 398.000 C 210.623 398.000,211.264 397.820,211.400 397.600 C 211.536 397.380,212.267 397.200,213.024 397.200 C 213.781 397.200,214.400 397.020,214.400 396.800 C 214.400 396.580,215.131 396.400,216.024 396.400 C 217.004 396.400,217.549 396.242,217.400 396.000 C 217.253 395.762,217.729 395.600,218.576 395.600 C 219.359 395.600,220.000 395.440,220.000 395.244 C 220.000 395.048,220.630 394.778,221.400 394.644 C 222.170 394.510,223.429 394.290,224.197 394.157 C 224.965 394.023,225.494 393.753,225.373 393.557 C 225.252 393.360,225.883 393.200,226.776 393.200 C 227.669 393.200,228.400 393.020,228.400 392.800 C 228.400 392.580,229.019 392.400,229.776 392.400 C 230.533 392.400,231.264 392.220,231.400 392.000 C 231.536 391.780,232.166 391.600,232.800 391.600 C 233.434 391.600,234.047 391.448,234.162 391.261 C 234.277 391.075,234.915 390.907,235.580 390.888 C 236.245 390.869,237.017 390.711,237.295 390.537 C 237.573 390.363,238.247 390.159,238.793 390.084 C 239.338 390.009,239.878 389.825,239.993 389.674 C 240.107 389.523,240.650 389.346,241.200 389.279 C 244.147 388.923,245.200 388.681,245.200 388.358 C 245.200 388.161,245.704 388.000,246.320 388.000 C 246.936 388.000,247.631 387.809,247.865 387.575 C 248.099 387.341,248.861 387.133,249.559 387.114 C 250.257 387.094,250.923 386.925,251.038 386.739 C 251.153 386.552,251.642 386.397,252.124 386.394 C 253.081 386.387,255.820 385.513,256.259 385.074 C 256.410 384.923,257.123 384.800,257.843 384.800 C 258.563 384.800,259.264 384.620,259.400 384.400 C 259.536 384.180,260.177 384.000,260.824 384.000 C 261.471 384.000,262.000 383.820,262.000 383.600 C 262.000 383.380,262.731 383.200,263.624 383.200 C 264.604 383.200,265.149 383.042,265.000 382.800 C 264.850 382.558,265.404 382.400,266.400 382.400 C 267.396 382.400,267.950 382.242,267.800 382.000 C 267.653 381.762,268.121 381.600,268.953 381.600 C 269.723 381.600,270.464 381.420,270.600 381.200 C 270.736 380.980,271.467 380.800,272.224 380.800 C 272.981 380.800,273.600 380.620,273.600 380.400 C 273.600 380.180,274.140 380.000,274.800 380.000 C 275.460 380.000,276.000 379.820,276.000 379.600 C 276.000 379.380,276.720 379.200,277.600 379.200 C 278.480 379.200,279.200 379.020,279.200 378.800 C 279.200 378.580,279.931 378.400,280.824 378.400 C 281.804 378.400,282.349 378.242,282.200 378.000 C 282.056 377.767,282.455 377.600,283.153 377.600 C 283.813 377.600,284.464 377.420,284.600 377.200 C 284.736 376.980,285.567 376.800,286.447 376.800 C 287.412 376.800,287.949 376.641,287.800 376.400 C 287.656 376.167,288.063 376.000,288.776 376.000 C 289.449 376.000,290.000 375.820,290.000 375.600 C 290.000 375.380,290.709 375.200,291.576 375.200 C 292.443 375.200,293.264 375.020,293.400 374.800 C 293.536 374.580,294.177 374.400,294.824 374.400 C 295.471 374.400,296.000 374.221,296.000 374.003 C 296.000 373.784,296.405 373.672,296.900 373.753 C 297.395 373.835,298.340 373.683,299.000 373.415 C 299.660 373.148,300.409 372.999,300.663 373.086 C 300.918 373.172,301.244 373.053,301.387 372.821 C 301.530 372.590,302.098 372.400,302.650 372.400 C 303.201 372.400,303.991 372.219,304.405 371.997 C 304.819 371.776,305.617 371.557,306.179 371.510 C 306.740 371.464,307.200 371.285,307.200 371.113 C 307.200 370.941,307.605 370.797,308.100 370.794 C 308.595 370.791,309.810 370.502,310.800 370.152 C 311.790 369.802,313.140 369.438,313.800 369.342 C 316.529 368.947,316.800 368.568,316.800 365.156 C 316.800 363.446,316.946 361.957,317.125 361.846 C 317.304 361.736,317.497 359.883,317.555 357.728 C 317.612 355.574,317.801 353.628,317.975 353.405 C 318.149 353.182,318.321 351.268,318.359 349.151 C 318.396 347.034,318.601 344.695,318.813 343.953 C 319.026 343.212,319.200 341.197,319.200 339.476 C 319.200 337.755,319.359 336.044,319.553 335.674 C 319.748 335.303,320.024 332.930,320.167 330.400 C 320.311 327.870,320.600 324.090,320.810 322.000 C 321.020 319.910,321.298 316.311,321.429 314.003 C 321.559 311.695,321.786 309.715,321.933 309.603 C 322.080 309.491,322.247 307.520,322.304 305.221 C 322.361 302.923,322.579 300.937,322.788 300.807 C 322.997 300.678,323.103 299.408,323.022 297.986 C 322.941 296.564,323.033 294.500,323.225 293.400 C 323.418 292.300,323.658 289.738,323.760 287.706 C 323.862 285.675,324.044 283.852,324.166 283.655 C 324.288 283.458,324.407 281.295,324.430 278.848 C 324.453 276.402,324.636 274.400,324.836 274.400 C 325.036 274.400,325.200 272.521,325.200 270.224 C 325.200 267.927,325.347 265.956,325.527 265.845 C 325.707 265.734,325.899 263.788,325.954 261.521 C 326.009 259.255,326.221 257.340,326.427 257.267 C 326.632 257.193,326.800 255.258,326.800 252.967 C 326.800 250.456,326.959 248.800,327.200 248.800 C 327.442 248.800,327.600 247.067,327.600 244.400 C 327.600 241.733,327.758 240.000,328.000 240.000 C 328.242 240.000,328.400 238.275,328.400 235.624 C 328.400 233.137,328.573 231.140,328.800 231.000 C 329.027 230.860,329.200 228.863,329.200 226.376 C 329.200 223.920,329.365 222.000,329.575 222.000 C 329.781 222.000,330.050 220.065,330.172 217.700 C 330.294 215.335,330.497 211.465,330.623 209.100 C 330.749 206.735,330.998 204.800,331.176 204.800 C 331.355 204.800,331.533 202.971,331.571 200.735 C 331.610 198.499,331.798 196.377,331.990 196.018 C 332.182 195.660,332.324 195.104,332.306 194.783 C 332.170 192.340,332.464 187.192,332.729 187.356 C 332.910 187.468,333.101 185.548,333.152 183.089 C 333.204 180.630,333.386 178.524,333.556 178.409 C 333.727 178.294,333.909 176.310,333.960 174.000 C 334.011 171.690,334.221 169.740,334.427 169.667 C 334.632 169.593,334.800 167.658,334.800 165.367 C 334.800 163.075,334.958 161.200,335.151 161.200 C 335.344 161.200,335.533 159.362,335.572 157.116 C 335.610 154.869,335.778 152.844,335.945 152.616 C 336.112 152.387,336.299 150.311,336.362 148.002 C 336.425 145.693,336.614 143.533,336.782 143.202 C 336.950 142.871,337.115 140.880,337.149 138.777 C 337.184 136.674,337.362 134.424,337.545 133.777 C 337.729 133.130,337.918 131.184,337.967 129.454 C 338.015 127.723,338.199 125.923,338.375 125.454 C 338.551 124.984,338.729 122.992,338.770 121.026 C 338.811 119.060,338.932 117.311,339.038 117.138 C 339.145 116.966,339.306 115.189,339.396 113.189 C 339.487 111.190,339.686 109.160,339.839 108.678 C 339.991 108.197,340.166 106.092,340.227 104.002 C 340.288 101.911,340.505 98.760,340.709 97.000 C 340.913 95.240,341.048 93.125,341.008 92.300 C 340.968 91.475,341.085 90.800,341.268 90.800 C 341.451 90.800,341.600 88.910,341.600 86.600 C 341.600 84.067,341.759 82.400,342.000 82.400 C 342.220 82.400,342.400 81.367,342.400 80.100 L 342.400 77.800 200.000 77.800 L 57.600 77.800 57.600 80.100 M315.453 106.500 C 315.315 108.755,315.025 112.490,314.810 114.800 C 314.166 121.693,313.640 127.523,313.222 132.400 C 312.739 138.036,312.151 144.760,311.630 150.600 C 311.415 153.020,310.962 158.150,310.625 162.000 C 309.860 170.732,309.298 176.983,308.789 182.400 C 308.572 184.710,308.036 190.740,307.598 195.800 C 307.160 200.860,306.074 213.010,305.184 222.800 C 304.295 232.590,303.381 242.850,303.154 245.600 C 302.712 250.962,302.258 256.087,301.630 262.800 C 300.966 269.891,300.376 276.402,300.000 280.800 C 299.624 285.198,299.034 291.709,298.370 298.800 C 297.744 305.494,297.288 310.630,296.845 316.000 C 296.456 320.723,296.112 324.609,295.216 334.400 C 295.005 336.710,294.624 340.940,294.369 343.800 C 293.868 349.419,293.728 349.808,292.087 350.119 C 291.087 350.308,286.416 351.535,283.300 352.428 C 281.346 352.987,279.638 353.465,277.200 354.135 C 270.888 355.868,252.813 360.853,251.600 361.195 C 250.830 361.412,248.310 362.123,246.000 362.775 C 243.690 363.428,240.720 364.256,239.400 364.615 C 238.080 364.975,236.460 365.424,235.800 365.612 C 233.004 366.411,231.627 366.791,228.600 367.600 C 226.840 368.070,224.860 368.607,224.200 368.793 C 223.540 368.979,221.920 369.425,220.600 369.786 C 219.280 370.146,215.680 371.153,212.600 372.023 C 202.573 374.856,201.278 375.200,200.635 375.200 C 200.065 375.200,200.000 373.369,200.000 357.200 C 200.000 339.649,199.981 339.200,199.224 339.200 C 198.797 339.200,198.348 339.040,198.227 338.844 C 198.106 338.649,197.421 338.401,196.704 338.293 C 195.987 338.186,194.320 337.797,193.000 337.428 C 191.680 337.060,189.250 336.392,187.600 335.943 C 184.635 335.138,183.726 334.884,180.600 333.985 C 179.720 333.732,178.413 333.432,177.696 333.319 C 176.979 333.205,176.294 332.951,176.173 332.756 C 176.052 332.560,175.571 332.400,175.105 332.400 C 174.204 332.400,171.861 331.735,170.705 331.151 C 170.323 330.958,169.569 330.800,169.029 330.800 C 168.489 330.800,167.936 330.620,167.800 330.400 C 167.664 330.180,167.034 330.000,166.400 330.000 C 165.766 330.000,165.148 329.840,165.027 329.644 C 164.906 329.449,164.176 329.179,163.404 329.044 C 162.632 328.910,161.368 328.690,160.596 328.556 C 159.824 328.421,159.094 328.151,158.973 327.956 C 158.852 327.760,158.234 327.600,157.600 327.600 C 156.966 327.600,156.336 327.420,156.200 327.200 C 156.064 326.980,155.434 326.800,154.800 326.800 C 154.166 326.800,153.536 326.620,153.400 326.400 C 153.264 326.180,152.634 326.000,152.000 326.000 C 151.366 326.000,150.736 325.820,150.600 325.600 C 150.464 325.380,149.834 325.200,149.200 325.200 C 148.566 325.200,147.936 325.020,147.800 324.800 C 147.664 324.580,147.171 324.400,146.705 324.400 C 145.804 324.400,143.461 323.735,142.305 323.151 C 141.923 322.958,141.156 322.800,140.600 322.800 C 140.044 322.800,139.277 322.628,138.895 322.418 C 138.513 322.208,135.978 321.477,133.262 320.792 C 125.967 318.954,126.400 319.297,126.400 315.359 C 126.400 313.538,126.220 311.936,126.000 311.800 C 125.775 311.661,125.600 309.737,125.600 307.400 C 125.600 305.063,125.425 303.139,125.200 303.000 C 124.975 302.861,124.800 300.937,124.800 298.600 C 124.800 296.263,124.625 294.339,124.400 294.200 C 124.175 294.061,124.000 292.137,124.000 289.800 C 124.000 287.463,123.825 285.539,123.600 285.400 C 123.375 285.261,123.200 283.337,123.200 281.000 C 123.200 278.663,123.025 276.739,122.800 276.600 C 122.575 276.461,122.400 274.537,122.400 272.200 C 122.400 269.863,122.225 267.939,122.000 267.800 C 121.780 267.664,121.600 266.393,121.600 264.976 L 121.600 262.400 139.992 262.400 L 158.385 262.400 158.585 263.300 C 158.777 264.159,158.943 266.652,159.431 276.000 C 159.552 278.310,159.819 280.371,160.025 280.580 C 160.231 280.789,160.413 282.679,160.429 284.780 C 160.464 289.293,161.129 290.918,163.030 291.131 C 163.673 291.203,164.371 291.428,164.580 291.631 C 164.789 291.834,165.543 292.000,166.256 292.000 C 166.969 292.000,167.664 292.180,167.800 292.400 C 167.936 292.620,168.566 292.800,169.200 292.800 C 169.834 292.800,170.464 292.980,170.600 293.200 C 170.736 293.420,171.366 293.600,172.000 293.600 C 172.634 293.600,173.252 293.760,173.373 293.956 C 173.494 294.151,174.179 294.398,174.896 294.504 C 176.236 294.702,189.115 298.034,194.800 299.654 C 196.319 300.087,199.217 300.755,199.700 300.783 C 199.865 300.792,200.000 288.381,200.000 273.202 L 200.000 245.604 160.100 245.502 L 120.200 245.400 119.910 243.400 C 119.751 242.300,119.422 239.150,119.180 236.400 C 118.938 233.650,118.583 229.690,118.392 227.600 C 118.200 225.510,117.858 221.730,117.631 219.200 C 117.403 216.670,117.034 212.575,116.809 210.100 C 116.584 207.625,116.229 203.665,116.021 201.300 C 115.812 198.935,115.539 195.920,115.414 194.600 C 114.779 187.887,114.293 182.349,113.397 171.600 C 112.855 165.110,112.228 157.820,112.002 155.400 C 111.341 148.302,111.229 146.851,110.958 141.900 L 110.701 137.200 155.351 137.200 L 200.000 137.200 200.000 119.800 L 200.000 102.400 257.852 102.400 L 315.705 102.400 315.453 106.500 M150.576 174.900 C 150.727 175.615,151.011 178.180,151.206 180.600 C 151.838 188.435,152.355 194.461,152.984 201.307 C 153.323 204.995,153.600 208.280,153.600 208.607 C 153.600 209.124,156.559 209.200,176.800 209.200 L 200.000 209.200 200.000 191.400 L 200.000 173.600 175.150 173.600 L 150.300 173.600 150.576 174.900 "
            strokeWidth="5"
            fill="#e44c24"
            fillRule="evenodd"
          ></path>
          <path
            id="path2"
            d="M111.371 139.100 C 111.500 139.705,111.789 142.360,112.014 145.000 C 113.174 158.651,113.830 166.099,114.374 171.800 C 114.605 174.220,114.966 178.270,115.177 180.800 C 115.839 188.757,117.587 208.811,118.018 213.400 C 118.246 215.820,118.614 219.960,118.835 222.600 C 119.057 225.240,119.409 229.290,119.616 231.600 C 119.823 233.910,120.107 237.510,120.247 239.600 C 120.387 241.690,120.665 243.715,120.865 244.100 C 121.208 244.762,124.527 244.800,181.914 244.806 C 215.291 244.809,242.822 244.953,243.094 245.126 C 243.646 245.477,243.642 245.543,241.600 268.000 C 241.380 270.420,241.016 274.425,240.791 276.900 C 240.566 279.375,240.232 283.436,240.047 285.924 C 239.658 291.178,239.672 291.158,235.887 292.119 C 234.299 292.522,232.460 293.004,231.800 293.190 C 231.140 293.376,228.530 294.082,226.000 294.758 C 219.227 296.568,214.601 297.812,211.000 298.793 C 209.240 299.273,206.450 300.033,204.800 300.482 C 200.144 301.749,198.968 301.771,194.995 300.664 C 193.018 300.113,189.240 299.096,186.600 298.404 C 182.205 297.252,179.400 296.494,176.200 295.593 C 171.741 294.338,168.417 293.487,167.296 293.314 C 166.579 293.202,165.894 292.951,165.773 292.756 C 165.652 292.560,165.059 292.400,164.456 292.400 C 163.853 292.400,163.189 292.234,162.980 292.031 C 162.771 291.828,162.060 291.603,161.400 291.531 C 160.052 291.384,160.266 292.385,159.234 281.400 C 158.350 271.974,157.989 268.164,157.748 265.700 L 157.504 263.200 140.107 263.200 L 122.709 263.200 122.947 267.300 C 123.077 269.555,123.359 273.290,123.573 275.600 C 124.909 290.021,126.168 304.066,126.764 311.200 C 127.385 318.629,127.143 318.165,130.941 319.204 C 134.015 320.045,135.669 320.515,138.000 321.209 C 138.550 321.373,139.810 321.727,140.800 321.995 C 141.790 322.264,143.013 322.645,143.519 322.842 C 144.024 323.039,144.869 323.200,145.395 323.200 C 145.922 323.200,146.464 323.380,146.600 323.600 C 146.736 323.820,147.366 324.000,148.000 324.000 C 148.634 324.000,149.264 324.180,149.400 324.400 C 149.536 324.620,150.166 324.800,150.800 324.800 C 151.434 324.800,152.052 324.960,152.173 325.156 C 152.294 325.351,152.979 325.605,153.696 325.719 C 154.413 325.832,155.720 326.139,156.600 326.400 C 157.480 326.661,158.787 326.968,159.504 327.081 C 160.221 327.195,160.906 327.449,161.027 327.644 C 161.148 327.840,161.766 328.000,162.400 328.000 C 163.034 328.000,163.643 328.146,163.753 328.324 C 163.863 328.502,165.144 328.896,166.600 329.200 C 168.056 329.504,169.337 329.898,169.447 330.076 C 169.557 330.254,170.029 330.400,170.495 330.400 C 170.962 330.400,171.896 330.583,172.572 330.807 C 173.247 331.030,176.680 332.008,180.200 332.979 C 183.720 333.950,188.310 335.217,190.400 335.795 C 192.490 336.372,195.550 337.191,197.200 337.615 L 200.200 338.385 207.600 336.363 C 215.733 334.140,217.769 333.582,224.100 331.835 C 225.365 331.486,227.435 330.914,228.700 330.565 C 232.011 329.652,233.237 329.306,237.700 328.028 C 238.415 327.823,240.440 327.270,242.200 326.800 C 243.960 326.330,245.940 325.787,246.600 325.595 C 247.260 325.403,248.430 325.071,249.200 324.858 C 249.970 324.646,251.950 324.096,253.600 323.637 C 255.250 323.177,260.105 321.844,264.389 320.674 L 272.178 318.546 272.478 317.173 C 272.643 316.418,272.976 313.460,273.218 310.600 C 273.460 307.740,273.821 303.600,274.020 301.400 C 274.220 299.200,274.557 295.420,274.771 293.000 C 274.985 290.580,275.358 286.440,275.600 283.800 C 275.842 281.160,276.207 277.110,276.410 274.800 C 276.613 272.490,276.956 268.620,277.172 266.200 C 277.389 263.780,277.762 259.550,278.001 256.800 C 278.240 254.050,278.603 249.910,278.809 247.600 C 279.015 245.290,279.375 241.240,279.610 238.600 C 279.844 235.960,280.208 231.910,280.418 229.600 C 280.628 227.290,280.988 223.330,281.217 220.800 C 281.446 218.270,281.739 214.715,281.867 212.900 L 282.100 209.600 217.674 209.600 C 171.947 209.600,153.170 209.475,152.980 209.168 C 152.717 208.742,152.081 202.613,151.200 192.000 C 150.953 189.030,150.510 183.720,150.215 180.200 C 149.842 175.730,149.806 173.646,150.099 173.289 C 150.437 172.875,163.397 172.830,217.846 173.054 C 275.690 173.292,285.203 173.252,285.374 172.766 C 285.615 172.079,288.400 141.376,288.400 139.400 L 288.400 138.000 199.768 138.000 L 111.136 138.000 111.371 139.100 "
            strokeWidth="5"
            fill="#f3f2f2"
            fillRule="evenodd"
          ></path>
          <path
            id="path3"
            d="M58.901 96.200 C 58.905 97.080,58.987 97.393,59.083 96.895 C 59.179 96.398,59.175 95.678,59.075 95.295 C 58.975 94.913,58.896 95.320,58.901 96.200 M340.901 96.200 C 340.905 97.080,340.987 97.393,341.083 96.895 C 341.179 96.398,341.175 95.678,341.075 95.295 C 340.975 94.913,340.896 95.320,340.901 96.200 M200.000 119.800 L 200.000 137.200 244.600 137.200 L 289.200 137.200 289.200 139.920 C 289.200 141.416,289.037 142.811,288.838 143.020 C 288.638 143.229,288.374 145.470,288.251 148.000 C 288.128 150.530,287.859 154.580,287.652 157.000 C 286.786 167.157,286.371 171.463,286.160 172.500 L 285.936 173.600 242.968 173.600 L 200.000 173.600 200.000 191.398 L 200.000 209.196 241.500 209.298 L 283.000 209.400 282.916 210.400 C 282.870 210.950,282.635 213.560,282.393 216.200 C 282.151 218.840,281.785 222.890,281.580 225.200 C 281.113 230.450,280.526 236.940,280.024 242.400 C 279.460 248.538,278.815 255.613,278.384 260.400 C 278.176 262.710,277.816 266.670,277.584 269.200 C 277.351 271.730,277.072 275.600,276.964 277.800 C 276.855 280.000,276.599 282.160,276.393 282.600 C 276.188 283.040,275.927 285.200,275.813 287.400 C 275.700 289.600,275.511 293.200,275.393 295.400 C 275.275 297.600,275.008 299.760,274.799 300.200 C 274.591 300.640,274.324 302.890,274.207 305.200 C 273.616 316.848,273.560 317.393,272.856 318.326 C 272.185 319.215,268.185 320.607,264.896 321.095 C 264.179 321.201,263.494 321.449,263.373 321.644 C 263.252 321.840,262.634 322.000,262.000 322.000 C 261.366 322.000,260.748 322.160,260.627 322.356 C 260.506 322.551,259.731 322.827,258.904 322.967 C 255.276 323.585,254.781 323.708,254.573 324.044 C 254.452 324.240,253.834 324.400,253.200 324.400 C 252.566 324.400,251.936 324.580,251.800 324.800 C 251.664 325.020,251.034 325.200,250.400 325.200 C 249.766 325.200,249.136 325.380,249.000 325.600 C 248.864 325.820,248.234 326.000,247.600 326.000 C 246.966 326.000,246.336 326.180,246.200 326.400 C 246.064 326.620,245.434 326.800,244.800 326.800 C 244.166 326.800,243.536 326.980,243.400 327.200 C 243.264 327.420,242.634 327.600,242.000 327.600 C 241.366 327.600,240.748 327.760,240.627 327.956 C 240.506 328.151,239.821 328.405,239.104 328.519 C 238.387 328.632,237.125 328.922,236.300 329.163 C 235.475 329.403,234.125 329.797,233.300 330.037 C 232.475 330.278,231.213 330.568,230.496 330.681 C 229.779 330.795,229.094 331.049,228.973 331.244 C 228.852 331.440,228.234 331.600,227.600 331.600 C 226.966 331.600,226.348 331.760,226.227 331.956 C 226.106 332.151,225.421 332.405,224.704 332.519 C 223.987 332.632,222.725 332.922,221.900 333.163 C 220.143 333.675,218.937 334.014,214.600 335.214 C 206.234 337.529,204.126 338.096,203.200 338.281 C 202.650 338.391,201.705 338.686,201.100 338.938 L 200.000 339.395 200.000 357.298 C 200.000 373.377,200.065 375.200,200.635 375.200 C 201.278 375.200,202.573 374.856,212.600 372.023 C 215.680 371.153,219.280 370.146,220.600 369.786 C 221.920 369.425,223.540 368.979,224.200 368.793 C 224.860 368.607,226.840 368.070,228.600 367.600 C 231.627 366.791,233.004 366.411,235.800 365.612 C 236.460 365.424,238.080 364.975,239.400 364.615 C 240.720 364.256,243.690 363.428,246.000 362.775 C 248.310 362.123,250.830 361.412,251.600 361.195 C 252.813 360.853,270.888 355.868,277.200 354.135 C 279.638 353.465,281.346 352.987,283.300 352.428 C 286.416 351.535,291.087 350.308,292.087 350.119 C 293.728 349.808,293.868 349.419,294.369 343.800 C 294.624 340.940,295.005 336.710,295.216 334.400 C 296.112 324.609,296.456 320.723,296.845 316.000 C 297.288 310.630,297.744 305.494,298.370 298.800 C 299.034 291.709,299.624 285.198,300.000 280.800 C 300.376 276.402,300.966 269.891,301.630 262.800 C 302.258 256.087,302.712 250.962,303.154 245.600 C 303.381 242.850,304.295 232.590,305.184 222.800 C 306.074 213.010,307.160 200.860,307.598 195.800 C 308.036 190.740,308.572 184.710,308.789 182.400 C 309.298 176.983,309.860 170.732,310.625 162.000 C 310.962 158.150,311.415 153.020,311.630 150.600 C 312.151 144.760,312.739 138.036,313.222 132.400 C 313.640 127.523,314.166 121.693,314.810 114.800 C 315.025 112.490,315.315 108.755,315.453 106.500 L 315.705 102.400 257.852 102.400 L 200.000 102.400 200.000 119.800 M112.893 166.000 C 112.893 166.770,112.975 167.085,113.076 166.700 C 113.176 166.315,113.176 165.685,113.076 165.300 C 112.975 164.915,112.893 165.230,112.893 166.000 M200.000 273.167 C 200.000 294.827,199.893 300.784,199.500 300.971 C 198.953 301.231,200.310 300.945,202.200 300.401 C 202.860 300.211,204.750 299.699,206.400 299.264 C 208.050 298.829,211.920 297.800,215.000 296.979 C 218.080 296.157,221.187 295.401,221.904 295.298 C 222.621 295.196,223.306 294.951,223.427 294.756 C 223.548 294.560,224.166 294.400,224.800 294.400 C 225.434 294.400,226.052 294.240,226.173 294.044 C 226.381 293.708,226.876 293.585,230.504 292.967 C 231.331 292.827,232.106 292.551,232.227 292.356 C 232.348 292.160,233.067 292.000,233.824 292.000 C 234.581 292.000,235.200 291.820,235.200 291.600 C 235.200 291.380,235.808 291.200,236.551 291.200 C 238.735 291.200,239.036 290.348,239.656 282.400 C 239.853 279.870,240.196 275.820,240.419 273.400 C 240.641 270.980,240.919 267.200,241.037 265.000 C 241.155 262.800,241.420 260.829,241.626 260.620 C 241.832 260.411,242.000 258.397,242.000 256.144 C 242.000 253.844,242.175 251.939,242.400 251.800 C 242.620 251.664,242.800 250.213,242.800 248.576 L 242.800 245.600 221.400 245.600 L 200.000 245.600 200.000 273.167 M324.493 278.000 C 324.493 278.770,324.575 279.085,324.676 278.700 C 324.776 278.315,324.776 277.685,324.676 277.300 C 324.575 276.915,324.493 277.230,324.493 278.000 M160.681 289.587 C 160.794 290.020,161.132 290.578,161.433 290.827 C 161.845 291.170,161.828 290.978,161.360 290.040 C 160.653 288.622,160.381 288.441,160.681 289.587 M323.693 290.800 C 323.693 291.570,323.775 291.885,323.876 291.500 C 323.976 291.115,323.976 290.485,323.876 290.100 C 323.775 289.715,323.693 290.030,323.693 290.800 M320.300 326.210 C 320.194 326.765,320.226 327.292,320.371 327.382 C 320.516 327.471,320.674 327.017,320.723 326.372 C 320.833 324.935,320.564 324.831,320.300 326.210 "
            strokeWidth="5"
            fill="#f3632b"
            fillRule="evenodd"
          ></path>
          <path
            id="path4"
            d="M244.277 137.499 L 288.754 137.603 288.921 139.302 L 289.088 141.000 289.044 139.200 L 289.000 137.400 244.400 137.397 L 199.800 137.395 244.277 137.499 M287.033 158.433 C 286.883 159.566,286.841 160.574,286.939 160.672 C 287.037 160.771,287.245 159.928,287.400 158.800 C 287.555 157.672,287.598 156.664,287.494 156.561 C 287.391 156.458,287.184 157.300,287.033 158.433 M162.700 173.500 C 169.575 173.561,180.825 173.561,187.700 173.500 C 194.575 173.438,188.950 173.388,175.200 173.388 C 161.450 173.388,155.825 173.438,162.700 173.500 M116.893 206.000 C 116.893 206.770,116.975 207.085,117.076 206.700 C 117.176 206.315,117.176 205.685,117.076 205.300 C 116.975 204.915,116.893 205.230,116.893 206.000 M282.114 215.000 C 282.117 216.100,282.195 216.503,282.287 215.895 C 282.379 215.286,282.377 214.386,282.282 213.895 C 282.187 213.403,282.111 213.900,282.114 215.000 M281.314 223.800 C 281.317 224.900,281.395 225.303,281.487 224.695 C 281.579 224.086,281.577 223.186,281.482 222.695 C 281.387 222.203,281.311 222.700,281.314 223.800 M280.520 232.800 C 280.520 234.010,280.595 234.505,280.687 233.900 C 280.778 233.295,280.778 232.305,280.687 231.700 C 280.595 231.095,280.520 231.590,280.520 232.800 M279.714 241.800 C 279.717 242.900,279.795 243.303,279.887 242.695 C 279.979 242.086,279.977 241.186,279.882 240.695 C 279.787 240.203,279.711 240.700,279.714 241.800 M221.274 245.498 L 242.748 245.607 242.912 246.503 C 243.055 247.277,243.072 247.263,243.039 246.400 L 243.000 245.400 221.400 245.395 L 199.800 245.389 221.274 245.498 M278.901 251.000 C 278.905 251.880,278.987 252.193,279.083 251.695 C 279.179 251.198,279.175 250.478,279.075 250.095 C 278.975 249.713,278.896 250.120,278.901 251.000 M242.093 255.200 C 242.093 255.970,242.175 256.285,242.276 255.900 C 242.376 255.515,242.376 254.885,242.276 254.500 C 242.175 254.115,242.093 254.430,242.093 255.200 M278.101 260.200 C 278.105 261.080,278.187 261.393,278.283 260.895 C 278.379 260.398,278.375 259.678,278.275 259.295 C 278.175 258.913,278.096 259.320,278.101 260.200 M131.100 262.700 C 135.995 262.763,144.005 262.763,148.900 262.700 C 153.795 262.636,149.790 262.584,140.000 262.584 C 130.210 262.584,126.205 262.636,131.100 262.700 M241.309 264.400 C 241.309 265.390,241.387 265.795,241.482 265.300 C 241.578 264.805,241.578 263.995,241.482 263.500 C 241.387 263.005,241.309 263.410,241.309 264.400 M158.493 268.400 C 158.493 269.170,158.575 269.485,158.676 269.100 C 158.776 268.715,158.776 268.085,158.676 267.700 C 158.575 267.315,158.493 267.630,158.493 268.400 M277.320 269.600 C 277.320 270.810,277.395 271.305,277.487 270.700 C 277.578 270.095,277.578 269.105,277.487 268.500 C 277.395 267.895,277.320 268.390,277.320 269.600 M122.501 269.400 C 122.505 270.280,122.587 270.593,122.683 270.095 C 122.779 269.598,122.775 268.878,122.675 268.495 C 122.575 268.113,122.496 268.520,122.501 269.400 M240.514 273.400 C 240.517 274.500,240.595 274.903,240.687 274.295 C 240.779 273.686,240.777 272.786,240.682 272.295 C 240.587 271.803,240.511 272.300,240.514 273.400 M159.314 277.800 C 159.317 278.900,159.395 279.303,159.487 278.695 C 159.579 278.086,159.577 277.186,159.482 276.695 C 159.387 276.203,159.311 276.700,159.314 277.800 M276.514 278.600 C 276.517 279.700,276.595 280.103,276.687 279.495 C 276.779 278.886,276.777 277.986,276.682 277.495 C 276.587 277.003,276.511 277.500,276.514 278.600 M123.314 279.000 C 123.317 280.100,123.395 280.503,123.487 279.895 C 123.579 279.286,123.577 278.386,123.482 277.895 C 123.387 277.403,123.311 277.900,123.314 279.000 M239.720 282.400 C 239.720 283.610,239.795 284.105,239.887 283.500 C 239.978 282.895,239.978 281.905,239.887 281.300 C 239.795 280.695,239.720 281.190,239.720 282.400 M160.109 287.200 C 160.109 288.190,160.187 288.595,160.282 288.100 C 160.378 287.605,160.378 286.795,160.282 286.300 C 160.187 285.805,160.109 286.210,160.109 287.200 M275.714 287.400 C 275.717 288.500,275.795 288.903,275.887 288.295 C 275.979 287.686,275.977 286.786,275.882 286.295 C 275.787 285.803,275.711 286.300,275.714 287.400 M124.093 288.400 C 124.093 289.170,124.175 289.485,124.276 289.100 C 124.376 288.715,124.376 288.085,124.276 287.700 C 124.175 287.315,124.093 287.630,124.093 288.400 M274.893 296.800 C 274.893 297.570,274.975 297.885,275.076 297.500 C 275.176 297.115,275.176 296.485,275.076 296.100 C 274.975 295.715,274.893 296.030,274.893 296.800 M124.893 297.200 C 124.893 297.970,124.975 298.285,125.076 297.900 C 125.176 297.515,125.176 296.885,125.076 296.500 C 124.975 296.115,124.893 296.430,124.893 297.200 M274.093 305.600 C 274.093 306.370,274.175 306.685,274.276 306.300 C 274.376 305.915,274.376 305.285,274.276 304.900 C 274.175 304.515,274.093 304.830,274.093 305.600 M273.293 314.400 C 273.293 315.170,273.375 315.485,273.476 315.100 C 273.576 314.715,273.576 314.085,273.476 313.700 C 273.375 313.315,273.293 313.630,273.293 314.400 M126.493 315.200 C 126.493 315.970,126.575 316.285,126.676 315.900 C 126.776 315.515,126.776 314.885,126.676 314.500 C 126.575 314.115,126.493 314.430,126.493 315.200 "
            strokeWidth="5"
            fill="#ef9272"
            fillRule="evenodd"
          ></path>
          <path
            id="path5"
            d="M133.131 137.500 C 145.523 137.559,165.683 137.559,177.931 137.500 C 190.179 137.441,180.040 137.393,155.400 137.393 C 130.760 137.393,120.739 137.441,133.131 137.500 M288.752 141.913 C 288.621 142.707,288.679 143.081,288.901 142.859 C 289.103 142.657,289.201 142.067,289.119 141.546 C 288.993 140.745,288.937 140.802,288.752 141.913 M110.806 143.033 C 110.809 144.115,110.997 145.270,111.224 145.600 C 111.514 146.024,111.557 145.496,111.368 143.800 C 111.032 140.791,110.798 140.472,110.806 143.033 M287.818 151.418 C 287.665 152.439,287.622 153.355,287.722 153.455 C 287.822 153.555,288.029 152.802,288.182 151.782 C 288.335 150.761,288.378 149.845,288.278 149.745 C 288.178 149.645,287.971 150.398,287.818 151.418 M111.628 151.633 C 111.644 152.605,111.806 153.760,111.990 154.200 C 112.192 154.683,112.238 154.049,112.107 152.600 C 111.845 149.710,111.589 149.193,111.628 151.633 M112.423 160.233 C 112.436 161.095,112.603 162.520,112.794 163.400 C 113.052 164.586,113.084 164.224,112.919 162.000 C 112.677 158.747,112.386 157.710,112.423 160.233 M286.901 162.200 C 286.905 163.080,286.987 163.393,287.083 162.895 C 287.179 162.398,287.175 161.678,287.075 161.295 C 286.975 160.913,286.896 161.320,286.901 162.200 M113.285 169.400 C 113.277 170.060,113.410 171.500,113.582 172.600 C 113.836 174.235,113.897 174.345,113.917 173.200 C 113.930 172.430,113.797 170.990,113.620 170.000 C 113.388 168.691,113.296 168.528,113.285 169.400 M286.101 171.000 C 286.105 171.880,286.187 172.193,286.283 171.695 C 286.379 171.198,286.375 170.478,286.275 170.095 C 286.175 169.713,286.096 170.120,286.101 171.000 M150.272 175.400 C 150.399 176.500,150.569 177.475,150.651 177.567 C 150.932 177.882,150.720 175.399,150.380 174.400 C 150.151 173.726,150.116 174.051,150.272 175.400 M114.283 180.800 C 114.404 182.670,114.570 184.275,114.651 184.367 C 114.922 184.670,114.747 181.032,114.402 179.200 C 114.157 177.892,114.124 178.330,114.283 180.800 M150.924 181.800 C 150.926 183.120,151.001 183.612,151.090 182.893 C 151.179 182.174,151.177 181.094,151.086 180.493 C 150.995 179.892,150.922 180.480,150.924 181.800 M151.293 185.600 C 151.293 186.370,151.375 186.685,151.476 186.300 C 151.576 185.915,151.576 185.285,151.476 184.900 C 151.375 184.515,151.293 184.830,151.293 185.600 M114.893 187.600 C 114.893 188.370,114.975 188.685,115.076 188.300 C 115.176 187.915,115.176 187.285,115.076 186.900 C 114.975 186.515,114.893 186.830,114.893 187.600 M151.623 190.433 C 151.636 191.625,151.797 193.320,151.982 194.200 C 152.210 195.288,152.249 194.648,152.103 192.200 C 151.862 188.151,151.588 187.143,151.623 190.433 M115.324 191.400 C 115.326 192.720,115.401 193.212,115.490 192.493 C 115.579 191.774,115.577 190.694,115.486 190.093 C 115.395 189.492,115.322 190.080,115.324 191.400 M116.124 200.200 C 116.126 201.520,116.201 202.012,116.290 201.293 C 116.379 200.574,116.377 199.494,116.286 198.893 C 116.195 198.292,116.122 198.880,116.124 200.200 M152.677 201.800 C 152.798 203.560,152.965 205.075,153.049 205.167 C 153.319 205.464,153.150 202.250,152.799 200.400 C 152.542 199.047,152.512 199.394,152.677 201.800 M116.501 205.400 C 116.505 206.280,116.587 206.593,116.683 206.095 C 116.779 205.598,116.775 204.878,116.675 204.495 C 116.575 204.113,116.496 204.520,116.501 205.400 M116.934 210.000 C 116.934 211.650,117.005 212.325,117.091 211.500 C 117.178 210.675,117.178 209.325,117.091 208.500 C 117.005 207.675,116.934 208.350,116.934 210.000 M117.737 218.600 C 117.739 220.360,117.809 221.030,117.893 220.089 C 117.978 219.149,117.977 217.709,117.891 216.889 C 117.805 216.070,117.736 216.840,117.737 218.600 M282.101 218.200 C 282.105 219.080,282.187 219.393,282.283 218.895 C 282.379 218.398,282.375 217.678,282.275 217.295 C 282.175 216.913,282.096 217.320,282.101 218.200 M118.537 227.400 C 118.539 229.160,118.609 229.830,118.693 228.889 C 118.778 227.949,118.777 226.509,118.691 225.689 C 118.605 224.870,118.536 225.640,118.537 227.400 M281.301 227.000 C 281.305 227.880,281.387 228.193,281.483 227.695 C 281.579 227.198,281.575 226.478,281.475 226.095 C 281.375 225.713,281.296 226.120,281.301 227.000 M119.247 236.633 C 119.273 238.155,119.428 239.940,119.590 240.600 C 119.752 241.260,119.796 240.090,119.688 238.000 C 119.455 233.525,119.180 232.670,119.247 236.633 M280.501 236.200 C 280.505 237.080,280.587 237.393,280.683 236.895 C 280.779 236.398,280.775 235.678,280.675 235.295 C 280.575 234.913,280.496 235.320,280.501 236.200 M120.134 244.400 L 120.200 245.400 160.000 245.403 L 199.800 245.406 160.128 245.301 L 120.455 245.196 120.262 244.298 C 120.093 243.510,120.077 243.523,120.134 244.400 M279.693 244.800 C 279.693 245.570,279.775 245.885,279.876 245.500 C 279.976 245.115,279.976 244.485,279.876 244.100 C 279.775 243.715,279.693 244.030,279.693 244.800 M278.893 253.600 C 278.893 254.370,278.975 254.685,279.076 254.300 C 279.176 253.915,279.176 253.285,279.076 252.900 C 278.975 252.515,278.893 252.830,278.893 253.600 M241.354 260.977 C 241.232 261.294,241.203 261.879,241.289 262.277 C 241.387 262.728,241.524 262.512,241.654 261.700 C 241.871 260.338,241.730 259.996,241.354 260.977 M121.647 264.100 C 121.673 265.035,121.831 266.340,121.997 267.000 C 122.207 267.836,122.284 267.321,122.250 265.304 C 122.222 263.711,122.065 262.406,121.900 262.404 C 121.735 262.402,121.621 263.165,121.647 264.100 M158.001 263.852 C 158.186 264.703,158.433 265.850,158.548 266.400 C 158.664 266.950,158.682 266.424,158.590 265.231 C 158.497 264.037,158.251 262.891,158.042 262.682 C 157.804 262.444,157.788 262.877,158.001 263.852 M240.649 269.415 C 240.512 269.773,240.418 270.456,240.441 270.933 C 240.467 271.481,240.603 271.286,240.810 270.403 C 241.160 268.916,241.065 268.333,240.649 269.415 M122.440 272.833 C 122.462 274.025,122.627 275.450,122.806 276.000 C 122.999 276.592,123.042 275.776,122.911 274.000 C 122.647 270.436,122.384 269.783,122.440 272.833 M158.863 272.200 C 158.854 272.640,158.995 273.720,159.177 274.600 L 159.508 276.200 159.514 274.800 C 159.517 274.030,159.376 272.950,159.200 272.400 C 158.941 271.591,158.877 271.553,158.863 272.200 M239.849 278.215 C 239.712 278.573,239.618 279.256,239.641 279.733 C 239.667 280.281,239.803 280.086,240.010 279.203 C 240.360 277.716,240.265 277.133,239.849 278.215 M159.877 282.800 C 160.003 284.230,160.172 285.475,160.253 285.567 C 160.542 285.895,160.314 282.180,159.984 281.200 C 159.774 280.573,159.734 281.170,159.877 282.800 M276.352 281.513 C 276.221 282.307,276.279 282.681,276.501 282.459 C 276.703 282.257,276.801 281.667,276.719 281.146 C 276.593 280.345,276.537 280.402,276.352 281.513 M123.240 282.233 C 123.262 283.095,123.433 284.250,123.621 284.800 C 123.842 285.448,123.880 284.955,123.731 283.400 C 123.463 280.620,123.182 279.951,123.240 282.233 M238.768 289.300 C 238.649 290.160,238.710 290.650,238.912 290.448 C 239.105 290.255,239.198 289.581,239.119 288.949 C 238.987 287.891,238.959 287.919,238.768 289.300 M275.654 289.867 C 275.625 290.344,275.496 291.064,275.370 291.467 C 275.152 292.161,275.164 292.162,275.596 291.488 C 275.847 291.097,275.975 290.377,275.881 289.888 C 275.709 289.001,275.709 289.001,275.654 289.867 M124.047 290.833 C 124.073 291.585,124.241 292.740,124.420 293.400 C 124.635 294.189,124.670 293.778,124.523 292.200 C 124.277 289.555,123.973 288.681,124.047 290.833 M163.400 291.600 C 164.501 292.073,164.892 292.073,164.600 291.600 C 164.464 291.380,163.958 291.213,163.476 291.228 C 162.631 291.255,162.629 291.269,163.400 291.600 M175.200 294.800 C 175.530 295.013,176.070 295.188,176.400 295.188 C 176.933 295.188,176.933 295.145,176.400 294.800 C 176.070 294.587,175.530 294.412,175.200 294.412 C 174.667 294.412,174.667 294.455,175.200 294.800 M184.200 297.200 C 184.640 297.389,185.270 297.544,185.600 297.544 C 185.978 297.544,185.904 297.417,185.400 297.200 C 184.960 297.011,184.330 296.856,184.000 296.856 C 183.622 296.856,183.696 296.983,184.200 297.200 M214.000 297.200 C 213.176 297.464,213.141 297.526,213.800 297.554 C 214.240 297.573,214.870 297.413,215.200 297.200 C 215.901 296.747,215.414 296.747,214.000 297.200 M187.200 297.982 C 187.530 298.205,188.145 298.391,188.567 298.394 C 189.590 298.402,189.271 298.173,187.800 297.844 C 186.924 297.648,186.762 297.685,187.200 297.982 M274.752 299.113 C 274.621 299.907,274.679 300.281,274.901 300.059 C 275.103 299.857,275.201 299.267,275.119 298.746 C 274.993 297.945,274.937 298.002,274.752 299.113 M124.893 299.600 C 124.895 301.365,125.491 303.988,125.530 302.400 C 125.543 301.850,125.405 300.680,125.223 299.800 L 124.892 298.200 124.893 299.600 M193.000 299.600 C 193.440 299.789,194.160 299.938,194.600 299.932 C 195.243 299.923,195.204 299.857,194.400 299.600 C 193.032 299.162,191.981 299.162,193.000 299.600 M196.833 300.544 C 196.925 300.623,197.540 300.808,198.200 300.956 C 199.076 301.152,199.238 301.115,198.800 300.818 C 198.260 300.453,196.432 300.198,196.833 300.544 M125.652 309.000 C 125.630 310.100,125.787 311.270,126.000 311.600 C 126.493 312.364,126.504 310.928,126.023 308.600 L 125.692 307.000 125.652 309.000 M126.400 317.376 C 126.400 317.913,126.547 318.444,126.728 318.555 C 126.908 318.667,126.977 318.227,126.882 317.579 C 126.672 316.149,126.400 316.035,126.400 317.376 M165.000 329.600 C 165.136 329.820,165.642 329.987,166.124 329.972 C 166.969 329.945,166.971 329.931,166.200 329.600 C 165.099 329.127,164.708 329.127,165.000 329.600 M168.000 330.382 C 168.330 330.605,168.945 330.791,169.367 330.794 C 170.390 330.802,170.071 330.573,168.600 330.244 C 167.724 330.048,167.562 330.085,168.000 330.382 M170.800 331.182 C 171.130 331.405,171.745 331.591,172.167 331.594 C 173.190 331.602,172.871 331.373,171.400 331.044 C 170.524 330.848,170.362 330.885,170.800 331.182 M173.600 331.982 C 173.930 332.205,174.545 332.391,174.967 332.394 C 175.990 332.402,175.671 332.173,174.200 331.844 C 173.324 331.648,173.162 331.685,173.600 331.982 M176.400 332.752 C 176.730 332.938,177.630 333.202,178.400 333.338 C 179.243 333.488,179.561 333.452,179.200 333.248 C 178.870 333.062,177.970 332.798,177.200 332.662 C 176.357 332.512,176.039 332.548,176.400 332.752 M180.033 333.744 C 180.125 333.823,180.740 334.008,181.400 334.156 C 182.276 334.352,182.438 334.315,182.000 334.018 C 181.460 333.653,179.632 333.398,180.033 333.744 M182.833 334.544 C 182.925 334.623,183.540 334.808,184.200 334.956 C 185.076 335.152,185.238 335.115,184.800 334.818 C 184.260 334.453,182.432 334.198,182.833 334.544 M186.600 335.600 C 187.040 335.789,187.670 335.944,188.000 335.944 C 188.378 335.944,188.304 335.817,187.800 335.600 C 187.360 335.411,186.730 335.256,186.400 335.256 C 186.022 335.256,186.096 335.383,186.600 335.600 "
            strokeWidth="5"
            fill="#e47454"
            fillRule="evenodd"
          ></path>
          <path
            id="path6"
            d="M111.055 137.911 C 110.949 138.082,111.016 139.657,111.205 141.411 C 111.538 144.516,111.938 148.971,112.801 159.200 C 113.033 161.950,113.391 166.000,113.597 168.200 C 113.802 170.400,114.164 174.360,114.401 177.000 C 114.639 179.640,114.991 183.060,115.183 184.600 L 115.534 187.400 115.345 184.000 C 115.242 182.130,114.885 177.630,114.554 174.000 C 113.755 165.260,113.090 157.673,112.014 145.000 C 111.789 142.360,111.500 139.705,111.371 139.101 L 111.137 138.002 199.668 137.900 L 288.200 137.798 199.724 137.699 C 151.062 137.645,111.161 137.740,111.055 137.911 M150.080 173.280 C 149.816 173.544,149.618 174.129,149.640 174.580 C 149.673 175.267,149.725 175.238,149.958 174.400 L 150.236 173.400 175.018 173.195 L 199.800 172.991 175.180 172.895 C 156.457 172.823,150.445 172.915,150.080 173.280 M150.297 181.200 C 150.415 183.510,150.576 185.475,150.656 185.567 C 150.941 185.896,150.746 180.165,150.419 178.600 C 150.200 177.556,150.158 178.460,150.297 181.200 M151.097 190.000 C 151.215 192.310,151.376 194.275,151.456 194.367 C 151.741 194.696,151.546 188.965,151.219 187.400 C 151.000 186.356,150.958 187.260,151.097 190.000 M115.630 190.233 C 115.646 191.755,115.811 193.810,115.996 194.800 C 116.221 196.002,116.261 195.139,116.115 192.200 C 115.867 187.215,115.585 186.072,115.630 190.233 M151.655 196.000 C 151.589 198.470,152.714 208.874,153.086 209.246 C 153.294 209.454,163.340 209.561,176.823 209.500 L 200.200 209.393 176.772 209.297 L 153.344 209.200 152.872 205.655 C 152.612 203.705,152.390 201.140,152.377 199.955 C 152.364 198.770,152.205 197.080,152.023 196.200 L 151.692 194.600 151.655 196.000 M116.423 199.633 C 116.436 200.825,116.602 202.520,116.792 203.400 C 117.032 204.514,117.070 203.906,116.915 201.400 C 116.666 197.347,116.388 196.350,116.423 199.633 M117.223 208.633 C 117.236 209.715,117.403 211.320,117.595 212.200 C 117.844 213.343,117.880 212.828,117.721 210.400 C 117.472 206.612,117.188 205.603,117.223 208.633 M118.097 217.600 C 118.091 218.590,118.221 220.480,118.385 221.800 L 118.682 224.200 118.706 222.000 C 118.719 220.790,118.590 218.900,118.418 217.800 L 118.107 215.800 118.097 217.600 M118.890 226.800 C 118.884 227.570,119.016 229.190,119.183 230.400 L 119.487 232.600 119.514 230.800 C 119.529 229.810,119.397 228.190,119.220 227.200 C 118.927 225.551,118.899 225.517,118.890 226.800 M119.879 238.000 C 120.002 239.870,120.170 241.475,120.251 241.567 C 120.539 241.889,120.350 237.782,120.005 236.200 C 119.756 235.057,119.720 235.572,119.879 238.000 M120.470 244.200 C 120.610 244.996,120.926 245.000,181.805 245.002 L 243.000 245.004 182.200 244.903 C 124.803 244.808,121.370 244.763,120.864 244.101 C 120.363 243.446,120.337 243.453,120.470 244.200 M122.262 265.300 C 122.590 268.583,122.800 268.726,122.800 265.667 L 122.800 263.200 140.200 263.200 L 157.600 263.200 157.647 265.100 C 157.673 266.145,157.832 267.540,158.000 268.200 L 158.305 269.400 158.353 267.956 C 158.379 267.162,158.286 265.677,158.146 264.656 L 157.891 262.800 139.952 262.800 L 122.012 262.800 122.262 265.300 M158.423 272.233 C 158.436 273.755,158.604 275.720,158.797 276.600 C 159.035 277.689,159.076 276.860,158.924 274.000 C 158.666 269.159,158.389 268.184,158.423 272.233 M123.081 273.600 C 123.203 275.470,123.370 277.075,123.451 277.167 C 123.733 277.482,123.505 272.598,123.182 271.400 C 122.989 270.684,122.948 271.571,123.081 273.600 M123.884 283.000 C 124.006 285.200,124.171 287.075,124.253 287.167 C 124.537 287.488,124.302 281.387,123.984 280.200 C 123.800 279.510,123.757 280.701,123.884 283.000 M159.304 281.800 C 159.299 283.120,159.432 284.740,159.600 285.400 L 159.905 286.600 159.913 285.200 C 159.917 284.430,159.784 282.810,159.617 281.600 L 159.313 279.400 159.304 281.800 M124.491 289.600 C 124.489 290.590,124.621 292.480,124.785 293.800 L 125.082 296.200 125.094 293.200 C 125.100 291.550,124.968 289.660,124.800 289.000 C 124.526 287.925,124.494 287.987,124.491 289.600 M160.131 290.000 C 160.189 291.180,160.357 291.415,161.200 291.493 C 162.079 291.575,162.104 291.546,161.400 291.253 C 160.960 291.070,160.479 290.398,160.331 289.760 C 160.078 288.672,160.066 288.687,160.131 290.000 M162.990 291.984 C 163.132 292.213,163.717 292.400,164.290 292.400 C 165.544 292.400,165.399 292.208,163.866 291.840 C 163.123 291.662,162.821 291.711,162.990 291.984 M165.790 292.784 C 165.932 293.013,166.517 293.200,167.090 293.200 C 168.344 293.200,168.199 293.008,166.666 292.640 C 165.923 292.462,165.621 292.511,165.790 292.784 M168.490 293.424 C 168.613 293.547,170.128 294.009,171.857 294.451 C 173.586 294.893,175.540 295.407,176.200 295.593 C 184.722 297.991,189.690 299.243,189.891 299.042 C 190.003 298.930,189.578 298.724,188.947 298.584 C 188.316 298.443,187.260 298.170,186.600 297.976 C 185.297 297.593,182.201 296.758,177.800 295.601 C 176.260 295.197,173.650 294.495,172.000 294.042 C 168.866 293.182,168.117 293.050,168.490 293.424 M125.478 300.800 C 125.600 303.110,125.768 305.075,125.850 305.167 C 126.140 305.489,125.902 298.986,125.580 297.800 C 125.392 297.104,125.349 298.364,125.478 300.800 M190.433 299.344 C 190.525 299.423,191.140 299.608,191.800 299.756 C 192.676 299.952,192.838 299.915,192.400 299.618 C 191.860 299.253,190.032 298.998,190.433 299.344 M194.000 300.400 C 195.368 300.838,196.419 300.838,195.400 300.400 C 194.960 300.211,194.240 300.062,193.800 300.068 C 193.157 300.077,193.196 300.143,194.000 300.400 M197.000 301.200 C 197.440 301.389,198.160 301.544,198.600 301.544 L 199.400 301.544 198.600 301.200 C 198.160 301.011,197.440 300.856,197.000 300.856 L 196.200 300.856 197.000 301.200 M126.276 309.600 C 126.400 311.910,126.568 313.875,126.650 313.967 C 126.948 314.299,126.745 308.560,126.403 307.000 C 126.165 305.911,126.124 306.740,126.276 309.600 M126.854 316.000 C 126.794 318.584,126.599 318.437,132.200 320.055 C 135.828 321.103,141.959 322.744,143.000 322.946 C 144.610 323.258,143.239 322.661,140.800 321.988 C 138.597 321.381,136.529 320.788,135.200 320.385 C 134.650 320.217,132.725 319.680,130.923 319.191 L 127.645 318.302 127.270 316.251 L 126.895 314.200 126.854 316.000 M144.433 323.344 C 144.905 323.750,146.843 323.993,146.610 323.616 C 146.468 323.387,145.883 323.200,145.310 323.200 C 144.736 323.200,144.342 323.265,144.433 323.344 M147.233 324.144 C 147.705 324.550,149.643 324.793,149.410 324.416 C 149.268 324.187,148.683 324.000,148.110 324.000 C 147.536 324.000,147.142 324.065,147.233 324.144 M150.033 324.944 C 150.505 325.350,152.443 325.593,152.210 325.216 C 152.068 324.987,151.483 324.800,150.910 324.800 C 150.336 324.800,149.942 324.865,150.033 324.944 M153.800 326.000 C 154.996 326.514,155.995 326.514,155.200 326.000 C 154.870 325.787,154.240 325.622,153.800 325.634 L 153.000 325.656 153.800 326.000 M156.600 326.800 C 157.796 327.314,158.795 327.314,158.000 326.800 C 157.670 326.587,157.040 326.422,156.600 326.434 L 155.800 326.456 156.600 326.800 M158.833 327.344 C 159.305 327.750,161.243 327.993,161.010 327.616 C 160.868 327.387,160.283 327.200,159.710 327.200 C 159.136 327.200,158.742 327.265,158.833 327.344 M162.400 328.400 C 163.188 328.909,164.115 328.909,163.800 328.400 C 163.664 328.180,163.158 328.003,162.676 328.006 C 161.964 328.011,161.912 328.085,162.400 328.400 M165.400 329.200 C 165.840 329.389,166.470 329.544,166.800 329.544 C 167.178 329.544,167.104 329.417,166.600 329.200 C 166.160 329.011,165.530 328.856,165.200 328.856 C 164.822 328.856,164.896 328.983,165.400 329.200 M168.200 330.000 C 169.301 330.473,169.692 330.473,169.400 330.000 C 169.264 329.780,168.758 329.613,168.276 329.628 C 167.431 329.655,167.429 329.669,168.200 330.000 M171.000 330.800 C 172.196 331.314,173.195 331.314,172.400 330.800 C 172.070 330.587,171.440 330.422,171.000 330.434 L 170.200 330.456 171.000 330.800 M174.000 331.600 C 174.330 331.813,174.960 331.978,175.400 331.966 L 176.200 331.944 175.400 331.600 C 174.204 331.086,173.205 331.086,174.000 331.600 M176.800 332.400 C 177.130 332.613,177.760 332.778,178.200 332.766 L 179.000 332.744 178.200 332.400 C 177.004 331.886,176.005 331.886,176.800 332.400 M179.269 333.002 C 179.515 333.249,184.935 334.734,186.600 335.011 C 187.260 335.121,186.000 334.669,183.800 334.007 C 179.869 332.823,178.867 332.601,179.269 333.002 M188.069 335.402 C 188.216 335.550,189.026 335.844,189.868 336.058 C 190.711 336.271,191.940 336.599,192.600 336.786 C 197.178 338.088,199.802 338.732,199.946 338.587 C 200.139 338.394,199.765 338.267,197.000 337.585 C 195.900 337.314,193.920 336.772,192.600 336.380 C 189.423 335.437,187.741 335.074,188.069 335.402 "
            strokeWidth="5"
            fill="#eca494"
            fillRule="evenodd"
          ></path>
          <path
            id="path7"
            d="M288.101 146.200 C 288.105 147.080,288.187 147.393,288.283 146.895 C 288.379 146.398,288.375 145.678,288.275 145.295 C 288.175 144.913,288.096 145.320,288.101 146.200 M287.029 156.029 C 286.876 157.379,286.833 158.566,286.933 158.667 C 287.034 158.767,287.244 157.747,287.400 156.400 C 287.556 155.053,287.599 153.866,287.495 153.762 C 287.391 153.658,287.181 154.678,287.029 156.029 M286.200 165.200 C 286.043 166.766,286.000 168.133,286.104 168.237 C 286.208 168.342,286.420 167.144,286.575 165.575 C 286.730 164.006,286.773 162.639,286.671 162.538 C 286.569 162.436,286.357 163.634,286.200 165.200 M221.069 173.500 C 232.767 173.559,252.027 173.559,263.869 173.500 C 275.711 173.441,266.140 173.393,242.600 173.393 C 219.060 173.393,209.371 173.441,221.069 173.500 M220.531 209.500 C 231.932 209.559,250.472 209.559,261.731 209.500 C 272.989 209.441,263.660 209.393,241.000 209.393 C 218.340 209.393,209.129 209.441,220.531 209.500 M282.256 210.484 C 282.121 210.988,282.028 211.850,282.049 212.400 C 282.072 212.989,282.231 212.671,282.436 211.625 C 282.803 209.752,282.673 208.927,282.256 210.484 M281.709 217.600 C 281.709 218.590,281.787 218.995,281.882 218.500 C 281.978 218.005,281.978 217.195,281.882 216.700 C 281.787 216.205,281.709 216.610,281.709 217.600 M281.293 220.800 C 281.293 221.570,281.375 221.885,281.476 221.500 C 281.576 221.115,281.576 220.485,281.476 220.100 C 281.375 219.715,281.293 220.030,281.293 220.800 M280.600 228.000 C 280.444 229.347,280.401 230.534,280.505 230.638 C 280.609 230.742,280.819 229.722,280.971 228.371 C 281.124 227.021,281.167 225.834,281.067 225.733 C 280.966 225.633,280.756 226.653,280.600 228.000 M280.101 235.400 C 280.105 236.280,280.187 236.593,280.283 236.095 C 280.379 235.598,280.375 234.878,280.275 234.495 C 280.175 234.113,280.096 234.520,280.101 235.400 M279.701 238.600 C 279.705 239.480,279.787 239.793,279.883 239.295 C 279.979 238.798,279.975 238.078,279.875 237.695 C 279.775 237.313,279.696 237.720,279.701 238.600 M278.914 247.800 C 278.917 248.900,278.995 249.303,279.087 248.695 C 279.179 248.086,279.177 247.186,279.082 246.695 C 278.987 246.203,278.911 246.700,278.914 247.800 M242.920 249.600 C 242.920 250.810,242.995 251.305,243.087 250.700 C 243.178 250.095,243.178 249.105,243.087 248.500 C 242.995 247.895,242.920 248.390,242.920 249.600 M278.493 253.200 C 278.493 253.970,278.575 254.285,278.676 253.900 C 278.776 253.515,278.776 252.885,278.676 252.500 C 278.575 252.115,278.493 252.430,278.493 253.200 M278.120 256.800 C 278.120 258.010,278.195 258.505,278.287 257.900 C 278.378 257.295,278.378 256.305,278.287 255.700 C 278.195 255.095,278.120 255.590,278.120 256.800 M242.120 258.400 C 242.120 259.610,242.195 260.105,242.287 259.500 C 242.378 258.895,242.378 257.905,242.287 257.300 C 242.195 256.695,242.120 257.190,242.120 258.400 M277.693 262.000 C 277.693 262.770,277.775 263.085,277.876 262.700 C 277.976 262.315,277.976 261.685,277.876 261.300 C 277.775 260.915,277.693 261.230,277.693 262.000 M241.693 263.600 C 241.693 264.370,241.775 264.685,241.876 264.300 C 241.976 263.915,241.976 263.285,241.876 262.900 C 241.775 262.515,241.693 262.830,241.693 263.600 M277.320 265.600 C 277.320 266.810,277.395 267.305,277.487 266.700 C 277.578 266.095,277.578 265.105,277.487 264.500 C 277.395 263.895,277.320 264.390,277.320 265.600 M241.314 267.800 C 241.317 268.900,241.395 269.303,241.487 268.695 C 241.579 268.086,241.577 267.186,241.482 266.695 C 241.387 266.203,241.311 266.700,241.314 267.800 M240.893 272.400 C 240.893 273.170,240.975 273.485,241.076 273.100 C 241.176 272.715,241.176 272.085,241.076 271.700 C 240.975 271.315,240.893 271.630,240.893 272.400 M276.520 274.800 C 276.520 276.010,276.595 276.505,276.687 275.900 C 276.778 275.295,276.778 274.305,276.687 273.700 C 276.595 273.095,276.520 273.590,276.520 274.800 M240.520 277.200 C 240.520 278.410,240.595 278.905,240.687 278.300 C 240.778 277.695,240.778 276.705,240.687 276.100 C 240.595 275.495,240.520 275.990,240.520 277.200 M275.709 284.000 C 275.709 284.990,275.787 285.395,275.882 284.900 C 275.978 284.405,275.978 283.595,275.882 283.100 C 275.787 282.605,275.709 283.010,275.709 284.000 M239.714 286.200 C 239.717 287.300,239.795 287.703,239.887 287.095 C 239.979 286.486,239.977 285.586,239.882 285.095 C 239.787 284.603,239.711 285.100,239.714 286.200 M239.246 289.267 C 239.221 289.634,239.096 290.264,238.970 290.667 C 238.752 291.362,238.763 291.363,239.197 290.687 C 239.448 290.296,239.573 289.666,239.473 289.287 C 239.311 288.668,239.288 288.666,239.246 289.267 M274.920 293.600 C 274.920 294.810,274.995 295.305,275.087 294.700 C 275.178 294.095,275.178 293.105,275.087 292.500 C 274.995 291.895,274.920 292.390,274.920 293.600 M230.400 293.218 C 229.962 293.515,230.124 293.552,231.000 293.356 C 232.471 293.027,232.790 292.798,231.767 292.806 C 231.345 292.809,230.730 292.995,230.400 293.218 M274.120 302.400 C 274.120 303.610,274.195 304.105,274.287 303.500 C 274.378 302.895,274.378 301.905,274.287 301.300 C 274.195 300.695,274.120 301.190,274.120 302.400 M273.693 306.000 C 273.693 306.770,273.775 307.085,273.876 306.700 C 273.976 306.315,273.976 305.685,273.876 305.300 C 273.775 304.915,273.693 305.230,273.693 306.000 M273.320 311.200 C 273.320 312.410,273.395 312.905,273.487 312.300 C 273.578 311.695,273.578 310.705,273.487 310.100 C 273.395 309.495,273.320 309.990,273.320 311.200 "
            strokeWidth="5"
            fill="#f4ac84"
            fillRule="evenodd"
          ></path>
          <path
            id="path8"
            d="M129.300 77.900 C 168.185 77.956,231.815 77.956,270.700 77.900 C 309.585 77.844,277.770 77.798,200.000 77.798 C 122.230 77.798,90.415 77.844,129.300 77.900 M324.514 281.000 C 324.517 282.100,324.595 282.503,324.687 281.895 C 324.779 281.286,324.777 280.386,324.682 279.895 C 324.587 279.403,324.511 279.900,324.514 281.000 M75.314 281.400 C 75.317 282.500,75.395 282.903,75.487 282.295 C 75.579 281.686,75.577 280.786,75.482 280.295 C 75.387 279.803,75.311 280.300,75.314 281.400 "
            strokeWidth="5"
            fill="#e83c28"
            fillRule="evenodd"
          ></path>
        </g>
      </svg>
      <svg
      id="css"
      className={this.state.displayC}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="400"
      height="559.7862391449565"
      viewBox="0, 0, 400,559.7862391449565"
    >
      <g id="svgg">
        <path
          id="path0"
          d="M81.491 193.180 L 73.603 193.320 76.601 217.502 C 78.250 230.802,79.605 241.713,79.612 241.750 C 79.620 241.787,108.213 241.821,143.153 241.825 C 187.182 241.831,206.534 241.918,206.204 242.111 C 205.941 242.263,178.346 253.798,144.881 267.743 L 84.035 293.098 84.097 294.111 C 84.314 297.603,87.692 339.858,87.794 340.347 L 87.919 340.949 111.762 340.949 C 135.423 340.950,260.075 341.467,260.142 341.565 C 260.267 341.748,256.293 405.119,256.147 405.264 C 256.047 405.365,243.284 409.019,227.784 413.385 L 199.604 421.324 173.215 414.659 C 158.702 410.994,146.450 407.926,145.989 407.842 C 144.954 407.653,145.236 409.893,143.314 386.573 L 141.777 367.936 116.543 367.936 L 91.308 367.936 91.449 369.339 C 91.527 370.110,93.016 387.292,94.759 407.521 L 97.929 444.300 149.104 459.435 L 200.280 474.570 248.904 460.388 C 275.647 452.588,298.509 445.910,299.707 445.547 L 301.885 444.889 302.051 443.353 C 302.316 440.894,315.030 294.264,315.030 293.664 L 315.030 293.121 257.468 293.053 L 199.906 292.986 259.613 267.468 C 307.637 246.943,319.343 241.846,319.437 241.416 C 319.501 241.122,320.582 230.601,321.839 218.036 C 323.096 205.471,324.196 194.679,324.283 194.055 L 324.443 192.919 206.911 192.980 C 142.268 193.013,85.829 193.104,81.491 193.180 "
          strokeWidth="5"
          fill="#efeeee"
          fillRule="evenodd"
        />
        <path
          id="path1"
          d="M0.643 112.602 C 0.744 113.838,0.871 115.311,0.927 115.875 C 1.139 118.014,1.335 120.167,1.472 121.844 C 1.549 122.799,1.670 124.061,1.741 124.649 C 1.811 125.237,1.931 126.560,2.007 127.589 C 2.082 128.617,2.199 129.820,2.265 130.261 C 2.331 130.701,2.456 132.084,2.542 133.333 C 2.629 134.582,2.752 135.905,2.816 136.273 C 2.880 136.640,3.056 138.444,3.206 140.281 C 3.594 145.023,3.720 146.413,3.871 147.629 C 3.944 148.216,4.069 149.659,4.149 150.835 C 4.228 152.011,4.349 153.333,4.416 153.774 C 4.484 154.215,4.661 156.019,4.811 157.782 C 5.255 163.014,5.334 163.875,5.478 164.997 C 5.553 165.585,5.737 167.508,5.886 169.272 C 6.035 171.035,6.272 173.741,6.412 175.284 C 6.552 176.827,6.733 178.931,6.813 179.960 C 6.893 180.989,7.015 182.191,7.085 182.632 C 7.154 183.073,7.335 184.876,7.486 186.640 C 7.799 190.297,8.200 194.771,8.408 196.927 C 8.577 198.676,8.967 202.882,9.337 206.947 C 9.485 208.564,9.731 211.269,9.885 212.959 C 10.039 214.649,10.280 217.234,10.420 218.704 C 10.757 222.224,11.146 226.508,11.490 230.461 C 11.644 232.224,11.832 234.208,11.908 234.870 C 12.041 236.013,12.198 237.721,12.818 244.756 C 13.226 249.383,13.705 254.534,14.159 259.185 C 14.295 260.581,14.479 262.565,14.567 263.594 C 14.880 267.263,15.314 271.966,15.762 276.553 C 15.898 277.949,16.082 279.933,16.170 280.962 C 16.362 283.208,16.756 287.568,16.968 289.780 C 17.218 292.399,17.595 296.513,17.899 299.933 C 18.055 301.697,18.238 303.681,18.305 304.342 C 18.510 306.353,18.671 308.069,18.972 311.423 C 19.130 313.186,19.375 315.832,19.516 317.301 C 19.883 321.115,20.561 328.557,20.855 331.997 C 20.993 333.614,21.165 335.478,21.237 336.139 C 21.309 336.800,21.552 339.385,21.777 341.884 C 22.349 348.234,22.612 351.104,22.844 353.507 C 23.239 357.605,23.802 363.724,23.926 365.264 C 24.003 366.219,24.121 367.542,24.188 368.203 C 24.255 368.864,24.372 370.067,24.447 370.875 C 24.523 371.683,24.765 374.269,24.985 376.620 C 25.205 378.971,25.449 381.677,25.527 382.632 C 25.666 384.326,25.766 385.381,26.044 388.110 C 26.191 389.540,26.886 397.133,27.133 400.000 C 27.216 400.955,27.459 403.601,27.674 405.878 C 27.889 408.156,28.187 411.343,28.336 412.959 C 28.485 414.576,28.657 416.379,28.719 416.967 C 28.780 417.555,28.902 418.998,28.989 420.174 C 29.076 421.349,29.203 422.732,29.271 423.246 C 29.340 423.761,29.636 426.887,29.930 430.194 C 30.524 436.873,30.596 437.660,30.980 441.683 C 31.538 447.539,31.782 450.160,31.936 451.971 C 32.023 452.999,32.142 454.322,32.200 454.910 C 32.258 455.498,32.435 457.422,32.593 459.185 C 32.752 460.949,32.945 462.872,33.022 463.460 C 33.099 464.048,33.215 465.251,33.280 466.132 C 33.344 467.014,33.456 468.397,33.528 469.205 C 33.600 470.013,33.724 471.456,33.805 472.411 C 33.885 473.367,34.010 474.629,34.082 475.217 C 34.226 476.392,34.692 481.319,34.879 483.634 C 35.137 486.818,35.315 488.886,35.410 489.780 C 35.464 490.294,35.639 492.098,35.799 493.788 C 35.958 495.478,36.151 497.401,36.226 498.063 C 36.302 498.724,36.420 500.107,36.488 501.136 C 36.556 502.164,36.669 503.547,36.739 504.208 C 36.808 504.870,36.935 506.253,37.020 507.281 C 37.106 508.310,37.288 510.032,37.425 511.108 C 37.563 512.184,37.677 513.627,37.679 514.315 C 37.685 516.084,37.698 516.094,41.687 517.127 C 45.057 518.000,47.043 518.529,55.847 520.899 C 57.758 521.414,60.884 522.255,62.795 522.770 C 64.705 523.284,67.831 524.126,69.742 524.640 C 71.652 525.154,74.779 525.996,76.689 526.510 C 78.600 527.025,81.695 527.859,83.568 528.364 C 85.441 528.868,88.568 529.710,90.516 530.234 C 92.463 530.758,95.620 531.607,97.531 532.122 C 99.441 532.636,102.567 533.478,104.478 533.992 C 106.388 534.506,109.515 535.348,111.425 535.862 C 113.336 536.377,116.462 537.219,118.372 537.733 C 120.283 538.247,123.379 539.079,125.252 539.581 C 129.448 540.706,132.174 541.441,134.269 542.012 C 135.150 542.252,136.713 542.673,137.742 542.947 C 138.771 543.221,140.334 543.642,141.216 543.882 C 142.098 544.123,143.661 544.543,144.689 544.817 C 145.718 545.091,147.281 545.512,148.163 545.753 C 149.045 545.993,150.608 546.414,151.637 546.688 C 152.665 546.962,154.228 547.383,155.110 547.623 C 155.992 547.863,157.555 548.284,158.584 548.558 C 159.613 548.832,161.176 549.253,162.057 549.493 C 162.939 549.734,164.502 550.155,165.531 550.429 C 166.560 550.702,168.123 551.123,169.005 551.364 C 169.886 551.604,171.450 552.025,172.478 552.299 C 173.507 552.573,175.070 552.994,175.952 553.234 C 176.834 553.475,178.397 553.896,179.426 554.169 C 180.454 554.443,182.017 554.864,182.899 555.105 C 183.781 555.345,185.344 555.766,186.373 556.040 C 187.401 556.314,188.965 556.738,189.846 556.983 C 190.728 557.228,191.931 557.543,192.518 557.684 C 193.622 557.949,196.325 558.703,198.665 559.398 L 200.003 559.795 240.215 548.956 C 262.332 542.995,289.325 535.728,300.200 532.807 C 311.075 529.886,321.176 527.172,322.645 526.776 C 324.115 526.381,326.580 525.721,328.123 525.311 C 329.666 524.901,332.311 524.192,334.001 523.737 C 335.691 523.281,338.697 522.472,340.681 521.939 C 342.665 521.405,345.731 520.579,347.495 520.102 C 349.259 519.625,352.385 518.786,354.442 518.236 C 356.500 517.687,359.025 516.989,360.053 516.685 C 361.082 516.381,362.004 516.125,362.102 516.116 C 362.469 516.081,362.531 515.767,362.689 513.160 C 362.778 511.690,362.908 510.007,362.978 509.419 C 363.192 507.621,363.796 501.308,364.052 498.196 C 364.137 497.168,364.255 495.725,364.316 494.990 C 364.376 494.255,364.493 492.993,364.575 492.184 C 364.658 491.376,364.851 489.392,365.005 487.776 C 365.159 486.159,365.334 484.355,365.396 483.768 C 365.457 483.180,365.575 481.857,365.658 480.828 C 365.922 477.555,365.998 476.725,366.987 466.266 C 367.216 463.841,367.461 461.136,367.530 460.254 C 367.599 459.372,367.779 457.388,367.930 455.845 C 368.081 454.302,368.325 451.717,368.472 450.100 C 368.618 448.484,368.807 446.444,368.891 445.568 C 368.975 444.692,369.088 443.369,369.142 442.629 C 369.196 441.888,369.305 440.741,369.384 440.080 C 369.462 439.419,369.594 438.096,369.678 437.141 C 369.761 436.186,369.939 434.262,370.075 432.866 C 370.353 429.990,370.625 426.877,370.750 425.148 C 370.797 424.503,370.901 423.421,370.982 422.743 C 371.063 422.065,371.198 420.728,371.281 419.773 C 371.364 418.818,371.540 416.894,371.672 415.498 C 372.099 410.989,372.281 408.971,372.345 408.016 C 372.380 407.502,372.490 406.299,372.589 405.344 C 372.815 403.176,372.923 402.025,373.280 397.996 C 373.437 396.232,373.619 394.248,373.686 393.587 C 373.854 391.928,374.553 384.239,374.890 380.361 C 375.043 378.597,375.280 376.132,375.416 374.883 C 375.634 372.882,375.878 370.206,376.354 364.596 C 376.516 362.677,376.842 359.160,377.394 353.373 C 377.618 351.022,377.870 348.317,377.954 347.361 C 378.313 343.259,378.611 340.012,378.995 336.005 C 379.220 333.654,379.472 330.949,379.555 329.993 C 379.704 328.271,379.832 326.884,380.606 318.637 C 380.827 316.286,381.075 313.580,381.158 312.625 C 381.318 310.768,381.644 307.275,382.079 302.739 C 382.347 299.954,382.583 297.299,382.768 294.990 C 382.821 294.329,382.932 293.156,383.015 292.385 C 383.377 289.025,384.119 280.905,384.365 277.622 C 384.414 276.961,384.518 275.939,384.596 275.351 C 384.674 274.763,384.813 273.320,384.904 272.144 C 384.995 270.969,385.112 269.706,385.164 269.339 C 385.216 268.971,385.338 267.709,385.437 266.533 C 385.535 265.357,385.668 263.854,385.732 263.193 C 385.797 262.532,385.904 261.259,385.972 260.364 C 386.039 259.470,386.151 258.328,386.219 257.826 C 386.288 257.324,386.418 255.952,386.509 254.776 C 386.599 253.601,386.716 252.338,386.767 251.971 C 386.819 251.603,386.942 250.341,387.040 249.165 C 387.331 245.689,387.422 244.689,387.563 243.420 C 387.637 242.759,387.762 241.376,387.841 240.347 C 387.920 239.319,388.038 238.056,388.105 237.542 C 388.171 237.027,388.297 235.678,388.384 234.543 C 388.472 233.409,388.588 232.206,388.642 231.871 C 388.697 231.537,388.816 230.180,388.908 228.858 C 388.999 227.535,389.123 226.212,389.182 225.919 C 389.241 225.625,389.359 224.362,389.444 223.113 C 389.529 221.864,389.651 220.481,389.715 220.040 C 389.779 219.599,389.901 218.337,389.986 217.234 C 390.072 216.132,390.190 214.870,390.250 214.429 C 390.310 213.988,390.426 212.786,390.510 211.757 C 390.593 210.728,390.776 208.624,390.916 207.081 C 391.056 205.538,391.291 202.887,391.437 201.191 C 391.583 199.494,391.761 197.691,391.832 197.183 C 391.903 196.675,392.030 195.418,392.113 194.389 C 392.196 193.360,392.381 191.226,392.525 189.646 C 392.668 188.066,392.898 185.481,393.036 183.901 C 393.174 182.321,393.351 180.548,393.430 179.960 C 393.510 179.372,393.640 177.941,393.719 176.780 C 393.799 175.619,393.917 174.417,393.982 174.108 C 394.047 173.800,394.163 172.645,394.241 171.543 C 394.418 169.022,394.855 164.041,395.039 162.458 C 395.174 161.290,395.636 156.341,395.837 153.908 C 396.038 151.475,396.289 148.672,396.387 147.762 C 396.443 147.248,396.562 146.045,396.653 145.090 C 396.743 144.135,396.932 142.151,397.071 140.681 C 397.211 139.212,397.378 137.348,397.444 136.540 C 397.647 134.012,397.887 131.372,398.014 130.261 C 398.081 129.673,398.254 127.809,398.397 126.119 C 398.541 124.429,398.716 122.625,398.786 122.111 C 398.856 121.597,398.982 120.214,399.064 119.038 C 399.147 117.862,399.265 116.600,399.326 116.232 C 399.387 115.865,399.513 114.392,399.607 112.959 L 399.778 110.354 200.120 110.354 L 0.461 110.354 0.643 112.602 M362.057 143.547 C 362.057 145.005,331.786 489.421,331.646 489.559 C 331.545 489.659,302.124 497.632,266.266 507.277 C 230.407 516.923,200.859 524.876,200.603 524.950 C 200.162 525.078,200.133 523.713,200.068 499.891 L 200.000 474.698 191.182 472.086 C 186.333 470.650,163.316 463.843,140.034 456.958 C 103.600 446.185,97.695 444.370,97.645 443.931 C 97.510 442.736,97.013 437.245,96.862 435.271 C 96.800 434.462,96.679 433.079,96.594 432.198 C 96.509 431.316,96.389 429.933,96.327 429.125 C 96.265 428.317,96.154 426.994,96.079 426.186 C 96.005 425.377,95.882 423.995,95.806 423.113 C 95.730 422.231,95.610 420.848,95.539 420.040 C 95.468 419.232,95.341 417.789,95.257 416.834 C 95.173 415.878,95.054 414.436,94.991 413.627 C 94.929 412.819,94.809 411.436,94.724 410.554 C 94.639 409.673,94.519 408.290,94.457 407.482 C 94.395 406.673,94.283 405.351,94.209 404.542 C 93.977 402.018,93.773 399.656,93.655 398.130 C 93.593 397.321,93.473 395.939,93.388 395.057 C 93.303 394.175,93.183 392.792,93.121 391.984 C 93.059 391.176,92.947 389.853,92.873 389.045 C 92.799 388.236,92.676 386.854,92.600 385.972 C 92.524 385.090,92.403 383.707,92.332 382.899 C 91.943 378.485,91.866 377.584,91.782 376.486 C 91.732 375.825,91.600 374.322,91.490 373.146 C 91.379 371.971,91.280 370.287,91.269 369.405 L 91.249 367.802 116.545 367.734 L 141.841 367.666 141.980 368.402 C 142.057 368.807,142.817 377.655,143.669 388.064 C 144.521 398.473,145.290 407.106,145.378 407.249 C 145.523 407.482,199.004 421.101,199.800 421.106 C 200.065 421.108,200.134 412.969,200.134 381.296 L 200.134 341.483 199.532 341.462 C 199.202 341.451,173.956 341.355,143.430 341.249 C 112.904 341.143,87.860 340.989,87.777 340.905 C 87.485 340.613,83.785 293.025,84.046 292.924 C 84.187 292.870,110.334 281.973,142.151 268.709 L 200.000 244.592 200.081 243.338 L 200.163 242.084 139.761 242.084 C 104.227 242.084,79.359 241.985,79.359 241.844 C 79.359 241.712,78.036 230.927,76.420 217.878 C 74.803 204.829,73.480 193.875,73.480 193.536 L 73.480 192.919 136.807 192.919 L 200.134 192.919 200.134 168.069 L 200.134 143.220 281.096 143.220 C 344.826 143.220,362.057 143.289,362.057 143.547 "
          strokeWidth="5"
          fill="#2364ac"
          fillRule="evenodd"
        />
        <path
          id="path2"
          d="M200.134 168.203 L 200.134 192.919 262.258 192.919 C 296.426 192.919,324.385 193.009,324.388 193.120 C 324.395 193.375,319.503 241.941,319.466 241.979 C 319.451 241.995,292.745 253.409,260.120 267.344 C 227.495 281.278,200.687 292.779,200.548 292.900 C 200.408 293.021,226.161 293.120,257.776 293.120 L 315.259 293.120 315.121 294.522 C 315.045 295.294,312.071 329.438,308.513 370.399 C 304.955 411.359,301.989 444.920,301.924 444.979 C 301.858 445.037,278.958 451.749,251.035 459.893 L 200.267 474.702 200.199 499.742 C 200.134 523.469,200.155 524.782,200.600 524.774 C 201.141 524.765,331.550 489.662,331.678 489.492 C 331.725 489.430,338.527 411.884,346.795 317.168 C 355.062 222.452,361.887 144.626,361.963 144.222 L 362.100 143.487 281.117 143.487 L 200.134 143.487 200.134 168.203 M200.134 243.287 C 200.134 243.948,200.180 244.489,200.236 244.489 C 200.398 244.489,205.599 242.311,205.723 242.192 C 205.784 242.133,204.551 242.084,202.984 242.084 L 200.134 242.084 200.134 243.287 M117.378 341.146 C 118.228 341.199,119.551 341.199,120.317 341.145 C 121.083 341.091,120.387 341.048,118.771 341.049 C 117.154 341.049,116.527 341.093,117.378 341.146 M199.891 341.498 C 200.032 341.585,200.160 358.134,200.200 381.326 L 200.267 421.006 228.190 413.147 C 243.547 408.824,256.131 405.270,256.155 405.249 C 256.263 405.152,260.021 341.695,259.924 341.599 C 259.864 341.539,246.278 341.458,229.733 341.420 C 213.187 341.381,199.758 341.416,199.891 341.498 "
          strokeWidth="5"
          fill="#3c9bd3"
          fillRule="evenodd"
        />
        <path
          id="path3"
          d="M81.496 37.675 L 81.496 75.084 112.492 75.084 L 143.487 75.084 143.487 62.926 L 143.487 50.768 125.852 50.768 L 108.216 50.768 108.216 38.878 L 108.216 26.987 125.852 26.987 L 143.487 26.987 143.487 13.627 L 143.487 0.267 112.492 0.267 L 81.496 0.267 81.496 37.675 M169.404 13.560 L 169.403 26.854 181.495 38.797 L 193.587 50.739 181.496 50.754 L 169.405 50.768 169.405 62.926 L 169.405 75.084 200.401 75.084 L 231.396 75.084 231.396 62.966 L 231.396 50.849 219.305 38.985 L 207.214 27.121 219.305 27.051 L 231.396 26.982 231.396 13.625 L 231.396 0.267 200.401 0.267 L 169.405 0.267 169.404 13.560 M256.774 13.560 L 256.768 26.854 268.865 38.798 L 280.962 50.741 268.871 50.755 L 256.780 50.768 256.780 62.926 L 256.780 75.084 287.776 75.084 L 318.771 75.084 318.771 62.968 L 318.771 50.853 306.648 38.987 L 294.526 27.121 306.648 27.051 L 318.771 26.982 318.771 13.625 L 318.771 0.267 287.776 0.267 L 256.780 0.267 256.774 13.560 "
          strokeWidth="5"
          fill="#040404"
          fillRule="evenodd"
        />
        <path
          id="path4"
          d="M200.165 241.937 C 200.352 242.125,206.286 242.167,206.471 241.982 C 206.561 241.891,205.153 241.817,203.340 241.817 C 201.527 241.817,200.099 241.871,200.165 241.937 M207.033 341.416 C 210.901 341.458,217.153 341.458,220.927 341.416 C 224.701 341.374,221.536 341.340,213.894 341.340 C 206.253 341.340,203.165 341.374,207.033 341.416 M259.792 345.758 C 259.792 346.420,259.844 346.690,259.908 346.359 C 259.972 346.029,259.972 345.488,259.908 345.157 C 259.844 344.826,259.792 345.097,259.792 345.758 M259.525 350.033 C 259.525 350.695,259.577 350.965,259.641 350.635 C 259.704 350.304,259.704 349.763,259.641 349.432 C 259.577 349.102,259.525 349.372,259.525 350.033 M259.258 354.576 C 259.258 355.237,259.310 355.508,259.374 355.177 C 259.437 354.846,259.437 354.305,259.374 353.975 C 259.310 353.644,259.258 353.914,259.258 354.576 M258.985 358.985 C 258.988 359.572,259.043 359.781,259.107 359.449 C 259.171 359.117,259.168 358.636,259.101 358.380 C 259.035 358.125,258.982 358.397,258.985 358.985 M258.723 363.393 C 258.723 364.055,258.776 364.325,258.839 363.995 C 258.903 363.664,258.903 363.123,258.839 362.792 C 258.776 362.462,258.723 362.732,258.723 363.393 M258.451 367.802 C 258.454 368.390,258.509 368.599,258.572 368.267 C 258.636 367.934,258.634 367.453,258.567 367.198 C 258.500 366.942,258.448 367.214,258.451 367.802 M258.189 372.211 C 258.189 372.872,258.241 373.143,258.305 372.812 C 258.368 372.482,258.368 371.941,258.305 371.610 C 258.241 371.279,258.189 371.550,258.189 372.211 M257.922 376.754 C 257.922 377.415,257.974 377.685,258.038 377.355 C 258.101 377.024,258.101 376.483,258.038 376.152 C 257.974 375.822,257.922 376.092,257.922 376.754 M257.655 381.029 C 257.655 381.690,257.707 381.961,257.770 381.630 C 257.834 381.299,257.834 380.758,257.770 380.428 C 257.707 380.097,257.655 380.367,257.655 381.029 M257.387 385.571 C 257.387 386.232,257.440 386.503,257.503 386.172 C 257.567 385.842,257.567 385.301,257.503 384.970 C 257.440 384.639,257.387 384.910,257.387 385.571 M257.115 389.980 C 257.118 390.568,257.172 390.777,257.236 390.444 C 257.300 390.112,257.298 389.631,257.231 389.376 C 257.164 389.120,257.112 389.392,257.115 389.980 M256.853 394.389 C 256.853 395.050,256.905 395.321,256.969 394.990 C 257.032 394.659,257.032 394.118,256.969 393.788 C 256.905 393.457,256.853 393.727,256.853 394.389 M256.580 398.798 C 256.583 399.385,256.638 399.594,256.702 399.262 C 256.766 398.930,256.763 398.449,256.697 398.193 C 256.630 397.938,256.577 398.210,256.580 398.798 M256.319 403.206 C 256.319 403.868,256.371 404.138,256.434 403.808 C 256.498 403.477,256.498 402.936,256.434 402.605 C 256.371 402.275,256.319 402.545,256.319 403.206 "
          strokeWidth="5"
          fill="#78bae3"
          fillRule="evenodd"
        />
        <path
          id="path5"
          d="M77.438 193.119 C 79.688 193.164,83.295 193.164,85.454 193.119 C 87.613 193.074,85.772 193.037,81.363 193.038 C 76.954 193.038,75.188 193.074,77.438 193.119 M79.445 241.416 C 79.499 241.949,79.696 241.951,139.750 241.951 L 200.000 241.952 139.832 241.884 C 82.823 241.819,79.658 241.791,79.527 241.349 C 79.420 240.987,79.402 241.002,79.445 241.416 M131.282 341.149 C 136.694 341.189,145.471 341.189,150.788 341.149 C 156.104 341.108,151.677 341.075,140.949 341.075 C 130.220 341.075,125.871 341.108,131.282 341.149 M91.712 373.814 C 91.712 374.329,91.767 374.539,91.834 374.282 C 91.901 374.025,91.901 373.604,91.834 373.347 C 91.767 373.090,91.712 373.300,91.712 373.814 M92.246 379.960 C 92.246 380.474,92.301 380.685,92.369 380.428 C 92.436 380.170,92.436 379.749,92.369 379.492 C 92.301 379.235,92.246 379.446,92.246 379.960 M92.514 383.166 C 92.514 383.681,92.569 383.891,92.636 383.634 C 92.703 383.377,92.703 382.956,92.636 382.699 C 92.569 382.442,92.514 382.652,92.514 383.166 M93.048 389.312 C 93.048 389.826,93.103 390.037,93.170 389.780 C 93.237 389.522,93.237 389.102,93.170 388.844 C 93.103 388.587,93.048 388.798,93.048 389.312 M93.582 395.458 C 93.582 395.972,93.637 396.182,93.705 395.925 C 93.772 395.668,93.772 395.247,93.705 394.990 C 93.637 394.733,93.582 394.943,93.582 395.458 M94.384 404.810 C 94.384 405.324,94.439 405.534,94.506 405.277 C 94.573 405.020,94.573 404.599,94.506 404.342 C 94.439 404.085,94.384 404.295,94.384 404.810 M94.918 410.955 C 94.918 411.470,94.973 411.680,95.041 411.423 C 95.108 411.166,95.108 410.745,95.041 410.488 C 94.973 410.230,94.918 410.441,94.918 410.955 M95.453 417.101 C 95.453 417.615,95.508 417.826,95.575 417.568 C 95.642 417.311,95.642 416.890,95.575 416.633 C 95.508 416.376,95.453 416.587,95.453 417.101 M95.720 420.307 C 95.720 420.822,95.775 421.032,95.842 420.775 C 95.909 420.518,95.909 420.097,95.842 419.840 C 95.775 419.582,95.720 419.793,95.720 420.307 M96.254 426.453 C 96.254 426.967,96.309 427.178,96.377 426.921 C 96.444 426.663,96.444 426.242,96.377 425.985 C 96.309 425.728,96.254 425.939,96.254 426.453 M96.789 432.599 C 96.789 433.113,96.844 433.323,96.911 433.066 C 96.978 432.809,96.978 432.388,96.911 432.131 C 96.844 431.874,96.789 432.084,96.789 432.599 M97.323 438.744 C 97.323 439.259,97.378 439.469,97.445 439.212 C 97.513 438.955,97.513 438.534,97.445 438.277 C 97.378 438.019,97.323 438.230,97.323 438.744 M97.590 441.951 C 97.590 442.465,97.645 442.675,97.713 442.418 C 97.780 442.161,97.780 441.740,97.713 441.483 C 97.645 441.226,97.590 441.436,97.590 441.951 "
          strokeWidth="5"
          fill="#96acca"
          fillRule="evenodd"
        />
        <path
          id="path6"
          d=""
          strokeWidth="5"
          fill="#1c5cac"
          fillRule="evenodd"
        />
        <path
          id="path7"
          d="M103.073 341.148 C 105.461 341.193,109.369 341.193,111.757 341.148 C 114.145 341.104,112.191 341.068,107.415 341.068 C 102.639 341.068,100.685 341.104,103.073 341.148 M186.991 341.416 C 189.388 341.460,193.236 341.460,195.541 341.416 C 197.847 341.371,195.885 341.335,191.182 341.335 C 186.480 341.335,184.593 341.371,186.991 341.416 M104.028 367.869 C 111.057 367.909,122.480 367.909,129.412 367.869 C 136.345 367.829,130.595 367.797,116.633 367.797 C 102.672 367.797,97.000 367.829,104.028 367.869 "
          strokeWidth="5"
          fill="#3c74ac"
          fillRule="evenodd"
        />
        <path
          id="path8"
          d="M240.548 143.420 C 262.849 143.458,299.342 143.458,321.643 143.420 C 343.945 143.382,325.698 143.352,281.096 143.352 C 236.493 143.352,218.246 143.382,240.548 143.420 "
          strokeWidth="5"
          fill="#1c88b0"
          fillRule="evenodd"
        />
      </g>
    </svg>
    <svg
    className={this.state.displayJ}
      id="js"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="400"
      height="458.23754789272033"
      viewBox="0, 0, 400,458.23754789272033"
    >
      <g id="svgg">
        <path
          id="path0"
          d="M148.352 234.789 C 148.352 301.226,148.270 320.307,147.984 320.307 C 147.663 320.307,133.086 316.581,120.920 313.390 C 109.496 310.393,106.502 309.646,106.384 309.761 C 106.277 309.866,106.917 318.141,107.460 323.678 C 107.928 328.462,108.850 338.881,109.290 344.368 C 109.574 347.908,109.893 350.886,109.999 350.985 C 110.105 351.085,111.226 351.454,112.490 351.807 C 113.755 352.159,116.031 352.795,117.548 353.219 C 119.065 353.644,124.858 355.248,130.421 356.784 C 135.985 358.320,141.743 359.913,143.218 360.325 C 144.693 360.736,147.107 361.407,148.582 361.815 C 150.057 362.223,152.989 363.044,155.096 363.638 C 158.870 364.703,167.447 367.071,171.341 368.123 C 174.780 369.052,183.339 371.437,185.973 372.201 C 187.362 372.603,188.569 372.862,188.655 372.775 C 188.742 372.689,188.812 322.365,188.812 260.945 L 188.812 149.272 168.582 149.272 L 148.352 149.272 148.352 234.789 M226.513 209.195 L 226.513 269.119 249.144 269.119 C 261.591 269.119,271.841 269.185,271.922 269.265 C 272.002 269.346,271.972 270.346,271.854 271.487 C 271.737 272.629,271.551 274.736,271.442 276.169 C 271.332 277.602,270.977 281.602,270.654 285.057 C 270.330 288.513,269.643 296.169,269.129 302.069 C 268.614 307.969,268.056 314.147,267.889 315.797 C 267.723 317.448,267.586 318.984,267.586 319.211 C 267.586 319.478,266.316 319.968,263.985 320.600 C 262.004 321.138,259.762 321.763,259.004 321.989 C 258.245 322.216,256.107 322.818,254.253 323.327 C 244.549 325.988,230.398 329.913,228.582 330.445 L 226.513 331.052 226.513 352.010 L 226.513 372.967 228.429 372.413 C 229.483 372.108,231.862 371.440,233.716 370.929 C 235.571 370.418,241.157 368.871,246.130 367.491 C 251.103 366.111,256.069 364.739,257.165 364.442 C 258.261 364.144,260.674 363.479,262.529 362.962 C 264.383 362.446,268.452 361.316,271.571 360.452 C 274.690 359.588,278.966 358.401,281.073 357.815 C 283.180 357.228,286.077 356.426,287.510 356.032 C 293.097 354.496,300.343 352.479,302.669 351.811 C 305.437 351.017,305.340 351.176,305.715 346.820 C 305.817 345.640,306.172 341.571,306.504 337.778 C 306.837 333.985,307.387 327.709,307.727 323.831 C 308.066 319.954,308.622 313.747,308.961 310.038 C 309.300 306.330,310.060 297.847,310.649 291.188 C 311.238 284.529,311.997 276.046,312.337 272.337 C 312.677 268.628,313.091 264.008,313.259 262.069 C 313.426 260.130,313.833 255.510,314.165 251.801 C 314.689 245.932,315.924 231.792,316.106 229.579 L 316.169 228.812 291.571 228.734 L 266.973 228.655 266.973 209.195 L 266.973 189.735 293.257 189.657 L 319.540 189.579 319.758 188.506 C 319.877 187.916,320.674 179.364,321.529 169.502 C 322.384 159.640,323.160 151.054,323.254 150.421 L 323.426 149.272 274.969 149.272 L 226.513 149.272 226.513 209.195 "
          stroke="none"
          strokeWidth="5"
          fill="#fbfbfa"
          fillRule="evenodd"
        />
        <path
          id="path1"
          d="M182.989 39.693 L 182.989 59.157 171.341 59.157 L 159.693 59.157 159.693 66.207 L 159.693 73.257 178.544 73.257 L 197.395 73.257 197.395 46.743 L 197.395 20.230 190.192 20.230 L 182.989 20.230 182.989 39.693 M204.751 36.628 L 204.751 53.027 222.605 53.026 L 240.460 53.025 240.363 56.091 L 240.266 59.157 222.508 59.157 L 204.751 59.157 204.751 66.207 L 204.751 73.257 229.732 73.257 L 254.713 73.257 254.713 56.858 L 254.713 40.460 236.858 40.460 L 219.004 40.460 219.004 37.548 L 219.004 34.636 236.858 34.636 L 254.713 34.636 254.713 27.433 L 254.713 20.230 229.732 20.230 L 204.751 20.230 204.751 36.628 "
          stroke="none"
          strokeWidth="5"
          fill="#040404"
          fillRule="evenodd"
        />
        <path
          id="path2"
          d="M212.925 114.227 C 212.426 114.726,212.698 416.245,213.197 416.245 C 213.459 416.245,215.839 415.635,218.484 414.889 C 221.130 414.143,226.605 412.618,230.651 411.500 C 237.854 409.510,240.643 408.734,246.054 407.218 C 247.529 406.804,251.080 405.823,253.946 405.037 C 259.405 403.541,262.940 402.561,268.812 400.917 C 270.751 400.374,273.234 399.687,274.330 399.389 C 275.425 399.092,279.425 397.985,283.218 396.930 C 293.606 394.040,301.019 391.987,308.659 389.883 C 317.336 387.494,316.496 388.042,316.744 384.611 C 316.857 383.044,317.293 378.038,317.713 373.487 C 318.134 368.935,319.301 355.900,320.307 344.521 C 321.313 333.142,322.419 320.728,322.765 316.935 C 323.111 313.142,323.528 308.452,323.693 306.513 C 323.858 304.575,324.057 302.299,324.135 301.456 C 324.214 300.613,324.558 296.820,324.900 293.027 C 325.243 289.234,325.798 283.096,326.134 279.387 C 326.470 275.678,327.295 266.368,327.968 258.697 C 328.641 251.027,329.538 240.958,329.962 236.322 C 330.884 226.228,331.451 219.853,332.263 210.421 C 332.596 206.544,333.078 201.165,333.333 198.467 C 333.925 192.195,335.485 174.661,336.087 167.510 C 336.342 164.475,336.757 159.854,337.008 157.241 C 337.259 154.628,337.952 146.904,338.549 140.077 C 339.146 133.249,339.906 124.810,340.238 121.322 C 340.571 117.835,340.843 114.766,340.843 114.502 C 340.843 114.001,213.425 113.727,212.925 114.227 M148.188 149.349 C 148.108 149.559,148.078 188.146,148.121 235.096 L 148.200 320.460 148.276 234.868 L 148.352 149.276 168.506 149.195 L 188.659 149.114 168.496 149.040 C 152.593 148.981,148.303 149.046,148.188 149.349 M323.254 150.421 C 323.160 151.054,322.384 159.640,321.529 169.502 C 320.674 179.364,319.877 187.916,319.758 188.506 L 319.540 189.579 293.257 189.657 L 266.973 189.735 266.973 209.195 L 266.973 228.655 291.571 228.734 L 316.169 228.812 316.106 229.579 C 315.924 231.792,314.689 245.932,314.165 251.801 C 313.833 255.510,313.426 260.130,313.259 262.069 C 313.091 264.008,312.677 268.628,312.337 272.337 C 311.997 276.046,311.238 284.529,310.649 291.188 C 310.060 297.847,309.300 306.330,308.961 310.038 C 308.622 313.747,308.066 319.954,307.727 323.831 C 307.387 327.709,306.837 333.985,306.504 337.778 C 306.172 341.571,305.817 345.640,305.715 346.820 C 305.340 351.176,305.437 351.017,302.669 351.811 C 300.343 352.479,293.097 354.496,287.510 356.032 C 286.077 356.426,283.180 357.228,281.073 357.815 C 278.966 358.401,274.690 359.588,271.571 360.452 C 268.452 361.316,264.383 362.446,262.529 362.962 C 260.674 363.479,258.261 364.144,257.165 364.442 C 256.069 364.739,251.103 366.111,246.130 367.491 C 241.157 368.871,235.571 370.418,233.716 370.929 C 231.862 371.440,229.483 372.108,228.429 372.413 L 226.513 372.967 226.513 352.010 L 226.513 331.052 228.582 330.445 C 230.398 329.913,244.549 325.988,254.253 323.327 C 256.107 322.818,258.245 322.216,259.004 321.989 C 259.762 321.763,262.004 321.138,263.985 320.600 C 266.316 319.968,267.586 319.478,267.586 319.211 C 267.586 318.984,267.723 317.448,267.889 315.797 C 268.056 314.147,268.614 307.969,269.129 302.069 C 269.643 296.169,270.330 288.513,270.654 285.057 C 270.977 281.602,271.332 277.602,271.442 276.169 C 271.551 274.736,271.737 272.629,271.854 271.487 C 271.972 270.346,272.002 269.346,271.922 269.265 C 271.841 269.185,261.591 269.119,249.144 269.119 L 226.513 269.119 226.513 209.195 L 226.513 149.272 274.969 149.272 L 323.426 149.272 323.254 150.421 M108.270 334.406 C 108.270 334.996,108.333 335.238,108.411 334.943 C 108.488 334.648,108.488 334.165,108.411 333.870 C 108.333 333.575,108.270 333.816,108.270 334.406 M108.577 337.471 C 108.577 338.061,108.640 338.303,108.717 338.008 C 108.794 337.713,108.794 337.230,108.717 336.935 C 108.640 336.640,108.577 336.881,108.577 337.471 "
          stroke="none"
          strokeWidth="5"
          fill="#fbdc04"
          fillRule="evenodd"
        />
        <path
          id="path3"
          d="M55.285 89.732 C 55.382 90.870,55.597 93.249,55.761 95.019 C 55.926 96.789,56.220 100.169,56.414 102.529 C 56.609 104.889,56.829 107.234,56.905 107.739 C 56.981 108.245,57.237 111.073,57.474 114.023 C 58.030 120.924,58.213 123.021,58.424 124.904 C 58.518 125.747,58.636 126.851,58.687 127.356 C 58.825 128.745,59.745 139.909,59.937 142.529 C 60.029 143.793,60.238 145.655,60.401 146.667 C 60.563 147.678,60.982 152.299,61.332 156.935 C 61.682 161.571,62.035 165.778,62.117 166.284 C 62.200 166.789,62.610 171.203,63.029 176.092 C 63.448 180.981,63.841 185.533,63.902 186.207 C 63.964 186.881,64.295 190.881,64.638 195.096 C 64.981 199.310,65.406 203.655,65.582 204.751 C 65.758 205.847,66.111 209.640,66.366 213.180 C 67.040 222.536,67.116 223.412,67.434 225.441 C 67.592 226.452,67.869 229.487,68.049 232.184 C 68.229 234.881,68.432 237.571,68.500 238.161 C 68.568 238.751,68.717 240.406,68.832 241.839 C 68.946 243.272,69.091 244.789,69.154 245.211 C 69.217 245.632,69.542 249.425,69.876 253.640 C 70.211 257.854,70.555 261.716,70.643 262.222 C 70.947 263.984,71.648 272.069,72.198 280.153 C 72.283 281.418,72.483 283.142,72.640 283.985 C 72.798 284.828,73.215 289.379,73.567 294.100 C 73.919 298.820,74.270 303.096,74.348 303.602 C 74.425 304.107,74.692 306.935,74.941 309.885 C 75.330 314.475,75.580 317.282,76.144 323.372 C 76.199 323.962,76.535 328.100,76.891 332.567 C 77.248 337.034,77.676 341.448,77.842 342.375 C 78.009 343.303,78.361 347.096,78.624 350.805 C 79.146 358.174,79.363 360.741,79.581 362.146 C 79.705 362.940,79.970 366.032,80.764 375.939 C 80.858 377.119,81.016 378.751,81.113 379.566 C 81.382 381.808,81.406 382.080,82.104 390.805 C 82.461 395.272,82.843 399.410,82.953 400.000 C 83.062 400.590,83.305 402.856,83.492 405.036 L 83.831 408.998 85.364 409.386 C 86.207 409.599,88.138 410.132,89.655 410.570 C 94.545 411.980,100.013 413.485,102.529 414.112 C 103.877 414.449,105.188 414.814,105.441 414.925 C 105.693 415.036,107.280 415.500,108.966 415.956 C 110.651 416.412,113.341 417.155,114.943 417.608 C 116.544 418.060,119.165 418.771,120.766 419.188 C 122.368 419.605,123.885 420.030,124.138 420.133 C 124.391 420.235,126.046 420.706,127.816 421.179 C 130.474 421.889,134.949 423.141,137.011 423.752 C 137.580 423.920,141.966 425.103,146.054 426.192 C 147.739 426.640,149.326 427.089,149.579 427.189 C 149.831 427.289,151.487 427.766,153.257 428.249 C 158.261 429.616,165.743 431.695,171.494 433.316 C 173.011 433.743,175.632 434.471,177.318 434.932 C 179.004 435.394,180.590 435.855,180.843 435.956 C 181.096 436.057,182.613 436.480,184.215 436.896 C 185.816 437.312,188.437 438.013,190.038 438.453 C 193.840 439.499,193.461 439.393,196.628 440.298 C 198.146 440.732,200.488 441.365,201.835 441.705 C 205.131 442.538,209.380 443.811,210.034 444.160 C 210.706 444.519,214.774 444.535,214.994 444.179 C 215.084 444.033,216.007 443.747,217.046 443.543 C 218.085 443.338,219.157 443.048,219.429 442.897 C 219.701 442.747,221.303 442.262,222.989 441.819 C 224.674 441.377,227.502 440.609,229.272 440.113 C 234.614 438.618,237.843 437.722,241.226 436.798 C 244.734 435.840,249.996 434.388,250.728 434.176 C 252.075 433.787,257.383 432.354,259.923 431.695 C 261.525 431.280,263.111 430.809,263.448 430.649 C 263.785 430.489,265.372 430.024,266.973 429.614 C 269.751 428.904,271.036 428.552,278.774 426.381 C 280.628 425.860,283.456 425.088,285.057 424.664 C 288.175 423.838,288.338 423.791,289.042 423.512 C 289.295 423.411,290.881 422.962,292.567 422.513 C 295.729 421.672,298.691 420.866,304.521 419.262 C 306.375 418.752,308.927 418.067,310.192 417.741 C 311.456 417.414,312.766 417.016,313.103 416.858 C 313.441 416.699,314.958 416.281,316.475 415.929 C 317.992 415.577,319.510 415.167,319.847 415.016 C 320.184 414.866,321.839 414.378,323.525 413.933 C 329.307 412.405,335.413 410.720,340.094 409.360 L 341.950 408.821 342.348 403.721 C 342.567 400.916,342.781 398.345,342.823 398.008 C 343.061 396.117,343.300 393.786,343.438 392.031 C 343.524 390.935,343.808 387.292,344.070 383.934 C 344.333 380.577,344.601 377.743,344.667 377.636 C 344.733 377.530,344.870 376.276,344.972 374.851 C 345.074 373.426,345.283 370.812,345.436 369.042 C 345.589 367.272,345.798 364.444,345.901 362.759 C 346.004 361.073,346.223 359.073,346.388 358.314 C 346.628 357.208,347.694 344.796,348.034 339.157 C 348.075 338.483,348.193 337.517,348.296 337.011 C 348.399 336.506,348.562 334.989,348.658 333.640 C 348.925 329.887,349.711 320.862,349.845 320.000 C 349.975 319.164,350.457 313.597,351.104 305.441 C 351.331 302.575,351.589 299.885,351.676 299.464 C 351.762 299.042,351.912 297.663,352.008 296.398 C 352.104 295.134,352.391 291.341,352.647 287.969 C 352.903 284.598,353.242 280.943,353.401 279.847 C 353.560 278.751,353.772 276.751,353.871 275.402 C 353.971 274.054,354.266 270.467,354.528 267.433 C 354.789 264.398,355.050 261.295,355.106 260.536 C 355.163 259.778,355.352 257.778,355.527 256.092 C 355.702 254.406,355.987 250.958,356.161 248.429 C 356.334 245.900,356.622 242.866,356.800 241.686 C 356.978 240.506,357.470 235.333,357.894 230.192 C 358.317 225.050,358.786 219.533,358.934 217.931 C 359.362 213.333,360.189 203.820,360.298 202.245 C 360.353 201.457,360.476 200.284,360.572 199.640 C 360.667 198.995,360.824 197.502,360.920 196.322 C 361.803 185.444,361.987 183.291,362.126 182.222 C 362.315 180.774,363.112 171.145,363.368 167.203 C 363.467 165.686,363.683 163.617,363.848 162.605 C 364.012 161.594,364.438 157.180,364.793 152.797 C 365.567 143.244,365.495 144.114,366.251 135.172 C 366.586 131.211,367.074 126.038,367.335 123.678 C 367.596 121.318,368.021 116.352,368.279 112.644 C 368.538 108.935,368.876 105.280,369.031 104.521 C 369.186 103.762,369.401 101.831,369.508 100.230 C 369.615 98.628,369.833 96.008,369.992 94.406 C 370.151 92.805,370.362 90.632,370.460 89.579 L 370.638 87.663 212.873 87.663 L 55.108 87.663 55.285 89.732 M340.843 114.502 C 340.843 114.766,340.571 117.835,340.238 121.322 C 339.906 124.810,339.146 133.249,338.549 140.077 C 337.952 146.904,337.259 154.628,337.008 157.241 C 336.757 159.854,336.342 164.475,336.087 167.510 C 335.485 174.661,333.925 192.195,333.333 198.467 C 333.078 201.165,332.596 206.544,332.263 210.421 C 331.451 219.853,330.884 226.228,329.962 236.322 C 329.538 240.958,328.641 251.027,327.968 258.697 C 327.295 266.368,326.470 275.678,326.134 279.387 C 325.798 283.096,325.243 289.234,324.900 293.027 C 324.558 296.820,324.214 300.613,324.135 301.456 C 324.057 302.299,323.858 304.575,323.693 306.513 C 323.528 308.452,323.111 313.142,322.765 316.935 C 322.419 320.728,321.313 333.142,320.307 344.521 C 319.301 355.900,318.134 368.935,317.713 373.487 C 317.293 378.038,316.857 383.044,316.744 384.611 C 316.496 388.042,317.336 387.494,308.659 389.883 C 301.019 391.987,293.606 394.040,283.218 396.930 C 279.425 397.985,275.425 399.092,274.330 399.389 C 273.234 399.687,270.751 400.374,268.812 400.917 C 262.940 402.561,259.405 403.541,253.946 405.037 C 251.080 405.823,247.529 406.804,246.054 407.218 C 240.643 408.734,237.854 409.510,230.651 411.500 C 226.605 412.618,221.130 414.143,218.484 414.889 C 215.839 415.635,213.459 416.245,213.197 416.245 C 212.698 416.245,212.426 114.726,212.925 114.227 C 213.425 113.727,340.843 114.001,340.843 114.502 M188.736 261.073 C 188.781 326.901,188.700 373.027,188.538 373.027 C 188.387 373.027,187.387 372.765,186.316 372.444 C 185.244 372.124,182.023 371.217,179.157 370.429 C 176.291 369.641,173.326 368.809,172.567 368.582 C 171.808 368.354,169.326 367.665,167.050 367.051 C 162.644 365.862,160.085 365.155,153.716 363.369 C 151.525 362.754,148.559 361.927,147.126 361.531 C 145.693 361.135,143.280 360.463,141.762 360.037 C 140.245 359.611,136.659 358.618,133.793 357.830 C 130.927 357.042,125.893 355.650,122.605 354.735 C 114.380 352.448,110.051 351.264,109.906 351.264 C 109.839 351.264,109.693 350.195,109.583 348.889 C 109.472 347.582,109.121 343.686,108.802 340.230 C 108.484 336.774,107.938 330.533,107.589 326.362 C 107.240 322.191,106.755 316.811,106.510 314.408 C 106.266 312.005,106.063 309.935,106.060 309.808 C 106.050 309.438,106.883 309.539,109.222 310.192 C 110.430 310.529,119.418 312.881,129.195 315.418 C 138.973 317.955,147.215 320.103,147.510 320.190 C 148.020 320.340,148.046 316.133,148.046 234.861 C 148.046 187.843,148.139 149.281,148.253 149.168 C 148.366 149.054,157.504 148.997,168.559 149.040 L 188.659 149.119 188.736 261.073 "
          stroke="none"
          strokeWidth="5"
          fill="#d4bc04"
          fillRule="evenodd"
        />
        <path
          id="path4"
          d=""
          stroke="none"
          strokeWidth="5"
          fill="#b46084"
          fillRule="evenodd"
        />
        <path
          id="path5"
          d=""
          stroke="none"
          strokeWidth="5"
          fill="#b4c004"
          fillRule="evenodd"
        />
        <path
          id="path6"
          d=""
          stroke="none"
          strokeWidth="5"
          fill="#b4c004"
          fillRule="evenodd"
        />
        <path
          id="path7"
          d=""
          stroke="none"
          strokeWidth="5"
          fill="#b4c004"
          fillRule="evenodd"
        />
        <path
          id="path8"
          d=""
          stroke="none"
          strokeWidth="5"
          fill="#b4c004"
          fillRule="evenodd"
        />
      </g>
    </svg>  
      <svg
        className={this.state.displayB}
        id="bootstrap"
        width="512"
        height="512"
        viewBox="0 0 512 512"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            style={{strokeDashArray: 1000 + "px"}}
            d="M155.469 200.000 L 155.469 261.719 182.828 261.719 C 199.323 261.719,211.693 261.555,213.980 261.307 C 236.488 258.867,249.276 246.432,249.310 226.953 C 249.338 211.461,239.755 200.106,224.050 197.020 C 220.646 196.351,220.438 196.040,223.047 195.520 C 228.381 194.457,235.881 188.805,239.160 183.377 C 247.616 169.380,242.419 150.903,227.889 143.299 C 218.768 138.526,216.617 138.286,182.910 138.284 L 155.469 138.281 155.469 200.000 M208.903 154.915 C 226.139 158.450,229.006 180.429,213.177 187.679 C 207.744 190.168,206.446 190.328,190.137 190.518 L 175.391 190.690 175.391 172.493 L 175.391 154.297 190.641 154.297 C 203.016 154.297,206.460 154.413,208.903 154.915 M211.523 206.365 C 222.223 208.708,227.725 213.791,228.929 222.447 C 230.188 231.501,226.253 239.273,218.646 242.758 C 213.014 245.337,212.218 245.425,192.871 245.598 L 175.391 245.754 175.391 225.576 L 175.391 205.398 192.090 205.582 C 205.094 205.726,209.394 205.899,211.523 206.365 "
            strokeWidth="5"
            fill="#f7f0fc"
            fillRule="evenodd"
          />
          <path
            d="M219.459 84.348 L 223.487 84.570 202.394 111.133 L 181.300 137.695 196.802 137.933 C 215.584 138.221,219.985 138.875,227.073 142.434 C 250.163 154.028,248.389 187.157,224.240 195.337 C 222.079 196.068,221.290 196.471,222.005 196.476 C 226.219 196.507,234.880 200.140,239.116 203.653 C 254.287 216.237,252.951 242.031,236.523 253.711 C 226.051 261.157,219.795 262.088,180.177 262.101 L 155.472 262.109 155.373 216.299 L 155.273 170.488 120.704 214.038 C 87.969 255.277,86.121 257.526,85.858 256.430 C 85.666 255.628,85.634 255.812,85.754 257.031 C 86.332 262.916,86.730 273.352,86.693 281.641 C 86.610 299.979,92.477 309.805,106.445 314.721 L 109.570 315.820 139.063 315.919 C 155.283 315.974,175.849 315.886,184.764 315.724 L 200.973 315.430 258.509 242.969 C 327.206 156.451,319.400 166.417,318.771 166.029 C 318.490 165.855,318.380 165.517,318.528 165.278 C 318.675 165.039,318.610 164.844,318.382 164.844 C 318.155 164.844,317.969 164.343,317.969 163.732 C 317.969 163.120,317.720 162.110,317.417 161.486 C 316.922 160.469,316.753 159.744,316.198 156.250 C 316.113 155.713,315.855 154.503,315.625 153.562 C 315.395 152.620,315.290 151.767,315.391 151.666 C 315.492 151.565,315.415 151.061,315.219 150.547 C 315.024 150.032,314.763 148.248,314.640 146.583 C 314.516 144.917,314.233 141.973,314.009 140.039 C 313.786 138.105,313.541 130.334,313.464 122.769 C 313.309 107.382,313.142 106.106,310.563 100.586 C 307.071 93.112,301.477 88.079,293.555 85.283 L 290.430 84.180 252.930 84.153 C 232.305 84.138,217.243 84.226,219.459 84.348 M175.781 172.430 L 175.781 190.625 186.621 190.612 C 202.844 190.592,207.834 189.970,213.567 187.254 C 225.968 181.377,226.444 162.652,214.336 157.017 C 209.208 154.630,208.645 154.565,191.504 154.393 L 175.781 154.235 175.781 172.430 M175.781 225.752 L 175.781 245.703 190.137 245.700 C 208.974 245.696,213.125 245.210,219.025 242.319 C 232.248 235.840,232.475 215.800,219.399 209.374 C 212.996 206.228,212.186 206.124,192.871 205.953 L 175.781 205.802 175.781 225.752 "
            strokeWidth="5"
            fill="#7c14f8"
            fillRule="evenodd"
          />
          <path
            d="M109.892 84.413 C 99.613 86.129,90.929 94.292,87.683 105.288 C 86.682 108.679,86.651 109.089,86.693 118.359 C 86.893 162.713,76.820 188.335,57.813 191.821 C 56.416 192.077,55.054 192.347,54.785 192.420 C 54.080 192.613,54.080 207.387,54.785 207.580 C 55.054 207.653,56.416 207.923,57.813 208.179 C 72.086 210.797,82.064 227.238,85.565 253.906 C 85.805 255.731,86.054 257.278,86.119 257.343 C 86.183 257.407,101.813 237.836,120.852 213.851 L 155.469 170.243 155.469 154.067 L 155.469 137.891 168.308 137.891 L 181.148 137.891 202.318 111.230 L 223.487 84.570 219.068 84.329 C 212.226 83.955,112.174 84.032,109.892 84.413 "
            strokeWidth="5"
            fill="#8c14fc"
            fillRule="evenodd"
          />
          <path
            d="M316.863 159.570 C 316.857 160.000,317.003 160.703,317.188 161.133 C 317.615 162.128,317.615 161.101,317.188 159.766 C 316.936 158.981,316.872 158.942,316.863 159.570 M259.955 241.129 L 200.973 315.430 189.451 315.638 C 183.114 315.752,203.242 315.840,234.180 315.833 L 290.430 315.820 293.555 314.717 C 307.505 309.794,313.502 299.824,313.334 281.836 C 312.923 237.916,323.209 211.660,342.188 208.179 C 343.584 207.923,344.946 207.653,345.215 207.580 C 345.584 207.479,345.703 205.625,345.703 200.000 C 345.703 194.375,345.584 192.521,345.215 192.420 C 344.946 192.347,343.584 192.077,342.188 191.821 C 335.565 190.606,328.267 185.003,324.221 178.027 C 323.256 176.362,322.322 175.000,322.147 175.000 C 321.972 175.000,321.938 174.824,322.070 174.609 C 322.203 174.395,322.115 174.219,321.875 174.219 C 321.635 174.219,321.539 174.056,321.662 173.857 C 321.929 173.425,321.103 171.484,320.653 171.484 C 320.479 171.484,320.430 171.243,320.543 170.949 C 320.656 170.654,320.518 170.171,320.237 169.875 C 319.956 169.578,319.678 168.900,319.618 168.368 C 319.558 167.835,319.380 167.271,319.223 167.114 C 319.066 166.957,292.396 200.264,259.955 241.129 "
            strokeWidth="5"
            fill="#6c14f4"
            fillRule="evenodd"
          />
          <path
            d="M203.613 205.738 C 203.989 205.836,204.604 205.836,204.980 205.738 C 205.356 205.640,205.049 205.559,204.297 205.559 C 203.545 205.559,203.237 205.640,203.613 205.738 M229.018 225.586 C 229.021 226.660,229.097 227.053,229.187 226.459 C 229.276 225.866,229.274 224.987,229.181 224.506 C 229.089 224.026,229.015 224.512,229.018 225.586 "
            strokeWidth="5"
            fill="#bc8cfc"
            fillRule="evenodd"
          />
          <path
            d="M168.652 138.183 C 176.011 138.243,188.052 138.243,195.410 138.183 C 202.769 138.124,196.748 138.075,182.031 138.075 C 167.314 138.075,161.294 138.124,168.652 138.183 M175.571 172.461 C 175.571 182.559,175.621 186.746,175.683 181.765 C 175.745 176.785,175.745 168.523,175.683 163.406 C 175.622 158.288,175.571 162.363,175.571 172.461 M223.145 171.680 C 223.150 172.539,223.230 172.845,223.323 172.359 C 223.417 171.873,223.413 171.170,223.315 170.796 C 223.217 170.423,223.141 170.820,223.145 171.680 M175.570 205.957 C 175.467 206.226,175.430 215.322,175.488 226.172 L 175.593 245.898 175.687 225.884 L 175.781 205.869 189.355 205.762 L 202.930 205.654 189.343 205.561 C 178.765 205.489,175.715 205.577,175.570 205.957 M168.262 262.012 C 175.405 262.071,187.095 262.071,194.238 262.012 C 201.382 261.952,195.537 261.903,181.250 261.903 C 166.963 261.903,161.118 261.952,168.262 262.012 "
            strokeWidth="5"
            fill="#9e4cfc"
            fillRule="evenodd"
          />
          <path
            d="M233.984 147.388 C 233.984 147.455,234.556 148.026,235.254 148.657 L 236.523 149.805 235.376 148.535 C 234.307 147.352,233.984 147.086,233.984 147.388 "
            strokeWidth="5"
            fill="#a863fc"
            fillRule="evenodd"
          />
          <path d="" strokeWidth="5" fill="#b47cfc" fillRule="evenodd" />
          <path
            d="M234.936 188.770 L 233.789 190.039 235.059 188.892 C 235.757 188.261,236.328 187.689,236.328 187.622 C 236.328 187.320,236.006 187.586,234.936 188.770 "
            strokeWidth="5"
            fill="#9038fc"
            fillRule="evenodd"
          />
        </g>
      </svg>
      <svg
      className={this.state.displayR}
      version="1.1"
      id="react"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="400"
      viewBox="0 0 1001 1160"
      enableBackground="new 0 0 1001 1160"
      xmlSpace="preserve"
    >
      <path
        fill="transparent"
        opacity="1.000000"
        stroke="none"
        strokeWidth="10"
        d="
 M1.000000,410.000000 
   C1.000000,273.349060 1.000000,137.198135 1.000000,1.023606 
   C334.612366,1.023606 668.224731,1.023606 1001.918579,1.023606 
   C1001.918579,387.567657 1001.918579,774.135315 1001.918579,1160.851562 
   C668.333374,1160.851562 334.666687,1160.851562 1.000000,1160.851562 
   C1.000000,910.775146 1.000000,660.637573 1.000000,410.000000 
 M703.972656,1073.092773 
   C703.926270,1069.728394 703.879883,1066.363892 703.977478,1062.072388 
   C703.977478,1054.805420 703.977478,1047.538330 703.977478,1040.000000 
   C701.915039,1040.000000 700.437134,1040.000000 698.959229,1040.000000 
   C591.469421,1040.000000 483.979614,1039.999390 376.489807,1040.006958 
   C374.993713,1040.006958 373.497620,1040.110840 371.181427,1040.022095 
   C369.505493,1039.348389 367.853302,1038.163452 366.149750,1038.084351 
   C355.420929,1037.586304 344.681915,1037.287476 333.943787,1037.020752 
   C329.035095,1036.898926 324.120911,1037.000000 319.314636,1037.000000 
   C319.314636,1072.041260 319.314636,1106.364746 319.314636,1140.833618 
   C324.418335,1140.833618 329.209473,1140.833618 334.927979,1140.977539 
   C347.201965,1142.041016 359.477600,1141.272461 371.866913,1142.434326 
   C393.070068,1144.422852 414.603607,1142.888672 436.924957,1142.973389 
   C443.950562,1142.926880 450.976196,1142.880371 458.929016,1142.977539 
   C476.618805,1142.929565 494.308624,1142.881592 512.923767,1142.973511 
   C518.616333,1142.927002 524.308899,1142.880371 530.928711,1142.977417 
   C556.951904,1142.929565 582.975159,1142.881592 609.924622,1142.973267 
   C616.616943,1142.926758 623.309265,1142.880249 630.928772,1142.977539 
   C653.953247,1142.984985 676.977905,1143.024414 700.001831,1142.914551 
   C701.282043,1142.908569 702.556396,1141.666992 703.972717,1140.093628 
   C703.926331,1136.728882 703.879944,1133.364258 703.977417,1129.071167 
   C703.929443,1110.714233 703.881470,1092.357422 703.972656,1073.092773 
 M740.931396,958.977417 
   C762.192261,958.977417 783.453064,958.977417 804.834229,958.977417 
   C804.834229,918.260559 804.834229,878.131653 804.973145,837.074402 
   C804.926819,818.715454 804.880493,800.356445 804.977417,781.068298 
   C804.977417,765.141113 804.977417,749.213928 804.977417,732.825562 
   C869.652588,732.825562 933.697937,732.825562 998.000000,732.825562 
   C998.000000,730.550232 998.000000,728.736755 998.000000,726.923279 
   C998.000000,668.777161 998.004944,610.630981 997.992737,552.484863 
   C997.991455,546.324097 997.889465,540.163330 997.973267,533.075012 
   C997.926880,527.049255 997.880493,521.023438 997.977417,514.068481 
   C997.977417,465.151154 997.977417,416.233795 997.977417,366.850830 
   C932.706055,366.850830 867.994202,366.850830 803.000000,366.850830 
   C803.000000,364.410095 803.003052,362.434845 802.999512,360.459595 
   C802.944885,330.307312 802.889465,300.155029 802.973328,269.074341 
   C802.926941,248.715393 802.880554,228.356445 802.977417,207.068283 
   C802.977417,169.144272 802.977417,131.220261 802.977417,93.165924 
   C780.932495,93.165924 759.467407,93.165924 737.501587,93.000328 
   C737.334656,92.945267 737.167664,92.890213 736.999695,91.974907 
   C737.410889,89.524628 736.327881,88.862450 733.954346,88.950722 
   C728.308960,89.160645 722.653870,89.110741 716.077820,89.026917 
   C711.051025,89.073235 706.024292,89.119553 700.068298,89.022598 
   C571.208862,89.348801 442.349487,89.674721 313.490112,90.007759 
   C312.660797,90.009903 311.831787,90.110909 310.074738,90.026756 
   C303.715698,90.073112 297.356628,90.119461 290.068359,90.022591 
   C262.475189,90.022591 234.882004,90.022591 207.165787,90.022591 
   C207.165787,131.071732 207.165787,171.534485 207.026764,212.925629 
   C207.073135,228.617935 207.119507,244.310226 207.022598,260.931732 
   C207.022598,296.186310 207.022598,331.440887 207.022598,367.160889 
   C142.027817,367.160889 77.648849,367.160889 13.000000,367.160889 
   C13.000000,383.433228 12.983071,399.238525 13.003488,415.043762 
   C13.047385,449.028320 13.110518,483.012878 13.026737,517.925720 
   C13.017825,520.720947 12.889568,523.522095 13.026442,526.310181 
   C13.264320,531.155640 13.665981,535.993103 13.255352,541.320129 
   C13.170258,542.477173 13.010930,543.634216 13.010704,544.791260 
   C12.998713,606.289246 12.999371,667.787170 13.006295,729.285156 
   C13.006421,730.401672 13.098005,731.518250 13.162912,733.000000 
   C45.642921,733.000000 77.770363,733.000000 109.897812,733.000000 
   C142.163757,733.000000 174.429718,733.000000 207.165833,733.000000 
   C207.165833,751.060730 207.165833,768.529175 207.026718,786.925964 
   C207.073166,808.617920 207.119614,830.309814 207.022598,852.930725 
   C207.022598,914.187500 207.022598,975.444275 207.022598,1036.662964 
   C228.662811,1036.662964 249.722382,1036.662964 271.267700,1036.662964 
   C271.267700,1032.260742 271.267700,1028.194824 271.267700,1023.843018 
   C340.692230,1023.843018 409.627563,1023.843018 479.052185,1023.843018 
   C479.052185,1018.817932 479.052185,1014.077393 479.052185,1008.880005 
   C565.260742,1008.880005 650.979919,1008.880005 736.833557,1008.880005 
   C736.833557,992.267822 736.833557,976.134216 737.192505,959.372314 
   C738.129089,959.192932 739.065674,959.013550 740.931396,958.977417 
 z"
      />
      <path
        fill="#00D8FF"
        opacity="1.000000"
        stroke="none"
        strokeWidth="10"
        d="
 M290.997589,90.165817 
   C297.356628,90.119461 303.715698,90.073112 310.788666,90.420799 
   C313.496826,90.887413 315.522308,90.759033 317.480530,91.063354 
   C339.127930,94.427475 359.966766,100.728371 379.296204,110.919762 
   C397.085449,120.299072 414.575958,130.398865 431.423706,141.370361 
   C451.822845,154.654541 470.693298,170.072983 488.393494,186.858627 
   C494.142212,192.310349 500.070709,197.572464 505.771179,202.787872 
   C518.261169,191.616760 530.396423,180.155838 543.194458,169.490158 
   C555.528198,159.211502 568.337524,149.467789 581.312683,140.002853 
   C601.115540,125.557312 622.351624,113.426132 645.037842,104.157768 
   C656.167480,99.610809 667.854614,96.322273 679.465942,93.100243 
   C686.467896,91.157265 693.808838,90.436066 700.997498,89.165863 
   C706.024292,89.119553 711.051025,89.073235 716.793579,89.421951 
   C724.006470,90.823044 730.503540,91.829094 737.000671,92.835152 
   C737.167664,92.890213 737.334656,92.945267 737.950623,93.383041 
   C752.654602,98.253784 763.884277,107.137184 772.845154,118.719261 
   C788.999817,139.599319 796.302490,164.021347 800.017761,189.747162 
   C800.897583,195.839127 801.892273,201.914505 802.834229,207.997498 
   C802.880554,228.356445 802.926941,248.715393 802.580688,269.785217 
   C799.373108,302.592590 793.542847,334.191193 785.744446,365.284027 
   C794.615967,367.981628 802.744202,370.383484 810.829041,372.923706 
   C844.478516,383.496307 876.954895,396.764099 907.703552,414.216583 
   C931.376770,427.653229 953.089417,443.566559 971.170471,463.941132 
   C977.634033,471.224487 983.283936,479.537689 987.774536,488.176483 
   C992.146667,496.587219 994.560547,506.015900 997.834106,514.997681 
   C997.880493,521.023438 997.926880,527.049255 997.585571,533.775391 
   C996.359314,545.119324 992.917358,555.116089 987.792114,564.231140 
   C974.119751,588.547485 954.244751,607.186890 931.633362,623.067627 
   C913.897522,635.523926 895.367798,646.661987 875.402832,655.197266 
   C858.264343,662.524353 841.105469,669.837830 823.708496,676.513245 
   C813.514343,680.424927 802.850586,683.123047 792.367981,686.266663 
   C789.113770,687.242493 787.372009,688.179504 788.801331,692.408081 
   C790.986938,698.874634 792.448608,705.639832 793.630615,712.381165 
   C796.596680,729.298401 799.253723,746.270020 801.992126,763.226746 
   C803.000977,769.473755 803.890320,775.739990 804.834106,781.997498 
   C804.880493,800.356445 804.926819,818.715454 804.576660,837.796326 
   C803.792419,842.282837 803.322327,846.041077 803.030884,849.813110 
   C801.621887,868.051331 797.504883,885.687195 790.939880,902.721130 
   C781.213867,927.956787 766.081238,948.391663 740.002258,958.834106 
   C739.065674,959.013550 738.129089,959.192932 736.611267,959.689209 
   C718.753235,964.455933 701.408203,964.616760 683.987305,960.463501 
   C682.488892,956.719421 680.816101,956.933533 678.702881,959.893555 
   C677.921753,959.674316 677.440613,959.395081 676.920532,958.760376 
   C675.571594,958.305603 674.261536,958.206421 672.548706,958.064331 
   C658.076660,952.814819 643.509521,948.643250 630.049744,942.169434 
   C607.447632,931.298340 586.028381,918.187439 566.561218,902.193237 
   C552.589539,890.713928 538.723022,879.103577 524.954651,867.381287 
   C518.920959,862.244263 513.248901,856.682434 507.326965,851.234680 
   C501.207367,857.002747 495.122437,862.869324 488.889801,868.574463 
   C483.048889,873.921143 477.379730,879.535522 471.059814,884.263245 
   C454.284729,896.812500 437.479889,909.359741 420.159271,921.131470 
   C402.233154,933.314636 382.891235,943.065796 362.576263,950.703369 
   C337.977722,959.951416 312.772858,965.959656 286.284729,961.852600 
   C278.780792,960.689026 271.148376,958.630188 264.270508,955.468628 
   C241.572754,945.035156 228.156906,926.032166 220.212280,903.270874 
   C215.613571,890.095581 213.319016,876.117493 209.956039,862.508484 
   C209.086884,858.991211 208.099258,855.503235 207.166061,852.001770 
   C207.119614,830.309814 207.073166,808.617920 207.411621,786.234985 
   C208.232376,781.639465 208.567047,777.720581 209.123520,773.833374 
   C210.643524,763.215210 212.257080,752.610535 213.900269,741.635132 
   C214.014145,740.528931 214.061325,739.788086 214.403046,738.870972 
   C214.742905,737.797241 214.788239,736.899902 214.901672,735.680054 
   C215.016037,734.920837 215.062286,734.484070 215.403046,733.870972 
   C215.742905,732.797241 215.788239,731.899902 215.901672,730.680054 
   C216.016037,729.920837 216.062286,729.484070 216.403046,728.870972 
   C216.742905,727.797241 216.788239,726.899902 216.901672,725.680054 
   C217.016022,724.920837 217.062271,724.484070 217.403046,723.870972 
   C217.742905,722.797241 217.788239,721.899902 217.901672,720.680054 
   C218.016022,719.920837 218.062271,719.484070 218.403030,718.870911 
   C218.742905,717.797180 218.788269,716.899902 218.901749,715.680054 
   C219.016144,714.920837 219.062424,714.484070 219.426300,713.831299 
   C220.440491,710.077942 221.137085,706.540588 221.901794,702.680664 
   C222.016159,701.921143 222.062424,701.484253 222.425125,700.833557 
   C223.145721,699.041504 223.298111,697.339783 224.000580,695.907898 
   C226.227829,691.368103 224.172745,689.723328 219.955063,688.369202 
   C202.412827,682.736877 184.783615,677.299011 167.523392,670.882996 
   C142.166763,661.457336 117.934868,649.567139 95.079681,635.004944 
   C88.353699,630.719543 81.726601,626.278931 75.029335,621.945740 
   C75.004494,621.981995 75.084129,621.944824 74.941475,621.636597 
   C71.879753,619.180664 68.960693,617.032837 65.901199,614.583618 
   C60.144775,608.992371 54.443172,603.789734 48.941029,598.384033 
   C44.864273,594.378723 41.046844,590.109375 36.971523,585.654114 
   C35.752747,584.110474 34.676327,582.870361 33.584610,581.618652 
   C33.569305,581.606995 33.577419,581.568115 33.442993,581.239380 
   C28.473837,572.088806 23.424196,563.375366 18.898237,554.397888 
   C16.749819,550.136353 15.600759,545.371033 13.998965,540.833923 
   C13.665981,535.993103 13.264320,531.155640 13.026442,526.310181 
   C12.889568,523.522095 13.017825,520.720947 13.414402,517.224976 
   C14.641315,505.892731 18.120749,495.937378 23.185205,486.793152 
   C36.291492,463.128784 55.733788,445.287140 77.533073,429.807220 
   C99.948486,413.889801 124.074448,400.993835 149.589417,390.956787 
   C169.312561,383.198181 189.541977,376.722260 209.574692,369.757721 
   C215.010544,367.867920 220.549316,366.274170 225.494797,364.716522 
   C221.899216,347.927338 218.115234,331.894379 215.116211,315.715912 
   C212.881332,303.659698 211.681000,291.412537 209.982437,279.255707 
   C209.084946,272.832184 208.107315,266.419891 207.165878,260.002533 
   C207.119507,244.310226 207.073135,228.617935 207.423309,212.203613 
   C208.381058,198.483582 210.018204,185.608368 213.045288,172.968536 
   C218.841614,148.765594 227.383881,125.977463 246.670883,108.747421 
   C254.535202,101.721832 263.483154,96.872803 273.516754,94.042381 
   C279.251831,92.424538 285.164734,91.437103 290.997589,90.165817 
 M969.651062,543.734009 
   C970.767334,538.469177 972.484924,533.249329 972.882324,527.930847 
   C973.898193,514.335327 968.286499,502.620422 961.070557,491.643494 
   C949.917664,474.677612 934.385986,462.174835 918.083801,450.579987 
   C899.188721,437.140900 878.684387,426.587036 857.551758,417.142090 
   C834.068787,406.646759 809.777344,398.453705 785.171753,391.121674 
   C779.075562,389.305115 779.028076,389.460480 776.938049,395.983704 
   C776.341797,397.844574 775.745605,399.705566 775.163086,401.570801 
   C762.172119,443.166504 745.801208,483.434875 727.609192,522.995972 
   C726.983521,524.356567 726.871582,526.451904 727.458679,527.794312 
   C733.100403,540.693420 739.429565,553.311035 744.626709,566.381226 
   C754.768372,591.886292 764.347717,617.615723 774.073059,643.285156 
   C776.630005,650.034119 778.868835,656.903687 781.366150,664.038818 
   C794.837463,659.554749 807.766113,655.477966 820.537109,650.955933 
   C852.898071,639.497375 883.865234,625.109985 912.388489,605.850891 
   C933.110718,591.859070 951.878601,575.799805 965.611755,553.918213 
   C968.800720,552.125916 971.308777,550.053284 968.958862,545.534668 
   C968.958862,545.534668 968.957520,545.111328 968.985413,544.638550 
   C968.985413,544.638550 969.000000,544.165161 969.651062,543.734009 
 M381.081909,650.330017 
   C390.044891,663.840454 398.957520,677.385010 408.044861,690.811279 
   C409.004333,692.228882 410.876129,693.567383 412.523163,693.873169 
   C416.388153,694.590515 420.367493,694.804138 424.311096,694.965942 
   C442.012573,695.692810 459.714691,696.763672 477.422333,696.887451 
   C498.350006,697.033752 519.287231,696.478577 540.213562,695.958130 
   C558.755432,695.496948 577.288940,694.686401 595.824280,693.982178 
   C599.459595,693.844116 602.701660,693.068298 604.888550,689.514587 
   C619.207947,666.245178 634.331604,643.440308 647.871155,619.729187 
   C664.616699,590.403381 680.031433,560.319031 696.164490,530.640381 
   C697.934814,527.383667 698.100159,524.872131 696.280151,521.534607 
   C680.738403,493.033539 666.045654,464.046722 649.771240,435.974884 
   C635.418152,411.217072 619.429199,387.403351 603.933533,363.320129 
   C602.637878,361.306458 599.751221,359.654907 597.334839,359.167145 
   C592.847412,358.261383 588.166504,358.219940 583.557434,358.028381 
   C566.189026,357.306549 548.813354,356.033295 531.447327,356.136383 
   C498.412750,356.332458 465.382263,357.300934 432.351776,358.027924 
   C425.911591,358.169647 419.452118,358.429474 413.059235,359.148163 
   C411.025909,359.376740 408.484802,360.800018 407.358521,362.472778 
   C399.132477,374.689728 390.903320,386.924561 383.257751,399.507721 
   C371.105072,419.508789 359.014038,439.566986 347.625061,460.006714 
   C336.445465,480.070740 326.099945,500.602692 315.601410,521.038757 
   C314.342041,523.490234 312.729706,526.041504 314.656006,529.594177 
   C320.435211,540.252686 325.183807,551.477234 331.100800,562.052246 
   C347.496521,591.355408 364.280670,620.441162 381.081909,650.330017 
 M265.901367,481.706421 
   C258.924896,463.560791 251.711075,445.501648 245.053894,427.239624 
   C240.475586,414.680298 236.669510,401.839478 232.443802,388.896301 
   C226.027283,390.879425 219.825623,392.879608 213.575302,394.714020 
   C178.432922,405.027893 144.576508,418.363831 112.915108,436.990997 
   C89.383095,450.835449 67.654861,466.823730 51.426136,489.162170 
   C37.502960,508.327087 32.971779,528.894287 44.515072,550.937744 
   C51.659626,564.581177 61.485737,576.063416 72.838623,586.578003 
   C91.207756,603.590637 112.011871,616.869019 133.987610,628.382935 
   C164.227646,644.226990 196.120453,655.968994 228.984421,665.158630 
   C232.035538,666.011719 232.261948,665.218689 233.126007,662.605286 
   C239.891891,642.141113 246.308289,621.525696 254.074921,601.437256 
   C263.268799,577.657410 273.780792,554.389038 283.475281,530.797791 
   C284.388458,528.575623 284.308685,525.316406 283.388184,523.072754 
   C277.801422,509.455780 271.836761,495.993805 265.901367,481.706421 
 M375.355530,917.916504 
   C418.155579,896.242432 455.283356,866.985596 489.516968,833.126221 
   C483.474518,826.354065 477.708801,820.033508 472.100861,813.576050 
   C461.739319,801.644836 451.057709,789.959595 441.262543,777.576233 
   C427.688690,760.415588 414.680176,742.800537 401.709473,725.174194 
   C397.584534,719.568604 393.084961,716.567810 385.712128,716.790649 
   C377.868774,717.027771 369.952332,715.810974 362.109558,714.877930 
   C349.743652,713.406799 337.398315,711.742371 325.071075,709.972961 
   C313.407349,708.298645 301.734497,706.623230 290.145203,704.511780 
   C276.712189,702.064392 263.365906,699.140869 249.523926,696.331055 
   C247.515564,704.987976 245.630035,713.395569 243.609970,721.770691 
   C237.484909,747.164856 233.456985,772.959045 232.288666,798.977295 
   C231.466843,817.278687 232.768890,835.741943 234.139694,854.056885 
   C235.579041,873.287537 240.579590,891.758118 250.308945,908.626038 
   C257.679352,921.404175 267.605286,931.513794 282.264893,935.567749 
   C293.179932,938.586304 304.303162,938.615295 315.590912,937.126831 
   C336.476471,934.372864 355.772003,927.006958 375.355530,917.916504 
 M610.512024,725.952881 
   C584.203918,763.162842 556.339783,799.127991 524.638000,833.101379 
   C538.445129,845.573792 551.681152,858.642944 566.098755,870.243530 
   C580.748047,882.030457 596.138916,893.034302 611.999268,903.133972 
   C624.953430,911.383057 638.788635,918.421631 652.758118,924.857605 
   C668.861633,932.276672 685.778259,937.082581 703.766418,938.284912 
   C714.715210,939.016663 725.157410,937.977112 734.845398,933.435059 
   C752.373108,925.217468 761.654175,909.759094 767.938965,892.336731 
   C772.118835,880.749084 776.040833,869.098145 776.533752,856.478333 
   C776.849060,848.403320 779.652100,840.411743 779.839294,832.347900 
   C780.423096,807.199097 780.522156,782.020508 776.013306,757.109497 
   C772.205811,736.073425 768.375916,715.041504 764.548889,693.969116 
   C762.716248,694.139893 762.064331,694.135315 761.441772,694.268311 
   C746.271301,697.507751 731.136475,700.924927 715.925232,703.959412 
   C704.704224,706.198059 693.399475,708.033447 682.104004,709.876648 
   C671.819763,711.554810 661.532715,713.318115 651.182739,714.463623 
   C640.289734,715.669189 629.315430,716.127869 618.392029,717.088135 
   C617.194031,717.193481 615.825928,718.230408 615.012207,719.224487 
   C613.465698,721.113770 612.263306,723.284668 610.512024,725.952881 
 M469.008423,242.488388 
   C475.380676,235.378754 481.752899,228.269119 488.505005,220.735657 
   C485.737183,218.420364 483.214172,216.369644 480.756104,214.243851 
   C465.796448,201.306534 451.212738,187.902756 435.806976,175.521454 
   C418.067444,161.264542 398.942780,148.901901 378.726349,138.377396 
   C362.138123,129.741699 344.905914,122.593910 326.627197,118.360489 
   C314.749084,115.609459 302.848114,114.146957 290.464905,115.804123 
   C270.884705,118.424400 257.842957,129.199463 248.984604,146.080399 
   C236.794922,169.309708 233.394348,194.641876 232.180786,220.271942 
   C231.507385,234.493668 232.496887,248.809174 233.074722,263.068695 
   C233.360611,270.123505 234.155533,277.184753 235.178268,284.176025 
   C236.550369,293.555481 238.180038,302.907074 240.033173,312.204071 
   C243.125076,327.715820 246.481827,343.174835 249.719513,358.619904 
   C261.772064,356.074738 273.042084,353.467224 284.403870,351.352997 
   C298.714203,348.690063 313.075500,346.274933 327.460480,344.047882 
   C337.992798,342.417297 348.593384,341.218872 359.173370,339.907074 
   C370.080505,338.554688 381.014893,337.408508 391.899170,335.897186 
   C393.835358,335.628357 396.142578,334.453644 397.321320,332.947937 
   C401.655945,327.410889 405.408020,321.419769 409.706329,315.851990 
   C420.535858,301.824036 431.410370,287.826477 442.522736,274.022675 
   C450.980591,263.516296 459.830963,253.325912 469.008423,242.488388 
 M656.351624,340.002655 
   C664.922974,341.330994 673.505188,342.593445 682.063171,344.003021 
   C695.127869,346.154907 708.210388,348.224884 721.221497,350.669586 
   C734.653259,353.193329 748.008789,356.123291 762.209412,359.042419 
   C765.514099,341.691986 769.237732,324.619995 771.913574,307.385376 
   C774.503357,290.704193 776.412659,273.889496 777.847900,257.067535 
   C778.683411,247.274734 778.258057,237.343658 777.925842,227.490784 
   C777.607910,218.059677 776.972595,208.617172 775.955200,199.236237 
   C773.627075,177.769791 768.410278,157.184021 756.394226,138.809891 
   C751.580444,131.448959 745.591797,125.393364 737.943909,120.971451 
   C724.196777,113.023018 709.256409,112.712334 694.346130,115.218254 
   C677.712219,118.013885 661.807861,123.587753 646.489319,130.797226 
   C627.894287,139.548782 610.187744,149.825195 593.662903,161.986389 
   C580.854980,171.412201 568.398865,181.345551 556.153687,191.496429 
   C547.762268,198.452744 540.020508,206.190781 531.948303,213.535339 
   C529.220764,216.016998 526.370117,218.363388 523.589417,220.759796 
   C527.456970,225.119019 530.757507,228.815048 534.031799,232.534256 
   C543.838928,243.673904 554.198853,254.383072 563.315735,266.062134 
   C580.647217,288.264374 597.250244,311.034851 614.226685,333.515778 
   C615.045593,334.600250 616.477661,335.742584 617.738586,335.891815 
   C630.292786,337.377747 642.871033,338.660309 656.351624,340.002655 
 M728.904358,592.723572 
   C723.480957,580.408386 718.057495,568.093140 712.918213,556.423096 
   C687.205139,601.177429 661.694519,645.579529 636.145691,690.047913 
   C640.731934,689.698853 645.812988,689.584534 650.810974,688.880920 
   C666.210632,686.712952 681.634460,684.636169 696.944336,681.931885 
   C715.117004,678.721863 733.158386,674.773560 751.308472,671.426147 
   C755.769043,670.603455 756.735779,669.165100 755.123047,664.836975 
   C746.280945,641.107971 737.682251,617.288391 728.904358,592.723572 
 M287.095398,584.725403 
   C284.375244,591.906433 281.513123,599.037476 278.961914,606.278076 
   C271.687805,626.922729 264.523224,647.606140 257.363983,668.291016 
   C256.449921,670.931946 257.018890,672.482300 260.332184,673.085022 
   C271.417114,675.101501 282.394684,677.712708 293.485931,679.688660 
   C306.536896,682.013672 319.630096,684.163513 332.767181,685.925537 
   C345.299713,687.606445 357.914093,688.674438 370.487915,690.053589 
   C372.565399,690.281555 374.619293,690.724060 377.886414,691.267273 
   C348.402100,647.069092 322.923859,602.355042 299.462891,556.080933 
   C295.334290,565.705994 291.402283,574.872620 287.095398,584.725403 
 M430.070160,722.276123 
   C431.062256,723.582092 432.032806,724.905029 433.049713,726.191406 
   C444.846619,741.114075 456.559570,756.104492 468.487518,770.921814 
   C475.391846,779.498596 482.511444,787.912109 489.785095,796.178406 
   C495.424042,802.586792 501.452026,808.652832 507.171997,814.727600 
   C535.070862,785.155396 559.787781,753.583801 583.803772,720.000000 
   C581.044189,720.000000 579.445312,719.962158 577.848755,720.005920 
   C566.090881,720.328186 554.331848,720.622192 542.576904,721.031128 
   C539.634094,721.133484 536.705750,721.878296 533.768921,721.891052 
   C514.614746,721.974182 495.455841,722.183105 476.306763,721.860596 
   C461.274445,721.607483 446.254517,720.635803 431.225769,720.070190 
   C430.807709,720.054443 430.352264,721.032043 430.070160,722.276123 
 M463.022888,288.460907 
   C451.550171,302.913269 440.077454,317.365662 428.460297,332.000000 
   C480.324951,332.000000 531.330505,332.000000 582.415100,332.000000 
   C558.912476,299.868195 533.917969,268.647949 505.916992,239.275055 
   C496.769623,249.234085 488.002686,258.474121 479.599854,268.034271 
   C473.972992,274.436096 468.863129,281.292328 463.022888,288.460907 
 M737.463867,434.045807 
   C743.320679,417.245819 749.177490,400.445831 755.051208,383.597443 
   C709.182373,372.804352 642.997803,361.856354 636.337952,363.483490 
   C661.658264,407.151154 687.136292,451.090851 712.606079,495.016235 
   C714.957275,489.633331 717.845032,483.442902 720.388245,477.114014 
   C726.048218,463.028961 731.535767,448.874603 737.463867,434.045807 
 M258.902130,388.712158 
   C270.017059,425.544434 283.817627,461.361237 299.502380,496.875824 
   C322.794434,450.666656 348.118225,406.150238 377.123627,362.649048 
   C336.050629,367.272888 296.407715,373.343048 257.313843,382.804779 
   C257.792236,384.886871 258.151581,386.450775 258.902130,388.712158 
 z"
      />
      <path
        fill="#00D8FF"
        opacity="1.000000"
        stroke="none"
        strokeWidth="10"
        d="
 M371.591492,1040.094238 
   C388.601562,1048.656616 390.294250,1067.716064 384.148865,1080.935791 
   C381.858795,1085.862183 376.274719,1089.257446 372.404266,1093.138794 
   C386.954254,1104.976074 390.945923,1124.364868 401.371704,1141.000000 
   C396.607513,1141.000000 392.857544,1140.808472 389.137451,1141.059448 
   C386.052643,1141.267578 384.444977,1140.115234 383.004883,1137.362793 
   C377.244385,1126.352295 371.273407,1115.448853 365.201080,1104.606079 
   C362.659363,1100.067505 358.023743,1098.427124 353.242615,1098.103027 
   C347.117523,1097.687622 340.942963,1098.002075 334.000488,1098.002075 
   C334.000488,1112.106445 334.000488,1126.012573 334.000549,1140.376221 
   C329.209473,1140.833618 324.418335,1140.833618 319.314636,1140.833618 
   C319.314636,1106.364746 319.314636,1072.041260 319.314636,1037.000000 
   C324.120911,1037.000000 329.035095,1036.898926 333.943787,1037.020752 
   C344.681915,1037.287476 355.420929,1037.586304 366.149750,1038.084351 
   C367.853302,1038.163452 369.505493,1039.348389 371.591492,1040.094238 
 M366.456207,1053.975342 
   C356.538544,1047.279785 345.386200,1049.382446 334.278748,1049.035767 
   C334.278748,1061.179565 334.278748,1072.865723 334.278748,1085.000000 
   C340.655914,1085.000000 346.766754,1084.864502 352.869019,1085.035156 
   C360.148529,1085.238525 366.924500,1083.172363 369.527557,1076.304443 
   C372.239838,1069.148315 373.128845,1061.138062 366.456207,1053.975342 
 z"
      />
      <path
        fill="#00D8FF"
        opacity="1.000000"
        stroke="none"
        strokeWidth="10"
        d="
 M436.461670,1142.903564 
   C428.880859,1140.418945 422.010620,1137.876831 416.477509,1132.190918 
   C410.935791,1126.496216 407.237122,1119.808594 406.428925,1112.347046 
   C405.077545,1099.870361 405.147980,1087.310547 412.907349,1076.209717 
   C421.964569,1063.251953 436.917267,1059.221069 450.843414,1061.454224 
   C468.001770,1064.205688 477.440674,1077.623535 478.053253,1093.804443 
   C478.200012,1097.681274 478.877045,1101.538086 479.376343,1105.994629 
   C459.121277,1105.994629 439.706207,1105.994629 420.260406,1105.994629 
   C421.358032,1120.421143 427.770874,1128.422363 440.546326,1131.049072 
   C451.559906,1133.313721 461.599396,1130.286133 471.536316,1126.173584 
   C472.441620,1125.798950 473.343109,1125.408081 474.271179,1125.099487 
   C474.552826,1125.005859 474.917938,1125.163330 475.970093,1125.300293 
   C475.970093,1128.579224 476.197083,1132.004395 475.840363,1135.367798 
   C475.723999,1136.464966 474.259155,1137.958496 473.114410,1138.313110 
   C468.290741,1139.807739 463.354858,1140.940308 458.230896,1142.519531 
   C450.976196,1142.880371 443.950562,1142.926880 436.461670,1142.903564 
 M458.964752,1078.464233 
   C456.527649,1076.981934 454.265900,1074.946045 451.624359,1074.109009 
   C437.014557,1069.480103 421.032684,1077.808594 420.871979,1094.738770 
   C435.489563,1094.738770 450.106415,1094.738770 466.195587,1094.738770 
   C463.744904,1089.006226 461.609680,1084.011597 458.964752,1078.464233 
 z"
      />
      <path
        fill="#00D8FF"
        opacity="1.000000"
        stroke="none"
        strokeWidth="10"
        d="
 M512.461060,1142.903564 
   C491.628448,1137.687866 490.253998,1114.540039 498.095520,1102.917725 
   C503.545532,1094.839722 512.281372,1092.595337 521.323669,1092.098999 
   C529.768005,1091.635376 538.257751,1092.000000 546.728333,1092.000000 
   C546.456238,1078.138794 537.200745,1073.173950 526.195068,1072.889771 
   C516.741089,1072.645874 508.123749,1075.259399 499.287781,1079.135620 
   C499.287781,1074.767700 499.287781,1070.848389 499.287781,1066.472290 
   C512.816406,1061.737305 526.744568,1058.412598 541.190857,1063.177856 
   C551.193481,1066.477295 557.590942,1073.991211 558.758728,1084.199341 
   C560.109985,1096.012085 559.730103,1108.028931 559.974731,1119.959839 
   C560.114136,1126.759033 560.000000,1133.563354 560.000000,1140.680786 
   C555.585510,1140.680786 551.535645,1140.680786 547.113647,1140.680786 
   C547.113647,1137.584351 547.113647,1134.661133 547.113647,1130.522461 
   C542.301819,1136.800903 537.247009,1140.909180 530.202759,1142.532959 
   C524.308899,1142.880371 518.616333,1142.927002 512.461060,1142.903564 
 M532.879700,1102.095947 
   C527.105896,1103.062622 521.307739,1103.905151 515.564819,1105.029541 
   C509.308594,1106.254639 507.721130,1111.826050 507.500854,1116.585693 
   C507.292206,1121.095215 508.168762,1126.373901 513.391296,1129.139526 
   C521.217224,1133.283813 529.050476,1133.225952 536.084167,1128.184326 
   C544.817749,1121.924316 546.672668,1112.402954 546.770691,1102.366089 
   C545.912781,1102.177124 545.595581,1102.047852 545.277649,1102.046143 
   C541.457214,1102.025391 537.636780,1102.023438 532.879700,1102.095947 
 z"
      />
      <path
        fill="#00D8FF"
        opacity="1.000000"
        stroke="none"
        strokeWidth="10"
        d="
 M638.899048,1077.054321 
   C632.487976,1074.428711 625.989136,1072.794800 618.889771,1072.888672 
   C604.966980,1073.072754 596.598267,1082.608887 595.255737,1095.124146 
   C594.520264,1101.980835 595.729309,1109.220337 597.080139,1116.086914 
   C599.262634,1127.181274 613.454224,1133.735229 624.391479,1131.260498 
   C630.072571,1129.974976 635.674866,1128.341187 641.641296,1126.778687 
   C645.294006,1131.207642 643.491699,1138.208984 637.473938,1140.207153 
   C635.159607,1140.975586 632.781982,1141.553467 630.217407,1142.525879 
   C623.309265,1142.880249 616.616943,1142.926758 609.461487,1142.903564 
   C594.331970,1138.882568 584.750244,1129.622925 581.488159,1114.802856 
   C578.029724,1099.090942 579.421204,1083.911255 591.072693,1071.576538 
   C600.721069,1061.362427 613.468323,1059.938477 626.594604,1061.427002 
   C631.364624,1061.967896 635.972046,1063.943726 640.827393,1065.996338 
   C640.300415,1070.169922 639.599731,1073.612061 638.899048,1077.054321 
 z"
      />
      <path
        fill="#00D8FF"
        opacity="1.000000"
        stroke="none"
        strokeWidth="10"
        d="
 M703.903076,1140.547119 
   C697.503113,1141.000366 691.170959,1141.097534 684.842773,1140.980103 
   C670.788818,1140.719360 664.148315,1134.337280 664.028259,1119.963623 
   C663.901978,1104.839844 664.000000,1089.714111 664.000000,1074.201294 
   C660.668274,1074.201294 657.734131,1074.201294 654.399292,1074.201294 
   C654.399292,1070.437134 654.399292,1067.053833 654.399292,1063.092041 
   C657.373474,1063.092041 660.441284,1063.092041 663.875732,1063.092041 
   C663.875732,1055.602173 663.875732,1048.665649 663.875732,1041.368164 
   C668.310242,1041.368164 672.356262,1041.368164 676.806030,1041.368164 
   C676.806030,1048.332886 676.806030,1055.265869 676.806030,1062.999390 
   C685.758240,1062.999390 694.338379,1062.999390 703.376038,1062.999512 
   C703.879883,1066.363892 703.926270,1069.728394 703.445679,1073.546631 
   C694.345825,1074.000610 685.772949,1074.000610 677.000000,1074.000610 
   C677.000000,1083.923218 676.874695,1093.067261 677.041992,1102.205933 
   C677.162720,1108.801636 677.533630,1115.401489 678.061890,1121.977905 
   C678.371521,1125.832886 679.885071,1128.902100 684.578308,1129.056152 
   C691.000122,1129.266968 697.415466,1129.675659 703.833557,1129.999512 
   C703.879944,1133.364258 703.926331,1136.728882 703.903076,1140.547119 
 z"
      />
      <path
        fill="#00D8FF"
        opacity="1.000000"
        stroke="none"
        strokeWidth="10"
        d="
 M965.248291,553.938477 
   C966.021240,551.407654 967.157715,548.856506 968.592773,546.129028 
   C971.308777,550.053284 968.800720,552.125916 965.248291,553.938477 
 z"
      />
      <path
        fill="#00D8FF"
        opacity="1.000000"
        stroke="none"
        strokeWidth="10"
        d="
 M683.987305,960.463501 
   C682.579956,960.552429 681.159363,960.271301 679.370850,959.911865 
   C680.816101,956.933533 682.488892,956.719421 683.987305,960.463501 
 z"
      />
      <path
        fill="#00D8FF"
        opacity="1.000000"
        stroke="none"
        strokeWidth="10"
        d="
 M676.920532,958.760376 
   C675.705383,958.966919 674.451416,958.817932 673.074463,958.388062 
   C674.261536,958.206421 675.571594,958.305603 676.920532,958.760376 
 z"
      />
      <path
        fill="#00D8FF"
        opacity="1.000000"
        stroke="none"
        strokeWidth="10"
        d="
 M968.971436,544.874939 
   C968.704163,544.916382 968.450745,544.721375 968.197388,544.526367 
   C968.299805,544.396912 968.402344,544.267456 968.752441,544.151550 
   C969.000000,544.165161 968.985413,544.638550 968.971436,544.874939 
 z"
      />
      <path
        fill="#00D8FF"
        opacity="1.000000"
        stroke="none"
        strokeWidth="10"
        d="
 M639.074585,1077.356445 
   C639.599731,1073.612061 640.300415,1070.169922 641.021729,1066.306885 
   C642.735291,1067.870117 644.004700,1076.181519 642.535828,1077.630859 
   C641.976196,1078.182983 640.376038,1077.680420 639.074585,1077.356445 
 z"
      />
      <path
        fill="#00D8FF"
        opacity="1.000000"
        stroke="none"
        strokeWidth="10"
        d="
 M459.798553,603.276184 
   C437.957825,589.839050 423.544922,571.194031 418.084839,546.436096 
   C412.359985,520.477783 416.206482,495.946533 431.713776,473.833801 
   C445.890839,453.617920 465.225250,441.234711 489.524597,437.024628 
   C516.081726,432.423370 540.231567,438.136230 561.517700,455.004120 
   C579.566650,469.306702 590.422729,487.796204 594.048035,510.555023 
   C598.329956,537.436096 592.230530,561.487488 574.898376,582.663391 
   C560.773254,599.920959 542.823792,610.439392 520.839783,614.001587 
   C499.404266,617.474976 479.093262,614.172241 459.798553,603.276184 
 z"
      />
    </svg>
    <svg
      className={this.state.displayS}
      id="svg"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="100vw"
      height="100vh"
      viewBox="0, 0, 50%,100%"
    >
      <g id="svgg">
        <path
          id="path0"
          d="M106.090 162.113 C 98.998 164.355,98.340 171.155,104.916 174.231 L 106.676 175.055 199.266 175.055 L 291.856 175.055 293.474 174.400 C 300.218 171.668,299.634 164.261,292.508 162.145 C 290.454 161.535,108.016 161.504,106.090 162.113 M107.410 202.778 C 98.958 203.880,97.311 212.365,104.951 215.445 L 106.676 216.141 198.973 216.141 L 291.269 216.141 292.883 215.487 C 299.667 212.736,299.445 205.530,292.504 203.162 C 290.900 202.616,111.512 202.243,107.410 202.778 M107.541 243.870 C 100.594 244.897,97.976 251.421,102.977 255.243 C 105.810 257.410,96.908 257.227,199.560 257.227 L 291.563 257.227 293.200 256.564 C 299.899 253.853,299.899 247.101,293.200 244.390 L 291.563 243.727 200.293 243.689 C 150.095 243.668,108.357 243.749,107.541 243.870 M153.153 324.129 C 143.262 325.750,137.695 332.058,138.342 340.912 C 138.909 348.667,141.998 351.993,153.600 357.342 C 160.078 360.329,161.711 361.761,161.276 364.077 C 160.327 369.137,150.389 368.852,138.298 363.418 C 138.011 363.289,137.931 364.654,137.931 369.720 L 137.931 376.186 140.279 377.092 C 155.823 383.086,172.626 378.018,175.337 366.517 C 177.641 356.741,174.253 351.701,161.108 345.353 C 153.356 341.609,151.863 340.170,153.078 337.609 C 154.507 334.598,160.963 334.651,168.884 337.740 C 170.170 338.242,171.315 338.556,171.428 338.438 C 171.692 338.164,175.843 327.759,175.728 327.661 C 174.920 326.973,169.421 325.156,165.957 324.433 C 162.727 323.758,156.339 323.607,153.153 324.129 M258.718 324.010 C 242.318 325.912,233.363 338.607,235.643 356.721 C 238.147 376.619,255.359 384.431,280.191 376.940 L 282.612 376.210 282.612 361.693 L 282.612 347.175 270.873 347.175 L 259.134 347.175 259.134 352.751 L 259.134 358.327 263.977 358.327 L 268.819 358.327 268.819 362.592 C 268.819 367.708,269.317 367.278,263.390 367.278 C 258.263 367.278,256.779 366.788,254.303 364.277 C 249.291 359.193,248.952 346.780,253.645 340.208 C 257.095 335.379,266.341 334.250,274.786 337.629 C 275.885 338.068,276.819 338.382,276.862 338.326 C 277.092 338.030,281.146 327.606,281.145 327.314 C 281.141 325.354,266.159 323.147,258.718 324.010 M178.730 324.794 C 178.734 324.917,182.686 337.102,187.512 351.871 L 196.287 378.723 204.887 378.723 L 213.486 378.723 221.051 355.686 C 225.212 343.015,229.197 330.833,229.906 328.613 L 231.196 324.578 223.079 324.578 L 214.963 324.578 210.928 339.472 C 206.301 356.557,206.482 355.830,205.598 360.840 C 204.939 364.575,204.924 364.613,204.713 363.169 C 204.214 359.762,202.265 351.747,198.753 338.665 L 195.010 324.725 186.867 324.647 C 182.388 324.604,178.726 324.670,178.730 324.794 M120.614 365.922 C 113.401 368.277,114.211 378.117,121.734 379.516 C 128.535 380.781,133.314 374.923,130.285 369.034 C 128.890 366.323,124.103 364.783,120.614 365.922 "
          stroke="none"
          stroke-width="5"
          fill="#fbfbfa"
          fill-rule="evenodd"
        ></path>
        <path
          id="path1"
          d="M146.080 45.268 L 146.001 90.536 145.338 92.883 C 142.654 102.384,135.853 109.320,126.275 112.324 L 123.698 113.133 78.136 113.212 L 32.575 113.292 32.575 179.855 C 32.575 216.465,32.663 259.712,32.770 275.960 L 32.966 305.503 199.866 305.503 L 366.766 305.503 366.968 266.398 C 367.079 244.890,367.128 181.203,367.077 124.872 L 366.985 22.450 366.176 19.871 C 365.380 17.334,363.695 13.662,362.764 12.433 C 362.503 12.089,362.094 11.494,361.855 11.112 C 361.147 9.979,356.193 5.172,355.243 4.696 C 354.760 4.454,354.299 4.184,354.219 4.095 C 353.816 3.653,351.055 2.235,349.333 1.587 C 344.832 -0.107,351.896 -0.000,244.740 -0.000 L 146.159 0.000 146.080 45.268 M89.361 56.713 L 33.015 113.133 89.435 56.787 C 141.891 4.400,145.986 0.293,145.781 0.293 C 145.741 0.293,120.352 25.682,89.361 56.713 M292.661 161.994 C 301.097 164.599,300.017 173.677,291.090 175.196 C 289.760 175.422,262.731 175.491,198.092 175.432 L 106.970 175.348 105.333 174.686 C 98.051 171.739,98.616 163.930,106.260 161.875 C 109.168 161.093,290.119 161.208,292.661 161.994 M292.170 202.924 C 299.819 205.197,300.158 212.899,292.730 215.678 L 291.091 216.291 198.443 216.216 L 105.796 216.141 104.445 215.509 C 97.627 212.322,98.600 204.548,106.040 202.776 C 108.006 202.308,290.584 202.453,292.170 202.924 M293.794 244.358 C 299.993 247.256,299.993 253.698,293.794 256.595 L 292.443 257.227 200.008 257.302 C 119.509 257.367,107.382 257.322,106.098 256.947 C 98.325 254.680,98.106 246.768,105.742 244.124 C 107.195 243.621,111.451 243.601,199.853 243.662 L 292.443 243.727 293.794 244.358 M32.578 417.095 C 32.580 440.790,32.683 443.057,33.933 447.021 C 34.729 449.545,36.530 453.412,36.909 453.412 C 37.029 453.412,37.293 453.787,37.496 454.245 C 38.180 455.790,40.867 458.622,44.228 461.342 C 44.423 461.500,44.720 461.629,44.889 461.629 C 45.057 461.629,45.194 461.735,45.194 461.866 C 45.194 462.278,49.643 464.474,52.238 465.343 L 54.732 466.178 199.148 466.253 L 343.565 466.328 346.454 465.595 C 349.020 464.944,354.219 462.697,354.219 462.239 C 354.219 462.144,354.648 461.876,355.172 461.644 C 356.128 461.221,361.022 456.503,361.849 455.208 C 362.091 454.828,362.494 454.236,362.745 453.891 C 363.761 452.494,365.385 448.981,366.159 446.504 L 366.981 443.874 367.066 419.296 C 367.146 396.027,367.086 393.898,366.379 395.042 C 365.427 396.582,379.027 396.465,199.956 396.472 L 36.156 396.478 34.483 395.598 C 33.562 395.114,32.756 394.718,32.692 394.718 C 32.628 394.718,32.576 404.787,32.578 417.095 "
          stroke="none"
          stroke-width="5"
          fill="#df711b"
          fill-rule="evenodd"
        ></path>
        <path
          id="path2"
          d="M31.479 267.865 C 30.135 269.494,23.109 278.237,10.431 294.057 C 5.451 300.271,1.174 305.592,0.926 305.881 C 0.496 306.381,0.516 306.385,1.338 305.956 C 2.081 305.569,4.329 305.506,17.535 305.504 L 32.869 305.503 32.869 285.987 C 32.869 275.253,32.815 266.471,32.749 266.471 C 32.684 266.471,32.112 267.098,31.479 267.865 M367.131 285.917 L 367.131 305.492 382.612 305.571 C 391.294 305.615,398.340 305.768,398.657 305.920 C 399.119 306.142,369.486 268.837,367.677 266.919 C 367.145 266.355,367.131 266.818,367.131 285.917 "
          stroke="none"
          stroke-width="5"
          fill="#242423"
          fill-rule="evenodd"
        ></path>
        <path
          id="path3"
          d="M154.903 161.629 C 179.813 161.670,220.488 161.670,245.292 161.629 C 270.095 161.587,249.714 161.554,200.000 161.554 C 150.286 161.554,129.992 161.587,154.903 161.629 M123.037 365.573 C 123.320 365.647,123.782 365.647,124.065 365.573 C 124.347 365.499,124.116 365.439,123.551 365.439 C 122.986 365.439,122.755 365.499,123.037 365.573 "
          stroke="none"
          stroke-width="5"
          fill="#edab76"
          fill-rule="evenodd"
        ></path>
        <path
          id="path4"
          d="M153.705 175.422 C 178.764 175.463,219.769 175.463,244.828 175.422 C 269.886 175.380,249.384 175.347,199.266 175.347 C 149.149 175.347,128.646 175.380,153.705 175.422 M137.762 369.626 C 137.762 373.015,137.805 374.362,137.857 372.618 C 137.909 370.874,137.908 368.101,137.856 366.455 C 137.804 364.809,137.762 366.236,137.762 369.626 "
          stroke="none"
          stroke-width="5"
          fill="#e9904c"
          fill-rule="evenodd"
        ></path>
        <path
          id="path5"
          d="M366.976 285.987 C 366.976 296.801,367.013 301.183,367.058 295.723 C 367.103 290.264,367.103 281.416,367.058 276.061 C 367.013 270.706,366.976 275.172,366.976 285.987 M157.080 323.607 C 157.362 323.680,157.825 323.680,158.107 323.607 C 158.390 323.533,158.158 323.472,157.594 323.472 C 157.029 323.472,156.798 323.533,157.080 323.607 M262.292 323.612 C 262.658 323.682,263.186 323.679,263.466 323.606 C 263.747 323.532,263.448 323.475,262.803 323.478 C 262.157 323.482,261.927 323.542,262.292 323.612 M264.637 323.611 C 265.000 323.681,265.594 323.681,265.957 323.611 C 266.321 323.541,266.023 323.484,265.297 323.484 C 264.571 323.484,264.274 323.541,264.637 323.611 M258.964 352.605 C 258.964 355.833,259.007 357.193,259.059 355.628 C 259.112 354.063,259.112 351.422,259.060 349.759 C 259.007 348.096,258.964 349.376,258.964 352.605 M262.010 358.546 C 263.349 358.600,265.462 358.600,266.705 358.545 C 267.948 358.490,266.853 358.446,264.270 358.446 C 261.687 358.446,260.670 358.491,262.010 358.546 M268.641 362.876 C 268.642 365.136,268.688 366.021,268.743 364.844 C 268.799 363.667,268.799 361.818,268.743 360.736 C 268.686 359.653,268.641 360.616,268.641 362.876 M242.260 372.707 C 242.890 373.353,243.472 373.881,243.553 373.881 C 243.633 373.881,243.184 373.353,242.553 372.707 C 241.923 372.062,241.341 371.533,241.260 371.533 C 241.179 371.533,241.629 372.062,242.260 372.707 M171.221 373.955 L 170.360 374.908 171.313 374.046 C 171.838 373.572,172.267 373.143,172.267 373.093 C 172.267 372.866,172.025 373.065,171.221 373.955 "
          stroke="none"
          stroke-width="5"
          fill="#ac6424"
          fill-rule="evenodd"
        ></path>
        <path
          id="path6"
          d="M101.962 164.417 L 101.101 165.371 102.054 164.509 C 102.943 163.705,103.143 163.463,102.916 163.463 C 102.866 163.463,102.437 163.892,101.962 164.417 M178.622 324.505 C 178.547 324.626,182.225 324.725,186.794 324.725 C 191.363 324.725,195.040 324.626,194.966 324.505 C 194.891 324.384,191.214 324.285,186.794 324.285 C 182.374 324.285,178.697 324.384,178.622 324.505 M219.167 324.504 C 221.477 324.554,225.174 324.554,227.384 324.504 C 229.593 324.454,227.704 324.414,223.184 324.414 C 218.665 324.414,216.857 324.455,219.167 324.504 M264.930 347.102 C 268.199 347.149,273.547 347.149,276.816 347.102 C 280.084 347.054,277.410 347.016,270.873 347.016 C 264.336 347.016,261.662 347.054,264.930 347.102 M171.680 351.724 C 172.228 352.289,172.742 352.751,172.822 352.751 C 172.903 352.751,172.521 352.289,171.974 351.724 C 171.426 351.159,170.912 350.697,170.831 350.697 C 170.751 350.697,171.133 351.159,171.680 351.724 "
          stroke="none"
          stroke-width="5"
          fill="#f4bc88"
          fill-rule="evenodd"
        ></path>
        <path
          id="path7"
          d="M89.501 56.719 L 33.001 113.292 78.349 113.212 L 123.698 113.133 126.275 112.324 C 135.854 109.320,142.659 102.379,145.337 92.883 L 145.999 90.536 146.079 52.971 C 146.124 32.311,146.124 11.974,146.081 7.777 L 146.001 0.147 89.501 56.719 M1.327 305.962 C -0.832 307.088,-0.707 307.715,4.426 321.419 C 6.860 327.918,9.032 333.632,9.252 334.116 C 9.473 334.600,10.269 336.713,11.021 338.811 C 11.773 340.910,12.823 343.749,13.355 345.121 C 13.886 346.493,16.591 353.690,19.366 361.115 C 22.140 368.540,24.547 374.780,24.714 374.982 C 24.880 375.183,24.918 375.348,24.798 375.348 C 24.678 375.348,24.744 375.547,24.945 375.789 C 25.146 376.031,25.212 376.229,25.092 376.229 C 24.971 376.229,25.008 376.394,25.172 376.596 C 25.336 376.798,25.602 377.425,25.762 377.990 C 26.454 380.427,31.189 392.608,31.809 393.546 C 32.237 394.193,33.174 394.928,34.334 395.527 L 36.179 396.478 199.968 396.472 C 381.422 396.465,363.817 396.630,366.756 394.907 C 368.034 394.158,369.213 391.838,370.655 387.234 C 370.857 386.588,371.154 385.895,371.314 385.693 C 371.474 385.492,371.507 385.326,371.387 385.326 C 371.266 385.326,371.305 385.161,371.472 384.960 C 371.639 384.758,373.969 378.716,376.650 371.533 C 382.592 355.614,383.534 353.104,383.914 352.164 C 384.077 351.761,387.770 341.929,392.119 330.317 C 400.863 306.973,400.735 307.434,398.856 306.172 L 397.859 305.503 200.030 305.504 C 21.788 305.506,2.115 305.551,1.327 305.962 M162.729 323.706 C 166.546 324.134,175.056 326.487,176.044 327.387 C 176.143 327.477,171.755 338.678,171.530 338.909 C 171.478 338.963,170.262 338.538,168.827 337.964 C 159.783 334.345,152.208 335.039,153.028 339.412 C 153.316 340.946,154.923 342.072,161.115 345.074 C 173.444 351.051,175.934 353.944,175.934 362.289 C 175.933 370.172,171.880 375.601,163.980 378.298 C 157.008 380.679,146.363 380.112,139.325 376.986 L 137.638 376.236 137.638 369.630 C 137.638 365.252,137.741 363.023,137.943 363.023 C 138.111 363.023,138.795 363.302,139.464 363.643 C 149.283 368.653,160.968 368.629,160.968 363.600 C 160.968 361.454,159.793 360.485,153.867 357.742 C 141.328 351.938,138.084 348.156,138.131 339.398 C 138.191 328.382,148.097 322.062,162.729 323.706 M268.568 323.710 C 273.352 324.192,280.997 326.201,281.328 327.063 C 281.475 327.445,277.104 338.665,276.809 338.665 C 276.717 338.665,275.816 338.334,274.807 337.931 C 260.351 332.147,250.748 337.719,250.781 351.871 C 250.809 364.034,255.882 368.629,267.425 366.947 L 268.525 366.786 268.525 362.711 L 268.525 358.635 263.756 358.555 L 258.988 358.474 258.908 352.678 L 258.828 346.882 270.720 346.882 L 282.612 346.882 282.612 361.690 L 282.612 376.498 280.484 377.135 C 253.795 385.134,236.230 375.966,235.175 353.485 C 234.220 333.110,247.177 321.556,268.568 323.710 M195.271 324.798 C 195.354 325.081,197.136 331.717,199.231 339.545 C 202.693 352.487,204.019 357.836,204.796 361.996 C 204.997 363.070,205.079 363.227,205.104 362.583 C 205.198 360.154,211.923 333.607,214.565 325.238 L 214.866 324.285 223.207 324.285 C 227.795 324.285,231.546 324.318,231.543 324.358 C 231.540 324.398,227.536 336.647,222.644 351.577 L 213.751 378.723 204.920 378.801 L 196.089 378.879 195.192 376.160 C 191.506 364.991,178.430 324.707,178.430 324.519 C 178.430 323.972,195.107 324.248,195.271 324.798 M126.599 365.786 C 132.520 367.568,133.090 377.034,127.407 379.205 C 123.649 380.642,118.594 379.673,116.917 377.195 C 112.495 370.659,118.658 363.396,126.599 365.786 "
          stroke="none"
          stroke-width="5"
          fill="#c14406"
          fill-rule="evenodd"
        ></path>
        <path
          id="path8"
          d="M250.410 351.871 C 250.410 352.597,250.467 352.894,250.537 352.531 C 250.607 352.168,250.607 351.574,250.537 351.211 C 250.467 350.847,250.410 351.145,250.410 351.871 "
          stroke="none"
          stroke-width="5"
          fill="#ec9c54"
          fill-rule="evenodd"
        ></path>
      </g>
    </svg>
    </div>
        );
      }
    }
  }

    ReactDOM.render(<Proyecto />, document.getElementById("proyecto"));
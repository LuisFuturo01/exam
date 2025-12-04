import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function Modales() {
  return (
    <>
      <h1>Modales</h1>

      <button
        type="button"
        className="btn btn-primary me-2"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Prestamos
      </button>

      <button
        type="button"
        className="btn btn-primary me-2"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal1"
      >
        Depositos
      </button>

      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal2"
      >
        Transferencias
      </button>

      {/* MODAL 1 */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Préstamo a Luis
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label">
                  Nombre:
                </label>
                <div>Luis Alejandro ZEBALLOS QUIROZ</div>
              </div>

              <div className="mb-3">
                <label htmlFor="message-text" className="col-form-label">
                  Monto:
                </label>
                <div>5000 Bs</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL 2 */}
      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel1">
                Depósito a Luis
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="recipient-name1" className="col-form-label">
                  Nombre:
                </label>
                <div>Luis Alejandro ZEBALLOS QUIROZ</div>
              </div>

              <div className="mb-3">
                <label htmlFor="message-text1" className="col-form-label">
                  Monto:
                </label>
                <div>5000 Bs</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL 3 */}
      <div
        className="modal fade"
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel2"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel2">
                Transferencia a Luis
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="recipient-name2" className="col-form-label">
                  Nombre:
                </label>
                <div>Luis Alejandro ZEBALLOS QUIROZ</div>
              </div>

              <div className="mb-3">
                <label htmlFor="message-text2" className="col-form-label">
                  Monto:
                </label>
                <div>5000 Bs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Cartilla( props ){
  return(
    <>
    <div className="content">
      <div className="cartilla">
        <div className="left">
          <img src={props.img} alt="" />
        </div>
        <div className="right">
          <h2>{props.titulo}</h2>
          <p>Descripcion: <br /> {props.texto}</p>
        </div>
      </div>
    </div>
    </>
  )
}
function Inicio(){
  return(
    <>
      <h1>Luis Alejandro ZEBALLOS QUIROZ</h1>
    </>
  )
}
function App() {

  return (
    <BrowserRouter>
    <div className="caja">
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Umsa-logo.svg/960px-Umsa-logo.svg.png" alt="" />
        <div className="datos">
          <p>Carrera: Informatica</p>
          <p>Programacion web II</p>
        </div>
      </div>
      <div className="container">
        <header>
          <h1>Banco Económico Patito</h1>
        </header>
        <nav>
          <Link to="/" >Inicio</Link>
          <Link to="/modales">Modales</Link>
          <Link to="/cartilla">Cartilla</Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/modales" element={<Modales />}></Route>
            <Route path="/cartilla" element={<Cartilla img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Umsa-logo.svg/960px-Umsa-logo.svg.png" titulo="UMSA" texto="Universidad Mayor de San Andres"/>} ></Route>
          </Routes>
        </main>
        <footer>
          <p> Luis Alejandro ZEBALLOS QUIROZ - 2025</p>
        </footer>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App

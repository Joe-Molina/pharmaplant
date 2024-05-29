const d = document;
($template2 = d.getElementById("componente-card-template").content),
  ($template3 = d.getElementById("beneficios-card-template").content),
  ($template4 = d.getElementById("componentes2-card-template").content),
  ($fragment2 = d.createDocumentFragment()),
  ($fragment3 = d.createDocumentFragment());
$fragment4 = d.createDocumentFragment();
let viewportWidth = window.innerWidth;

d.addEventListener("click", (e) => {
  if (e.target.closest(`.magnesium`)) {
    d.querySelector(".medicamnetohidden").dataset.medica = "28";
    d.querySelector(".seccion-container").style.opacity = 1;
    d.querySelector(".seccion-container").style.visibility = "visible";
    medicamentoinfo();
  }

  if (e.target.closest(`.glucosamine`)) {
    d.querySelector(".medicamnetohidden").dataset.medica = "29";
    d.querySelector(".seccion-container").style.opacity = 1;
    d.querySelector(".seccion-container").style.visibility = "visible";
    medicamentoinfo();
  }

  if (e.target.closest(`.omega3`)) {
    d.querySelector(".medicamnetohidden").dataset.medica = "8";
    d.querySelector(".seccion-container").style.opacity = 1;
    d.querySelector(".seccion-container").style.visibility = "visible";
    medicamentoinfo();
  }

  if (e.target.closest(`.vite`)) {
    d.querySelector(".medicamnetohidden").dataset.medica = "12";
    d.querySelector(".seccion-container").style.opacity = 1;
    d.querySelector(".seccion-container").style.visibility = "visible";
    medicamentoinfo();
  }

  if (e.target.closest(`.vitc`)) {
    d.querySelector(".medicamnetohidden").dataset.medica = "23";
    d.querySelector(".seccion-container").style.opacity = 1;
    d.querySelector(".seccion-container").style.visibility = "visible";
    medicamentoinfo();
  }

  if (e.target.closest(`.resve`)) {
    d.querySelector(".medicamnetohidden").dataset.medica = "33";
    d.querySelector(".seccion-container").style.opacity = 1;
    d.querySelector(".seccion-container").style.visibility = "visible";
    medicamentoinfo();
  }

  if (e.target.closest(`.omega369`)) {
    d.querySelector(".medicamnetohidden").dataset.medica = "7";
    d.querySelector(".seccion-container").style.opacity = 1;
    d.querySelector(".seccion-container").style.visibility = "visible";
    medicamentoinfo();
  }

  if (e.target.closest(`.colagenovitaminac`)) {
    d.querySelector(".medicamnetohidden").dataset.medica = "25";
    d.querySelector(".seccion-container").style.opacity = 1;
    d.querySelector(".seccion-container").style.visibility = "visible";
    medicamentoinfo();
  }

  if (e.target.closest(`.acidohialuronicovitaminac`)) {
    d.querySelector(".medicamnetohidden").dataset.medica = "26";
    d.querySelector(".seccion-container").style.opacity = 1;
    d.querySelector(".seccion-container").style.visibility = "visible";
    medicamentoinfo();
  }

  if (e.target.closest(`.centella`)) {
    d.querySelector(".medicamnetohidden").dataset.medica = "3";
    d.querySelector(".seccion-container").style.opacity = 1;
    d.querySelector(".seccion-container").style.visibility = "visible";
    medicamentoinfo();
  }

  if (e.target.closest(`.slimplant`)) {
    d.querySelector(".medicamnetohidden").dataset.medica = "2";
    d.querySelector(".seccion-container").style.opacity = 1;
    d.querySelector(".seccion-container").style.visibility = "visible";
    medicamentoinfo();
  }

  if (e.target.closest(`.cental`)) {
    d.querySelector(".medicamnetohidden").dataset.medica = "35";
    d.querySelector(".seccion-container").style.opacity = 1;
    d.querySelector(".seccion-container").style.visibility = "visible";
    medicamentoinfo();
  }

  if (e.target.closest(`.vinagremanzana`)) {
    d.querySelector(".medicamnetohidden").dataset.medica = "27";
    d.querySelector(".seccion-container").style.opacity = 1;
    d.querySelector(".seccion-container").style.visibility = "visible";
    medicamentoinfo();
  }

  if (e.target.closest(`.coconutoil`)) {
    d.querySelector(".medicamnetohidden").dataset.medica = "1";
    d.querySelector(".seccion-container").style.opacity = 1;
    d.querySelector(".seccion-container").style.visibility = "visible";
    medicamentoinfo();
  }

  if (e.target.closest(".seccion-container .seccion-info .boton")) {
    d.querySelector(".seccion-container").style.opacity = 0;
    d.querySelector(".seccion-container").style.visibility = "hidden";
  }
});

d.addEventListener("mouseover", (e) => {
  for (let i = 1; i < 5; i++) {
    if (e.target.closest(`.componente${i}`)) {
      d.querySelector(`.componente${i} .componente-p`).style.display = "block";

      if (viewportWidth > 700) {
        const seguirCursor = () => {
          const sigueAlMouse = document.querySelector(
            `.componente${i} .componente-p`
          );
          sigueAlMouse.style.left = e.pageX - window.scrollX + -435 + "px";
          sigueAlMouse.style.top = e.pageY - window.scrollY + -200 + "px";
          document.removeEventListener("mousemove", seguirCursor);
        };
        document.addEventListener("mousemove", seguirCursor);
      }

      if (viewportWidth < 700) {
        d.querySelector(`.componente${i} .componente-img`).style.display =
          "none";
        d.querySelector(`.componente${i} .componente-nombre`).style.display =
          "none";
        d.querySelector(`.componente${i} `).style.border = "none";
        d.querySelector(`.componente${i}`).style.height = "auto";
        d.querySelector(`.componente${i} .componente-p`).style.borderRadius =
          "5px";

        d.querySelector(".seccion-info").style.marginTop = "100px";
        //d.querySelector('.seccion-img').style.display = 'none'
        d.querySelector(".seccion-img").style.display = "none";
      }
    }
  }
});

d.addEventListener("mouseout", (e) => {
  for (let i = 1; i < 5; i++) {
    if (e.target.closest(`.componente${i}`)) {
      d.querySelector(`.componente${i} .componente-p`).style.display = "none";
      d.querySelector(`.componente${i} `).style.border =
        "2px solid var(--azul)";
      d.querySelector(`.componente${i} .componente-img`).style.display =
        "block";
      d.querySelector(`.componente${i} .componente-nombre`).style.display =
        "block";

      d.querySelector(".seccion-img").style.display = "flex";
      if (viewportWidth < 700) {
        d.querySelector(".seccion-info").style.marginTop = "0px";
      }
    }
  }
});

const medicamentoinfo = async () => {
  try {
    let selectMedicamento =
      d.querySelector(".medicamnetohidden").dataset.medica;

    let res = await axios.get("../../app/medicamentos.json");
    let json = res.data.Medicamento[selectMedicamento - 1];

    d.querySelector(".seccion-img img").src = `../${json.foto}`;
    d.querySelector(".seccion-info .seccion-name").textContent = json.nombre;
    d.querySelector(".seccion-info .seccion-funcion").textContent =
      json.Funcion;
    d.querySelector(".seccion-info .seccion-descripcion").textContent =
      json.descripcion;
    d.querySelector(".seccion-info .seccion-indicaciones").textContent =
      json.indicaciones;
    d.querySelector(".seccion-componentes").innerHTML = "";
    d.querySelector(".seccion-beneficios ul").innerHTML = "";
    d.querySelector(".seccion-componentes2 ul").innerHTML = "";

    let nComponente = 0;
    json.componentes.forEach((el) => {
      nComponente++;
      console.log(el.foto);
      $template2.querySelector(
        ".componente-div .componente-img"
      ).src = `../${el.foto}`;
      $template2.querySelector(".componente-div .componente-p").textContent =
        el.definicion;
      $template2.querySelector(
        ".componente-div .componente-nombre"
      ).textContent = el.nombre;
      $template2
        .querySelector(".componente-div")
        .classList.remove(`componente${nComponente - 1}`);
      $template2
        .querySelector(".componente-div")
        .classList.remove(`componente${nComponente + 1}`);
      $template2
        .querySelector(".componente-div")
        .classList.remove(`componente${nComponente + 2}`);
      $template2
        .querySelector(".componente-div")
        .classList.remove(`componente${nComponente + 3}`);
      $template2
        .querySelector(".componente-div")
        .classList.remove(`componente${nComponente + 4}`);
      $template2
        .querySelector(".componente-div")
        .classList.remove(`componente${nComponente + 5}`);
      $template2
        .querySelector(".componente-div")
        .classList.add(`componente${nComponente}`);

      let $clone = d.importNode($template2, true);
      $fragment2.appendChild($clone);
    });

    json.beneficios.forEach((el) => {
      $template3.querySelector("li").textContent = el;

      let $clone = d.importNode($template3, true);
      $fragment3.appendChild($clone);
    });

    json.componentes2.forEach((el) => {
      $template4.querySelector("li").textContent = el;

      let $clone = d.importNode($template4, true);
      $fragment4.appendChild($clone);
    });

    d.querySelector(".seccion-componentes").appendChild($fragment2);
    d.querySelector(".seccion-beneficios ul").appendChild($fragment3);
    d.querySelector(".seccion-componentes2 ul").appendChild($fragment4);
  } catch (err) {
    let message = err.statusText || "Ocurrio un error";
    console.error(message);
  }
};

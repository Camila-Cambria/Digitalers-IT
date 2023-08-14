let noticias = [
    {
      id: 0,
      titulo: "Un juegazo para aprender css",
      resumen:
        "Css sushi es un juegazo para aprender css. Puedes acceder al mismo",
      link: "https://flukeout.github.io/",
    },
    {
      id: 1,
      titulo: "Digitallers es la mejor propuesta de capacitacion",
      resumen:
        " Queres ser un Jedi del frontend? Que estas esperando. El programa digitalers es tu oportunidad",
      link: "#",
    },
    {
      id: 2,
      titulo: "Una IA crea los simpsons en la vida real",
      resumen:
        "Se le pidio a una IA que retrate a los simpson en la vida real y esto es lo que salio.",
      link: "https://elcomercio.pe/tecnologia/inteligencia-artificial/asi-se-verian-los-personajes-de-los-simpsons-en-la-vida-real-segun-una-ia-fotos-inteligencia-artificial-midjourney-noticia/",
    },
  ];

  let articulo = document.getElementById("noticias");
  for (let noticia of noticias) {
    let card = document.createElement("article");
    card.classList.add("noticia");
    card.setAttribute("id", `noticias_${noticia.id}`);
    let img = document.createElement("img");
    img.src = `${noticia.img}`;
    card.appendChild(img);
    let header = document.createElement("header");
    let h3Titulo = document.createElement("h3");
    h3Titulo.innerText = `${noticia.titulo}`;
    let resumen = document.createElement("p");
    resumen.innerText = `${noticia.resumen}`;
    header.append(h3Titulo, resumen);
    card.appendChild(header);
    articulo.appendChild(card);
  }

  function agregarComentario(nombre, email, comentario) {
    let comentarios = document.getElementById("comentarios");
    let article = document.createElement("article");
    let img = document.createElement("img");
    img.src = "./img/avatar.jpg";
    article.append(img);
    let contenedor = document.createElement("div");
    let titulo = document.createElement("div");
    titulo.className = "titulo";
    let usuario = document.createElement("h4");
    usuario.innerText = nombre;
    let direccion = document.createElement("small");
    direccion.innerText = email;
    titulo.append(usuario);
    titulo.append(direccion);
    let p = (document.createElement("p").innerText = comentario);
    contenedor.append(titulo, p);
    article.append(contenedor);
    comentarios.appendChild(article);

  }

  window.addEventListener("load", () => {
    let btnAgregarComentario = document.getElementById("btn");
    btnAgregarComentario.addEventListener("click", () => {
      let txtNombre = document.querySelector("#nombre");
      let txtEmail = document.querySelector("#email");
      let txtComentario = document.querySelector("#comentario");
      agregarComentario(nombre.value, txtEmail.value, txtComentario.value);
      txtNombre.value = "";
      txtEmail.value = "";
      txtComentario.value = "";
    });
  });

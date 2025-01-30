function support(){

alert("Em breve daremos suporte a essa funcionalidade")
}

function seevents() {
    const mpage = document.querySelector(".main-screen");
    mpage.classList.add("hidden");
  
    const search = document.querySelector(".search");
    search.classList.remove("hidden");
  }

  const theList = [
    {
        id: 1, 
        urlImage: " https://www.zinecultural.com/Repositorio/Upload/Imagens//2023/agenda/03/PS22_ARCA_EQUIPE_CAIOMARCATTO-0435%20(1).webp ",
        nome: "Pixel Show",
        site: " https://pixelshow.co/ ",
        estado: "sp"
    },

    {
      id: 2,
      urlImage: " https://www.zinecultural.com/Repositorio/Upload/Imagens//2023/agenda/03/WhatsApp%20Image%202023-03-23%20at%2010.04.02%20(1).webp ",
      nome: "CCXP",
      site: " https://www.ccxp.com.br/ ",
      estado: "sp"
    },

   {
    id: 3,
    urlImage: " https://www.zinecultural.com/Repositorio/Upload/Imagens//2023/agenda/03/WhatsApp%20Image%202023-03-23%20at%2011.10.32%20(1).webp ",
    nome: "Festival Internacional de Quadrinhos",
    site: " https://portalbelohorizonte.com.br/fiq ",
    estado: "mg"
  },

  {
  id: 4,
  urlImage: " https://www.zinecultural.com/Repositorio/Upload/Imagens//2023/agenda/03/WhatsApp%20Image%202023-03-23%20at%2011.21.57%20(1).webp ",
  nome: "Sana Fest",
  site: " https://portalsana.com.br/ ",
  estado: "ce"
  },

  {
id: 5,
urlImage: " https://www.zinecultural.com/Repositorio/Upload/Imagens//2023/agenda/03/pira-anime.webp ",
nome: "Anime Summit",
site: " https://animesummit.com.br/index.html ",
estado: "df"
  },

  { 
id: 6,
urlImage: " https://static.mundoeducacao.uol.com.br/mundoeducacao/2019/07/campus-party.jpg ",
nome: "Campus Party Brasília",
site: " https://brasil.campus-party.org/ ",
estado: "df"
  },
 
]

function getevent(){
  const result = document.querySelector('.inputplace').value

  const filterList = theList.filter(
      (listEve) => listEve.estado === result
    )

    renderData(filterList)
    console.log(result);
  }

function renderData(filterList) {
  const listEve = document.querySelector('.location')
  listEve.innerHTML = ""
  
  for (let i in filterList) {
      listEve.innerHTML += `
      <li>
              <img src="${filterList[i].urlImage}" alt="">
          <div class="namevent">${filterList[i].nome}</div>
          <div class="browse">${filterList[i].site}</div>
          <div class="state">${filterList[i].estado}</div>
          </li>
      `
  }
  }
  

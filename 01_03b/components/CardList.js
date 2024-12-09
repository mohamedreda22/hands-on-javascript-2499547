import Card from "../components/Card.js"

const CardList=(data)=>{
  const CardListItem=(imgData)=>{
    return`
    <li class="cardList__item>
    ${Card(imgData)}
    </li>
    `

  }
  return `
  <section>
  <link href="components/cardlist.css" rel="stylesheet" />
  <ul class="cardlist__list">
  ${data.map((imgData)=> CardListItem(imgData)).join("")}
  </ul>
  </section>
  `
}

export default CardList;
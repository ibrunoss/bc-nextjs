export function getStaticProps() {
  return { 
    props: { numero : Math.random() }
  }
}

export default function Estatico({numero}) {
  return <h1>Conteúdo estático: {numero}</h1>
}
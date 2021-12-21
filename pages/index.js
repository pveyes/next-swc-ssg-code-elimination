import Component from '../components/Component'

export default function Home(props) {
  console.log(`name: ${props.name}`)
  return <Component />
}

export function getStaticProps() {
  return {
    props: {
      name: Component.displayName
    },
  }
}

import './App.css'
import Card from './components/Card'

const App = () => {
  

  return (
    <>
      <div className="App">
        <h1 className='title'>All the cards are here.</h1>
        <div className="cardsGrid">
        <Card imageUrl="/images/image1.jpg"  cardNumber='1' />
        <Card imageUrl="/images/image2.jpg"  cardNumber='2' />
        <Card imageUrl="/images/image3.jpg"  cardNumber='3' />
        <Card imageUrl="/images/image4.jpg"  cardNumber='4' />
        <Card imageUrl="/images/image5.jpg"  cardNumber='5' />
        <Card imageUrl="/images/image6.jpg"  cardNumber='6' />
        <Card imageUrl="/images/image7.jpg"  cardNumber='7' />
        <Card imageUrl="/images/image8.jpg"  cardNumber='8' />
        <Card imageUrl="/images/image9.jpg"  cardNumber='9' />
        <Card imageUrl="/images/image10.jpg"  cardNumber='10' />
        <Card imageUrl="/images/image11.jpg"  cardNumber='11' />
        <Card imageUrl="/images/image12.jpg"  cardNumber='12' />
        </div>
      </div>
    </>
  )
}

export default App

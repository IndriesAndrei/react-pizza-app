function Pizza({pizzaObj}: {pizzaObj: {name: string, photoName: string, ingredients: string, price: number, soldOut: string }}) {
    return (
        <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
          <img src={pizzaObj.photoName} alt={pizzaObj.name} />
          <div>
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            <span>{`${pizzaObj.soldOut ? "SOLD OUT" : '$' + pizzaObj.price }`}</span>
          </div>
        </li>
    );
}

export default Pizza;
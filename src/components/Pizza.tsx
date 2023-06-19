function Pizza({pizzaObj}: {pizzaObj: {name: string, photoName: string, ingredients: string, price: number }}) {
    return (
        <li className="pizza">
          <img src={pizzaObj.photoName} alt={pizzaObj.name} />
          <div>
            <h3>{pizzaObj.name}</h3>
            <p>{pizzaObj.ingredients}</p>
            <span>Price: ${pizzaObj.price}</span>
          </div>
        </li>
    );
}

export default Pizza;
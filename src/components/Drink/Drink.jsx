import "./Drink.css"

export const Drink = ({ name, image }) => (
  <div className="drink">
  <div className="drink__product">
    <div className="drink__cup">
      <img src={image} />
    </div>
    <div className="drink__info">
      <h3>{name}</h3>
      <div className="layer">
        <div
          className="layer__color"
          style={{ backgroundColor: '#613916' }}
        />
        <div className="layer__label">espresso</div>
      </div>
    </div>
  </div>
  <form className="drink__controls">
    <input type="hidden" className="order-id" value="1" />
    <button className="order-btn">Objednat</button>
  </form>
</div>
)

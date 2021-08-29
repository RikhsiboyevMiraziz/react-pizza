import { Categories, SortPopup, PizzaBlock } from '../components'
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

const sortItems = [
  { name: "популярности", type: "popular" },
  { name: "по цене", type: "price" },
  { name: "по алфавиту", type: "name" }
]

function Home() {
  const dispatch = useDispatch()
  const {category, sortBy} = useSelector(({filters}) => filters)
  const items = useSelector(({pizzas}) => pizzas.items)

  function onSelectCategory(index) {
    dispatch(setCategory(index))
  }

  function onSelectSort(obj) {
    dispatch(setSortBy(obj))
  }

  function handleAddToCart(pizzaInfo) {
    dispatch(addPizzaToCart(pizzaInfo))
  }

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy))
  },[category,sortBy])

  return (
    <div className='container'>
      <div className="content__top">
        < Categories
          items={categoryNames}
          onSelectItem={onSelectCategory}
          activeCategory={category}
        />
        <SortPopup
          items={sortItems}
          activeSort={sortBy.type}
          onSelectSort={onSelectSort}
        />
      </div>

      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
            items.map(pizza =>
               <PizzaBlock 
                  key={pizza.id}
                  {...pizza}
                  handleAddToCart={handleAddToCart}
               />)
        }

      </div>
    </div>
  )
}


export default Home

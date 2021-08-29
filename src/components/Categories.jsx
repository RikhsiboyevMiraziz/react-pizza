const Categories = ({ items , onSelectItem, activeCategory }) => {
  
    return (
        <div className="categories">
        <ul>
            
          <li 
            className={activeCategory === null ? 'active' : ''}
            onClick={() => onSelectItem(null)}
          >Все</li>
          
          {
              items.map((name, index) => 
              <li  
              key={name}
              onClick={() => onSelectItem(index)}
              className={activeCategory === index ? 'active' : ''}
              >
                  {name} 
              </li> )
          }
          
        </ul>
      </div>
    )
}

export default Categories

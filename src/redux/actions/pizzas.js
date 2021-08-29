export const fetchPizzas = (category, sortBy) => (dispatch) => {
    fetch(`${process.env.REACT_APP_API}/pizzas?${category != null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
        .then(res => res.json())
        .then(javob => {
            dispatch(setPizzas(javob))
        })
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
})
import React, { useState, useEffect}from 'react'
import Search from '../components/Search'
import Card from '../components/Card'
import FoodService from '../services/foodService'

export default function Home() {
    const [foods, setFoods] = useState([])
    const [selectedItem, setSelectedItem] = useState("name")
    const [searchItem, setSearchItem] = useState("")

    useEffect(() => {
        console.log("Search value: ",searchItem)
        console.log("Selected value: ",selectedItem)
        let foodService = new FoodService()
        if(selectedItem === 'name' &&  searchItem !== ""){
            foodService.getByFoodsCategory(searchItem).then(result => setFoods(result.data.data))
        }
        if(selectedItem === 'ingredients' &&  searchItem !== ""){
            foodService.getByFoodsIngredients(searchItem).then(result => setFoods(result.data.data))
        }
    },[searchItem,selectedItem])



    return (
        <div className="container mt-5">

            <div className="container mt-5"><h1> Food Finder</h1></div>
            
            <Search selected={setSelectedItem} search={setSearchItem}/>

            <Card foods={foods}/>
            
        </div>
    )
}

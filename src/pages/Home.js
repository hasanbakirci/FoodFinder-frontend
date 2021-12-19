import React, { useState, useEffect}from 'react'
import Search from '../components/Search'
import Card from '../components/Card'
import FoodService from '../services/foodService'
import SearchForText from '../components/SearchForText'
import SearchForImage from '../components/SearchForImage'

export default function Home() {
    const [foods, setFoods] = useState([])
    const [selectedItem, setSelectedItem] = useState("name")
    const [searchItem, setSearchItem] = useState("")
    const [showImageComp, setShowImageComp] = useState("name")
    const [image, setImage] = useState()

    useEffect(() => {
        console.log("Search value: ",searchItem)
        console.log("Selected value: ",selectedItem)
        setShowImageComp(selectedItem)
        let foodService = new FoodService()
        if(selectedItem === 'name' &&  searchItem !== ""){
            foodService.getByFoodsCategory(searchItem).then(result => setFoods(result.data.data))
        }
        if(selectedItem === 'ingredients' &&  searchItem !== ""){
            foodService.getByFoodsIngredients(searchItem).then(result => setFoods(result.data.data))
        }

    },[searchItem,selectedItem, showImageComp, image])

    function postImage(){
        let foodService = new FoodService()

        console.log("fonksiyon ici ",image);
        const formData = new FormData()
        formData.append('file',image)
        foodService.postImage(formData).then(result => setFoods(result.data.data))
    }


    return (
        <div className="container mt-5">

            <div className="container mt-5"><h1> Food Finder</h1></div>
            
            <Search selected={setSelectedItem}/>
            {
                showImageComp === "image" ? <SearchForImage image={setImage} postImage= {postImage}/> : <SearchForText search={setSearchItem}/>
            }
            
            

            <Card foods={foods}/>
            
        </div>
    )
}

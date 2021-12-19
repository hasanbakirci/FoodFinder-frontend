import axios from "axios";
export default class FoodService{
    getAllFoods(){
        return axios.get("https://localhost:5001/api/Foods")
    }
    getByFoodsCategory(name){
        if(name === ""){
            return null
        }
        return axios.get("https://localhost:5001/api/Foods/SearchCategory/"+name)
    }
    getByFoodsIngredients(ingredient){
        if(ingredient === ""){
            return null
        }
        return axios.get("https://localhost:5001/api/Foods/SearchIngredient/"+ingredient)
    }
    getByDetailFood(id){
        let result = axios.get("https://localhost:5001/api/Foods/Search/"+id)
        return result
    }
    postImage(formData){
        const config = {
            headers: {
            "content-type": "multipart/form-data"
            }
        };
        let result = axios.post("https://localhost:5001/api/Foods/SearchImage/",formData,config)
        return result
    }

}
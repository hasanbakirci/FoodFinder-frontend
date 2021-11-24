import React from 'react'
import { useState, useEffect } from 'react'
import CommentForm from '../components/CommentForm'
import FoodComments from '../components/FoodComments'
import Food from '../components/Food'
import CommentService from '../services/commentService'
import FoodService from '../services/foodService'


export default function Detail(props) {
    const path = props.location.pathname.substring(8)
    const [detailFood, setDetailFood] = useState({})
    const [comments, setComments] = useState([])
    const [emailAddress, setEmailAddress] = useState("")
    const [nickname, setNickname] = useState("")
    const [text, setText] = useState("")
    

    useEffect(() => {
        console.log("id: ",path)
        let foodService = new FoodService()
        foodService.getByDetailFood(path).then(
            result => setDetailFood(result.data.data))
            foodService.getByDetailFood(path).then(
                result => setComments(result.data.data.comments))
    },[path])


    function _addComment(){
        const data = {text:text,email: emailAddress,nickname: nickname, foodId: path}
        let commentService = new CommentService()
        commentService.createComment(data).then(result => { console.log(result)});
    }


    return (
        <div className="container mt-5">

            <Food detailFood={detailFood}/>

            <CommentForm emailAddress={emailAddress} setEmailAddress={setEmailAddress}
                nickname ={nickname} setNickname={setNickname} text={text} setText={setText}
                addComment={_addComment}/>
            
            <FoodComments comments= {comments} />
            
        </div>
    ) 
    
}

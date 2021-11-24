import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import ApproveComments from '../components/ApproveComments'
import Login from '../components/Login'
import CommentService from '../services/commentService'


export default function Admin() {
    const apiUrl = 'https://localhost:5001/api/Users/login'
    const [accessToken, setAccessToken] = useState("")
    const [emailAdress, setEmailAdress] = useState("")
    const [password, setPassword] = useState("")
    const [comments, setComments] = useState([])
    const [deleteItem, setDeleteItem] = useState("")
    const [acceptItem, setAcceptItem] = useState("")
    const [useStatus, setUseStatus] = useState("Yorumları onaylamak için, lütfen giriş yapınız !")

    useEffect(() => {
        let commentService = new CommentService()
        commentService.getByStatusForComments(accessToken).then(result =>setComments(result.data.data))
    },[accessToken,deleteItem,acceptItem,useStatus])

    function _accept(value){
        let commentService = new CommentService()
        const data = {id : value,status: true}
        commentService.changeStatus(accessToken,data)
        console.log(accessToken," || ",value," || ",data)
        setAcceptItem(value)
    }


    function _delete(value){
        let commentService = new CommentService()
        commentService.deleteByComment(accessToken,value)
        console.log(accessToken," || ",value)
        setDeleteItem(value)
    }


    function login(){
        const data = {emailAdress,password}
        console.log(data)
        axios.post(apiUrl,data).then((response) => {
            setAccessToken(response.data.data.token)
            console.log(accessToken)
        })
        setUseStatus("Başarı ile giriş yapıldı.")
    }

    
    return (
        <div className="container mt-5">
            
            <Login emailAdress={emailAdress} setEmailAdress={setEmailAdress} password={password} setPassword={setPassword}login={login} useStatus={useStatus}/>

            <hr style={{ color: "red" , backgroundColor: "black" ,height: 2}}/>

            <ApproveComments comments={comments} accept={_accept} deleted={_delete}/>

        </div>
        
    )
}

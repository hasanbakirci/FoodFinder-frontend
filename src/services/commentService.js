import axios from "axios";
export default class CommentService{
    getByStatusForComments(token){
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        return axios.get('https://localhost:5001/api/Comments/SearchStatus',config)
    }
    deleteByComment(token,id){
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        return axios.delete('https://localhost:5001/api/Comments/'+id,config)
    }
    changeStatus(token,data){
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        return axios.put('https://localhost:5001/api/Comments',data,config)
    }
    createComment(data){
        return axios.post('https://localhost:5001/api/Comments',data)
    }
}
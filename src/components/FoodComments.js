import React from 'react'

export default function FoodComments(props) {

    return (
        <div className="container mt-5" >
                <hr style={{ color: "red", backgroundColor: "black", height: 2 }} />

                <table class="table" >

                    <thead >
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Kullanıcı</th>
                            <th scope="col">Yorum</th>
                        </tr>
                    </thead >
                    <tbody >
                        {
                            props.comments.map(comment => (
                                <tr key={comment.id}>
                                    <th scope="row">-</th>
                                    <td>{comment.nickname}</td>
                                    <td>{comment.text}</td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>
    )
}

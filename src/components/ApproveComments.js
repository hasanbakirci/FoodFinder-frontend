import React from 'react'

export default function ApproveComments({comments, accept,deleted}) {
    
    return (
        <div>
            <table className="table" >
                <thead >
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Kullanıcı</th>
                        <th scope="col">Yorum</th>
                        <th scope="col">Yemek ismi</th>
                        <th scope="col">Durum</th>
                        <th scope="col">#</th>
                    </tr>
                </thead >
                <tbody >
                    {
                        comments.map(comment => (
                            <tr key={comment.id}>
                                <th scope="row">-</th>
                                <td>{comment.nickname}</td>
                                <td>{comment.text}</td>
                                <td>{comment.foodName}</td>
                                <td>{comment.status.toString()}</td>
                                <td><button type="button" className="btn btn-primary btn-sm float-right"
                                    onClick={() => accept(comment.id)}
                                >Onayla</button>
                                </td>
                                <td><button type="button" className="btn btn-primary btn-sm float-right"
                                    onClick={() => deleted(comment.id)}
                                >Sil</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
    )
}

import React from 'react'

export default function CommentForm({emailAddress,setEmailAddress,nickname,setNickname,text,setText,addComment}) {
    
    return (
        <div className="container mt-5">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <input type="email" className="form-control" id="email" placeholder="Email"
                                    value={emailAddress} onChange={e => setEmailAddress(e.target.value)} />
                            </div>
                            <label for="line"></label>
                            <div className="form-group col-md-6">
                                <input type="nickname" class="form-control" id="nickname" placeholder="Nickname"
                                    value={nickname} onChange={e => setNickname(e.target.value)} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="line"></label>
                            <input type="text" className="form-control" id="mesaj" placeholder="Mesaj"
                                value={text} onChange={e => setText(e.target.value)} />
                        </div>
                        <label for="line"></label>
                        <button type="submit" className="btn btn-primary mt-2" onClick={addComment}>Yorum yap</button>
                    </form>
            </div>
    )
}

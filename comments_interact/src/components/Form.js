import React from 'react';


export default function Form({ user }) {



    return (
        <>
            <div className="form-card">
                <div className="content">
                    <div className="card-header-form">
                        <div className="img-user"><img src={ user.image.png } alt="" /></div>
                            <form action="" method="post">
                                <input type="text" name="content" id="content" placeholder="add comment..." />
                            </form>
                        
                        <button className="btn-com">Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}

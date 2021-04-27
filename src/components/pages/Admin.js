import React from 'react';
import { Link } from "react-router-dom";
import Messages from "../functions/Messages";
import Enquiries from "../functions/Booking";

function Admin() {
    
    return (
                    <div className="admin container">
                        <h2>Admin Page</h2>
                        <Link className="admin-btn" to="/create">New hotel +</Link>
                        <h3>Messages</h3>
                        <div className="message-container">
                            <Messages />
                        </div>
                        <h3>Bookings</h3>
                        <div className="message-container">
                            <Enquiries />
                        </div>
                    </div>
    )
}

export default Admin

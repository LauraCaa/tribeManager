import { useState } from "react";
export default function Try1() {
    const [members, setMembers] = useState([
        { id: 1, imgSrc: "https://placehold.co/50x50" },
        { id: 2, imgSrc: "https://placehold.co/50x50" },
        { id: 3, imgSrc: "https://placehold.co/50x50" },
        { id: 4, imgSrc: "https://placehold.co/50x50" },
        { id: 5, imgSrc: "https://placehold.co/50x50" },
        { id: 6, imgSrc: "https://placehold.co/50x50" },
        { id: 7, imgSrc: "https://placehold.co/50x50" },
        { id: 8, imgSrc: "https://placehold.co/50x50" },
        { id: 9, imgSrc: "https://placehold.co/50x50" },
        { id: 10, imgSrc: "https://placehold.co/50x50"}
    ]);
    function handleDelete(id) {
        if(window.confirm('Are you sure you want to delete this member?')){
            setMembers(members.filter(member => member.id !== id));
        }
    };
    return(
        <div id="tribe-container">
            <div id="tribe-header">
                <p>Tribe Members</p>
                <a>See all</a>
            </div>
            <div id="tribe-body">
                {members.map(member => (
                <a key={member.id} className="tribe-member" onClick={() => handleDelete(member.id)}>
                    <img src={member.imgSrc}/>
                    <span>Delete</span>
                </a>
                ))}
            </div>
        </div>
    )
};
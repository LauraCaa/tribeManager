import { useState } from "react";
export default function Try2() {
    const[memebers, setMembers]= useState([
        { id: 1, pictureSrc: "https://placehold.co/50x50" },
        { id: 2, pictureSrc: "https://placehold.co/50x50" },
        { id: 3, pictureSrc: "https://placehold.co/50x50" },
        { id: 4, pictureSrc: "https://placehold.co/50x50" },
        { id: 5, pictureSrc: "https://placehold.co/50x50" },
        { id: 6, pictureSrc: "https://placehold.co/50x50" },
        { id: 7, pictureSrc: "https://placehold.co/50x50" },
        { id: 8, pictureSrc: "https://placehold.co/50x50" },
        { id: 9, pictureSrc: "https://placehold.co/50x50" },
        { id: 10, pictureSrc: "https://placehold.co/50x50" }
    ]);
    function handleDelete(id) {
        if(window.confirm('Are you sure you want to delete this member?')){
            setMembers(memebers.filter(memeber => memeber.id !== id));
        }
    };
    return(
        <div id="tribe-container">
            <div id="tribe-header">
                <p>Tribe members</p>
                <a>See all</a>
            </div>
            <div id="tribe-body">
                {memebers.map((member)=> (
                <a className="member" key={member.id} id={member.id} onClick={()=> handleDelete(member.id)}>
                    <img src={member.pictureSrc} alt="member-picture"/>
                    <span>Delete</span>
                </a>
                ))}
            </div>
        </div>
    )
};
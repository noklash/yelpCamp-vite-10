import React from "react";

export default function AddReview(props){
    // const campReview = props.campReview
    const [campReview, setCampReview] = React.useState({
       "review":""

    })

    function handleCampReview(event){
        const {name, value} = event.target
            setCampReview(prev=>{
                return {
                    ...prev,
                    [name]:value
                }
            })


    }
    return (
        <div className="review-overlay">
            <form>
                <textarea
                    value={campReview.review}
                    onChange={handleCampReview}
                    // placeholder=""
                    name="review"
                />
            </form>

        </div>
    )
}
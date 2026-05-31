import React, { useState } from 'react'
import '../styles/rating.css'

function StarRating() {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    const stars = Array.from({ length: 5 }, (_, i) => i + 1)
    return (
        <div className="star-rating">
            {stars.map((num) => (
                <button
                    key={num}
                    onClick={() => setRating(num)}
                    onMouseOver={() => setHover(num)}
                    onMouseLeave={() => setHover(rating)}
                >
                    <span
                        className={num <= (hover || rating) ? "on" : "off"}
                    >
                        &#9733;
                    </span>
                </button>
            ))}
        </div>
    )
}

export default StarRating

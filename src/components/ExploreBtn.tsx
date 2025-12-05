'use client';
import Image from 'next/image';

export default function ExploreBtn() {
    return (
        <button type="button" id="explore-btn" className="mt-7 mx-auto" onClick={() => console.log("Loading events...")}>
            <a href="#events">
                Explore Events
                <Image
                    src="icons/arrow-down.svg"
                    alt="Down Arrow"
                    width={24}
                    height={24}
                    className="inline-block ml-2"
                />
            </a>
        </button>
    );
}
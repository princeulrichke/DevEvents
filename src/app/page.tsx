import Image from "next/image";
import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";

import { events } from "@/lib/constants";

export default function Home() {
    return (
        <section>
            <h1 className="text-center">
              The hub for Every Dev <br /> Event You Can&apos;t Miss
            </h1>
            <p className="text-center mt-5">
              Hackathons, conferences, meetups, and more - all in one place.
            </p>
            <ExploreBtn />
            <div className="mt-20 space-y-7">
              <h3>
                Featured Events
              </h3>
              <ul className="events">
                {events.map((event) => (
                  <li key={event.slug}>
                    <EventCard {...event} />
                  </li>
                ))}
              </ul>
            </div>
        </section>
    );
}

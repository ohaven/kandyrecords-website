import venues from "@/data/venues.json";
import VenuesClient from "./VenuesClient";
import VenueForm from "@/components/VenueForm";

export const metadata = { title: "Venues & Promoters", description: "A band-reviewed list of venues and promoters: pay, sound, load-in, and who to contact." };

export default function Venues() {
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="kicker">Venues &amp; promoters</span>
          <h1>Rooms worth the drive.</h1>
          <p className="lead">
            Written by bands who played there. Every entry is reviewed before it goes up. Know a room we're missing? <a href="#add">Add it.</a>
          </p>
        </div>
      </section>
      <section className="section-tight">
        <div className="container">
          <VenuesClient venues={venues} />
        </div>
      </section>
      <section className="section section-alt" id="add">
        <div className="container">
          <span className="kicker">Add a venue or promoter</span>
          <h2>Help the next band out.</h2>
          <p className="lead">Tell us what you'd want to know before booking it. We'll review and post it.</p>
          <VenueForm />
        </div>
      </section>
    </>
  );
}

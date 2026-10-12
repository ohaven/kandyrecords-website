import { site } from "@/data/site";

export const metadata = { title: "Contact" };

export default function Contact() {
  const email = site.contactEmail;
  return (
    <>
      <section className="page-head">
        <div className="container">
          <span className="kicker">Contact</span>
          <h1>Say hey.</h1>
          <p className="lead">Tool ideas, guide requests, corrections to a venue listing, or a show you want to put together. One inbox, read by a human.</p>
        </div>
      </section>
      <section className="section-tight">
        <div className="container">
          <div className="grid grid-3">
            <div className="card">
              <h3>Email</h3>
              <p><a href={`mailto:${email}`}>{email}</a></p>
            </div>
            <div className="card">
              <h3>Add a venue</h3>
              <p>Use the form on the venues page so nothing gets missed.</p>
              <div className="card-foot"><a className="btn btn-outline btn-sm" href="/venues#add">Venue form</a></div>
            </div>
            <div className="card">
              <h3>Something broken?</h3>
              <p>Tell us which tool, what you were doing, and what happened. Screenshots help.</p>
              <div className="card-foot"><a className="btn btn-outline btn-sm" href={`mailto:${email}?subject=Bug%20report`}>Report a bug</a></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

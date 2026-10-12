import { site } from "@/data/site";

export default function Signup() {
  if (!site.mailchimpFormAction) return null;
  return (
    <section className="section">
      <div className="container">
        <div className="signup">
          <div>
            <span className="kicker">Mailing list</span>
            <h2 style={{ marginBottom: 8 }}>New tools, new guides, new shows.</h2>
            <p className="muted" style={{ margin: 0 }}>One email when something worth your time goes up. No spam, no selling your address.</p>
          </div>
          <form action={site.mailchimpFormAction} method="post" target="_blank" noValidate>
            <input type="email" name="EMAIL" placeholder="you@band.com" required aria-label="Email address" />
            <div style={{ position: "absolute", left: -5000 }} aria-hidden="true">
              <input type="text" name="b_6d498b37e931acf0609bcde3d_9650f09d77" tabIndex="-1" defaultValue="" />
            </div>
            <button className="btn btn-primary" type="submit">Sign up</button>
          </form>
        </div>
      </div>
    </section>
  );
}

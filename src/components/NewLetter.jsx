import React from "react";

const NewLetter = () => {
  return (
    <div>
      <section className="newsletter h-60">
        <div className="newstext">
          <h2>Newsletter</h2>
          <p>
            Subscribe to Get updates on events, <br />
            volunteer opportunities and other news.
          </p>
        </div>

        <div className="send">
          <form action="">
            <input type="email" name="emailid" placeholder="E-mail" required />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </section>
    </div>
  );
};

export default NewLetter;

import React from "react";
import Banner from "../components/Banner";
import useTitle from "../customHooks/useTitle";

const Blogs = () => {
  useTitle("Blogs Page");
  return (
    <div>
      <Banner>Blogs Page</Banner>
      <div className="space-y-4 my-10 px-4 md:px-0">
        <div className="space-y-3">
          <h4 className="text-blue-950 text-lg font-semibold">
            1. What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h4>
          <p>
            I can keep both the refresh token and the access token in the
            server-side session. Web sessions can be used by the application and
            the server to communicate. Afterward, the token is accessible for
            any queries coming from from server-side programming. It kept
            cookies or a local server. It operates after a user login and
            creates a token. This token indicates if the person is a valid or
            invalid person.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="text-blue-950 text-lg font-semibold">
            2. Compare SQL and NoSQL databases?
          </h4>
          <p>
            The programming language used to communicate with relational
            databases is SQL. In relational databases, data is modeled as
            entries in rows and tables with logical connections between them.
            Oracle, MySQL, Microsoft SQL Server, and PostgreSQL are SQL-like
            databases. And NoSQL lacks relationships. It kept data according to
            the API. Similar to NoSQL (Document: CouchDB and MongoDB, Key-value:
            Redis and DynamoDB).
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="text-blue-950 text-lg font-semibold">
            3. What is express js? What is Nest JS?
          </h4>
          <p>
            ExpressJS: is a nodejs web application framework that I used for
            building web applications. And Also It is used to build a single
            page, multi page web application.
          </p>
          <p>
            NestJS: is a NodeJS framework that helps build server-side
            applications. Nest extends NodeJS frameworks like Express or Fastify
            adding modular organization and a wide range of other libraries to
            take care of repetitive tasks.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="text-blue-950 text-lg font-semibold">
            4. What is MongoDB aggregate and how does it work?
          </h4>
          <p>
            Aggregation is the process of going through various phases with a
            huge collection of documents to process them. Use the MongoDB
            aggregation pipeline (here's a more in-depth tutorial) if you need
            to perform more complicated aggregation. Aggregation pipelines are
            groups of steps that, when used in conjunction with the MongoDB
            query syntax, let you get an aggregated result.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

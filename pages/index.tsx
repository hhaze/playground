export default () => {
  return (
    <div className="pa2">
      <div className="f3 b">
        <i className="fas fa-terminal f3 b"/> Interest
      </div>

      <h3>Language</h3>
      <ul className="list pl0">
        <li>
          <a className="link dim black" href="https://graphql.org/" target="_blank">GraphQL</a>
        </li>
        <ul className="list pl3">
          <li>
            <a className="link dim black" href="https://www.howtographql.com/" target="_blank">How To GraphQL</a>
          </li>
        </ul>
        <li>
          <a className="link dim black" href="https://golang.org/" target="_blank">Go</a>
        </li>
        <li>
          <a className="link dim black" href="https://www.typescriptlang.org/" target="_blank">Typescript</a>
        </li>

        <h3>DB</h3>
        <ul className="list pl0">
          <li>
            <a className="link dim black" href="https://www.mongodb.com/" target="_blank">MongoDB</a>
          </li>
          <li>
            <a className="link dim black" href="https://aws.amazon.com/ko/dynamodb/" target="_blank">DynamoDB</a>
          </li>
          <li>
            <a className="link dim black" href="https://www.postgresql.org/" target="_blank">PostgreSQL</a>
          </li>
        </ul>

        <h3>Framework</h3>
        <ul className="list pl0">
          <li>
            <a className="link dim black" href="https://ko.reactjs.org/" target="_blank">React</a>
          </li>
          <li>
            <a className="link dim black" href="https://nextjs.org/" target="_blank">Next.js</a>
          </li>
        </ul>
      </ul>
    </div>
  )
}
import { useRouteError } from "react-router"

function Error() {
  const err = useRouteError();
  return (
    <div>
        <h1>Oops!</h1>
        <h2>Something went wrong!</h2>
        <h3>{err.status}</h3>
        <h3>{err.statusText}</h3>
    </div>
  )
}

export default Error
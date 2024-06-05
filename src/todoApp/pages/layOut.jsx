import { Outlet, Link, useLocation } from "react-router-dom";

const LayOut = () => {
    const loc = useLocation();
    console.log(loc)
  return (
    <div>
      <hr />
      <h1>LayOut</h1>
      <Link to={`completed`}>completed</Link>
      <br />
      <Link to={-1}>back</Link>
      <hr />
      <Outlet />
      {loc.pathname === '/completed' ?<h2>completed ts</h2>:<h2>all ts</h2>}
    </div>
  );
};
export { LayOut };

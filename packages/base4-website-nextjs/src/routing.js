import RoutingContext from './routing/context';
import withRouter from './routing/withRouter';
import { Link, Router } from './routing/Components';

const redirect = ({
  router,
  res,
  route,
  code = 301,
} = {}) => {
  if (res) {
    // Server-side.
    res.writeHead(code, { Location: route });
    res.end();
  } else if (router) {
    // Client-side.
    router.replaceRoute(route);
  }
};

export {
  Link,
  Router,
  RoutingContext,
  redirect,
  withRouter,
};

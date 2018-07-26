/* Tutorial for this app found here https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm */
import React, {Component} from "react";

/* imports for react-router */
import {
	Route,
	NavLink,
	HashRouter
} from "react-router-dom";

/* my imports */
import Home from "./home";
import Stuff from "./stuff";
import Contact from "./contact";


/* HashRouter is a <router> that uses the hash portion of the URL
 * more at https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/HashRouter.md
 */

 /* NavLink is a special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL
  * more at https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/NavLink.md
  */

  /*
   *
   */

class Main extends Component {
	render() {
		return (
			<HashRouter>
				<div>
			{/* the exact property is VERY important; it makes sure that only being at the root will activate component.. otherwise "/" is a part of every other URL 
			  * for example, if you go to http://website.com/stuff, the "/" and the "/stuff" routes will both be active simultaneously */}
					<h1>Simple SPA</h1>
					<ul className="header">
				{/* these are the URLs that go to the specific view of our webapp */}
						<li><NavLink exact to="/">Home</NavLink></li>
						<li><NavLink exact to="/stuff">Stuff</NavLink></li>
						<li><NavLink exact to="/contact">Contact</NavLink></li>
					</ul>
					<div className="content">
				{/* we match the URL with the content by using a Route component */}
				{/* when a route is active, the component prop gets loaded */}
						<Route exact path="/" component={Home}/>
						<Route exact path="/stuff" component={Stuff}/>
						<Route exact path="/contact" component={Contact}/>
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default Main;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var side_nav_1 = require("components/side-nav");
var react_redux_1 = require("react-redux");
var navigation_1 = require("@/data/selectors/navigation");
var state_1 = require("@/data/objects/state");
require("components/main-page/main-page.less");
// Import Page Files
var index_1 = require("@/components/main-side-nav-pages/components/index");
var index_2 = require("components/main-side-nav-pages/settings/index");
var index_3 = require("components/main-side-nav-pages/help/index");
function MainPage() {
    var currentPage = (0, react_redux_1.useSelector)(navigation_1.getCurrentPage);
    var renderPageContent = function () {
        switch (currentPage) {
            case state_1.Pages.COMPONENTS:
                return <index_1.default />;
            case state_1.Pages.SETTINGS:
                return <index_2.default />;
            case state_1.Pages.HELP:
                return <index_3.default />;
            case state_1.Pages.LOGIN:
                return;
        }
    };
    return (<div className="main-page">
			<side_nav_1.SideNav />
			<div className="page-content">
				{renderPageContent()}
			</div>
		</div>);
}
exports.default = MainPage;

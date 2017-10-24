class Route {
    constructor(url, parent = null) {
        this.url = url;
        if (parent && !(parent instanceof Route)) {
            throw new Error('Invalid parent');
        }
        this.parent = parent;
    }

    getParentUrl() {
        return this.parent ? this.parent.getUrl() : '';
    }

    getLastSegment() {
        return this.url.substr(this.url.lastIndexOf('/'));
    }

    getUrl() {
        return this.getParentUrl() + this.url;
    }

    getSlash() {
        return '/';
    }

    getRootRelativeUrl(root) {
        if (root instanceof Route) {
            return this.getUrl().substr(root.getUrl().length);
        } else {
            return this.getUrl();
        }
    }
}

const baseRoute = new Route('/v0');
// menu
const menuRoute = new Route('/menu', baseRoute);

module.exports = {
    menuRoute
};
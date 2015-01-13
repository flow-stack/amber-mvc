define([
    'amber/devel',
    './deploy',
    // --- packages used only during development begin here ---
    'amber-attic/IDE',
    'minimapless/MiniMapless-Tests',
    'amber-mvc/MVC-Iterables',
    'amber-mvc/MVC-Routeables',
    'amber-mvc/App'
    // --- packages used only during development end here ---
], function (amber) {
    return amber;
});

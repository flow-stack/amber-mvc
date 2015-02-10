define([
    'amber/devel',
    './deploy',
    // --- packages used only during development begin here ---
    'amber-minimal-ide/MinimalIDE',
    'minimapless/MiniMapless-Tests',
    'amber-mvc/App'
    // --- packages used only during development end here ---
], function (amber) {
    return amber;
});

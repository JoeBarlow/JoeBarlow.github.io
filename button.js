function LoadPage(pageTag) {

    switch (pageTag)
    {
        //Case 0 reserved for home page
        case 0:
            window.location.assign("../index.html")
            break;

        case 1:
            window.location.assign("Pages/Project_TerrainGenerator.html");
            break;

        case 2:
            window.location.assign("Pages/Project_FreeflowCombatSystem.html");
            break;

        case 3:
            window.location.assign("Pages/Project_CrystalCasters.html");
            break;

        case 4:
            window.location.assign("Pages/Project_KitchenNightmare.html");
            break;

        case 5:
            window.location.assign("Pages/Project_TheExperiment.html");
            break;

        case 6:
            window.location.assign("Pages/Project_TreasureIsland.html");
            break;
    }
}

function LoadGitHub() {
    window.location.assign("https://github.com/JoeBarlow");
}

function LoadLinkedIn() {
    window.location.assign("https://www.linkedin.com/in/joebarl0w/");
}

function LoadCV(bannerDepth) {
    if (bannerDepth == 0)
        window.location.assign("Joe Barlow CV.pdf");
    else
        window.location.assign("../Joe Barlow CV.pdf");
}
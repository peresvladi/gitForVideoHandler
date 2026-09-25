function definingTheHierarchicalLeveloftheDirectory() {
    let startDirectory = ""
    let startDir = "../"
    let directoryPath = window.location.pathname;
    ar = [];
    ar = directoryPath.split("/");
    let i = 2;
    while (ar[ar.length - i] !== "EDUCATION") {
        startDirectory = startDirectory + startDir;
        i++;
    }
    return startDirectory;
}

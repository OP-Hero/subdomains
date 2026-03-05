

(function () {
    addLinks();
})();




function addLinks() {
    addLink("");
    addLink("-----------------------------");
    addLink("List of official domains");
    addLink("-----------------------------");
    addLink("");
    addLink("");
    addLink("ophero.uk");
    addLink("www.ophero.uk");
    addLink("");
    addLink("-----------------------------");
    addLink("List of official <i>minecraft<br>server</i> domains");
    addLink("-----------------------------");
    addLink("cabin.ophero.uk");
    addLink("create.ophero.uk");
    addLink("landing.ophero.uk");
    addLink("mc.ophero.uk");
    addLink("wtmm.ophero.uk");
    addLink("");
    addLink("-----------------------------");
    addLink("List of official <i>hytale<br>server</i> domains");
    addLink("-----------------------------");
    addLink("hytale.ophero.uk");
    addLink("");
    addLink("-----------------------------");
    addLink("Any subdomains not listed<br>here are given to friends<br>and not official.");
    addLink("-----------------------------");
    addLink("note: the subdomain name and<br>content is their own to<br> manage. Therefore will i <i>NOT</i><br>take <i>ANY</i> responsibillity for<br>neither the subdomain name<br>nor it's content.");
    addLink("-----------------------------");
    addLink("");
    addLink("");
    addLink("");
    addLink("");
    addLink("");
}


function addLink(text) {
    let card = document.getElementById("links");
    let linkElem = document.createElement("a");
    
    linkElem.innerHTML = text;
    linkElem.classList.add("link");
    let br = document.createElement("br");
    
    card.appendChild(linkElem);
    card.appendChild(br);
    card.appendChild(br);
}

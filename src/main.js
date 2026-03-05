

(function () {
    addLinks();
})();




function addLinks() {
    addLink("");
    addLink("----------------");
    addLink("");
    addLink("List&thinsp;&thinsp;&thinsp;of&thinsp;&thinsp;&thinsp;official&thinsp;&thinsp;&thinsp;domains");
    addLink("");
    addLink("----------------");
    addLink("");
    addLink("ophero.uk");
    addLink("");
    addLink("www.ophero.uk");
    addLink("");
    addLink("----------------");
    addLink("");
    addLink("List&thinsp;&thinsp;&thinsp;of&thinsp;&thinsp;&thinsp;official&thinsp;&thinsp;&thinsp;<i>minecraft<br>server</i>&thinsp;&thinsp;&thinsp;domains");
    addLink("");
    addLink("----------------");
    addLink("");
    addLink("cabin.ophero.uk");
    addLink("");
    addLink("create.ophero.uk");
    addLink("");
    addLink("landing.ophero.uk");
    addLink("");
    addLink("mc.ophero.uk");
    addLink("");
    addLink("wtmm.ophero.uk");
    addLink("");
    addLink("----------------");
    addLink("");
    addLink("List&thinsp;&thinsp;&thinsp;of&thinsp;&thinsp;&thinsp;official&thinsp;&thinsp;&thinsp;<i>hytale<br>server</i>&thinsp;&thinsp;&thinsp;domains");
    addLink("");
    addLink("----------------");
    addLink("");
    addLink("hytale.ophero.uk");
    addLink("");
    addLink("----------------");
    addLink("");
    addLink("Any&thinsp;&thinsp;&thinsp;subdomains<br>not&thinsp;&thinsp;&thinsp;listed&thinsp;&thinsp;&thinsp;here<br>are&thinsp;&thinsp;&thinsp;given&thinsp;&thinsp;&thinsp;to<br>friends&thinsp;&thinsp;&thinsp;and&thinsp;&thinsp;&thinsp;not&thinsp;&thinsp;&thinsp;official.");
    addLink("");
    addLink("----------------");
    addLink("");
    addLink("note:&thinsp;&thinsp;&thinsp;the&thinsp;&thinsp;&thinsp;subdomain&thinsp;&thinsp;&thinsp;name<br>and&thinsp;&thinsp;&thinsp;content&thinsp;&thinsp;&thinsp;is&thinsp;&thinsp;&thinsp;their&thinsp;&thinsp;&thinsp;own&thinsp;&thinsp;&thinsp;to&thinsp;&thinsp;&thinsp;<br>manage.<br>Therefore&thinsp;&thinsp;&thinsp;will&thinsp;&thinsp;&thinsp;i<br><i>NOT</i>&thinsp;&thinsp;&thinsp;take&thinsp;&thinsp;&thinsp;<i>ANY</i><br>responsibillity<br>for&thinsp;&thinsp;&thinsp;neither&thinsp;&thinsp;&thinsp;the<br>subdomain's&thinsp;&thinsp;&thinsp;name<br>nor&thinsp;&thinsp;&thinsp;it's<br>content.");
    addLink("");
    addLink("----------------");
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

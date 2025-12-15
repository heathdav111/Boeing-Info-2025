const hotspots = document.querySelectorAll(".hotspot");
const infoPanels = document.querySelectorAll(".hotspot-info");

hotspots.forEach(hotspot => {
    hotspot.addEventListener("click", () => {

    
        infoPanels.forEach(panel => {
            panel.classList.remove("active");
        });

        const targetId = hotspot.getAttribute("data-target");
        const targetPanel = document.getElementById(targetId);

        if (targetPanel) {
            targetPanel.classList.add("active");
            targetPanel.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    });
});


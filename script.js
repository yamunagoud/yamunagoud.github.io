const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {

            navLinks.forEach(link =>
                link.classList.remove("active")
            );

            document
                .querySelector(`nav a[href="#${entry.target.id}"]`)
                ?.classList.add("active");
        }

    });

}, {
    rootMargin: "-120px 0px -55% 0px",
    threshold: 0
});

sections.forEach(section => observer.observe(section));
/* ==================================================
   TERMINAL TYPEWRITER
================================================== */

const terminal = document.getElementById("terminal-output");

if (terminal) {

    const lines = [

        { text: "$ whoami", green: true },

        { text: "" },

        { text: "Vanga Yamuna" },

        { text: "" },

        { text: "Application Security Professional" },

        { text: "" },

        { text: "----------------------------------------" },

        { text: "" },

        { text: "Loading Skills...", green: true },

        { text: "" },

        { text: "✔ Web Application Security" },

        { text: "✔ Network Penetration Testing" },

        { text: "✔ Vulnerability Assessment" },

        { text: "✔ Security Research" },

        { text: "✔ Malware Analysis" },

        { text: "✔ Active Directory Security" },

        { text: "" },

        { text: "----------------------------------------" },

        { text: "" },

        { text: "Status : Open to Opportunities" }

    ];

    let lineIndex = 0;

    function startTerminal() {

        terminal.innerHTML = "";

        lineIndex = 0;

        typeNextLine();

    }

    function typeNextLine() {

        if (lineIndex >= lines.length) {

            const prompt = document.createElement("div");

            prompt.innerHTML =
                '<span class="terminal-green">$</span> <span class="cursor">█</span>';

            terminal.appendChild(prompt);

            return;

        }

        const line = lines[lineIndex];

        const div = document.createElement("div");

        terminal.appendChild(div);

        let charIndex = 0;

        function typeCharacter() {

            if (charIndex < line.text.length) {

                const currentText = line.text.substring(0, charIndex + 1);

                if (line.green) {

                    div.innerHTML =
                        `<span class="terminal-green">${currentText}</span>`;

                } else {

                    div.textContent = currentText;

                }

                charIndex++;

                terminal.scrollTop = terminal.scrollHeight;

                setTimeout(typeCharacter, 30);

            }

            else {

                lineIndex++;

                const pause = line.green ? 600 : 180;

                setTimeout(typeNextLine, pause);

            }

        }

        typeCharacter();

    }

    startTerminal();

    setInterval(startTerminal, 15000);

}
describe("Protocol Toggle", () => {
    let toggle;

    beforeEach(() => {
        document.body.innerHTML = '<button id="toggle"></button>';
        toggle = document.querySelector("#toggle");
    });

    it("should add 'https' class if the page is loaded with https protocol", () => {
        Object.defineProperty(window, "location", {
            value: { protocol: "https:" },
            writable: true,
        });

        window.dispatchEvent(new Event("load"));

        expect(toggle.classList.contains("https")).toBe(true);
    });

    it("should add 'http' class if the page is loaded with http protocol", () => {
        Object.defineProperty(window, "location", {
            value: { protocol: "http:" },
            writable: true,
        });

        window.dispatchEvent(new Event("load"));

        expect(toggle.classList.contains("http")).toBe(true);
    });

    it("should toggle the protocol when clicked", () => {
        Object.defineProperty(window, "location", {
            value: { protocol: "https:" },
            writable: true,
        });

        window.dispatchEvent(new Event("load"));
        toggle.click();

        expect(toggle.protocol).toBe("http:");
    });
});
         

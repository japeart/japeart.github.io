class Tag extends HTMLElement {
    connectedCallback() {
        const colour = this.getAttribute('colour');
        const text = this.getAttribute('text');

        this.innerHTML = `
        <div class="tag">
            <div class="gameplay">
                <p style="border-radius: 10px; background-color: ${colour}; display: block;">${text}</p>
            </div>
        </div>
        `;
    }
}

customElements.define("tag-element", Tag);
class Tag extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="tag">
            <div class="gameplay">
                <p style="border-radius: 10px; background-color: ${this.colour}">${this.text}</p>
            </div>
        </div>
        `;
    }
}

class TagGameplay extends Tag {
    constructor() {
        super();
        this.text = "Gameplay Programmer";
        this.colour = "salmon";
    }
}

class TagVR extends Tag {
    constructor() {
        super();
        this.text = "VR";
        this.colour = "blue";
    }   
}

class TagCSharp extends Tag {
    constructor() {
        super();
        this.text = "C#";
        this.colour = "orange";
    }
}

class TagUI extends Tag {
    constructor() {
        super();
        this.text = "UI";
        this.colour = "purple";
    }
}

class TagRendering extends Tag {
    constructor() {
        super();
        this.text = "Rendering";
        this.colour = "red";
    }
}

class TagOptimisation extends Tag {
    constructor() {
        super();
        this.text = "Optimisation";
        this.colour = "gold";
    }
}

customElements.define("tag-gameplay", TagGameplay);
customElements.define("tag-vr", TagVR);
customElements.define("tag-csharp", TagCSharp);
customElements.define("tag-ui", TagUI);
customElements.define("tag-rendering", TagRendering);
customElements.define("tag-optimisation", TagOptimisation);
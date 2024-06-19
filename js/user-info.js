class UserInfo extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode : "closed" });
    }

    static get observedAttributes() {
        return [ "name", "email" ];
    }

    get name() {
        return this.getAttribute("name");
    }

    get email() {
        return this.getAttribute("email");
    }

    connectedCallback() {
        // console.log("connectedCallback", this)
        this.addEventListener("mouseover", function () {

        });
        this.render();
    }

    render() {
        this._shadowRoot.innerHTML = `
            <div>
                <p>Name: ${this.name}</p>
                <p>Email: ${this.email}</p                
            </div>
        `;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }
}

customElements.define("user-info", UserInfo);



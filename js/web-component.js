class UserInfo extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode : "closed" });
    }

    static get observedAttributes() {
        return [ "name", "email", "address" ];
    }

    get address() {
        const address = JSON.parse(this.getAttribute("address"));
        return address;
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
                <p>Email: ${this.email}</p>
                <p>Address:</p>
                <ul>
                    <li>${this.address?.number} ${this.address?.street}</li>
                    <li>${this.address?.city}, ${this.address?.postal}</li>
                </ul>
            </div>
        `;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }
}

customElements.define("user-info", UserInfo);



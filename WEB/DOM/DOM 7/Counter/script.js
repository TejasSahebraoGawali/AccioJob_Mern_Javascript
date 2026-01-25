document.addEventListener("DOMContentLoaded", function () {
    let counter1 = {
        count: 0,
        counterElement: document.getElementById("counterRef"),

        increment() {
            console.log(this);
            console.log("increment called");

            this.count++;
            this.renderCount();
        },

        decrement() {
            console.log("decrement called");

            this.count--;
            this.renderCount();
        },

        renderCount() {
            this.counterElement.textContent = this.count;
        },

        registerEvents() {
            console.log("register events called");

            document.getElementById("increment").addEventListener("click", () => {
                this.increment();
            })
            document.getElementById("decrement").addEventListener("click", () => {
                this.decrement();
            });
        }
    }

    
    let counter2 = {
        count: 0,
        counterElement: document.getElementById("counterRef2"),

        increment() {
            console.log(this);
            console.log("increment called");

            this.count++;
            this.renderCount();
        },

        decrement() {
            console.log("decrement called");

            this.count--;
            this.renderCount();
        },

        renderCount() {
            this.counterElement.textContent = this.count;
        },

        registerEvents() {
            console.log("register events called");

            document.getElementById("increment2").addEventListener("click", () => {
                this.increment();
            })
            document.getElementById("decrement2").addEventListener("click", () => {
                this.decrement();
            });
        }
    }

    counter1.registerEvents();
    counter2.registerEvents();
});
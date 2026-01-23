document.addEventListener('DOMContentLoaded', function () {
    const formElement = document.querySelector("#user-info");
    formElement.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log({ event });

        // const firstName = document.querySelector("#firstName");
        // const lastName = document.querySelector("#lastName");
        // alert(`The name is ${firstName.value} ${lastName.value}`);


        // there is class name 'FormData' - using this class we can access all the input fields.
        let formdata = new FormData(formElement);
        const firstName = formdata.get("firstName");
        const lastName = formdata.get("lastName");
        // alert(`The name is ${firstName} ${lastName}`);
        // here when we call the values stored in the varibales we dont need to specify the .value method in there

        // console.log(formdata.values());

        for (let value of formdata.values()) {
            console.log(value);
        }
        for (let key of formdata.keys()) {
            console.log(key);
        }
        for (let [key, value] of formdata.entries()) {
            console.log({ key, value });
        }


        // Different ways of reading checkbox and radio input varlues
        document.querySelector("input[name='gender']");
        document.querySelector("input[name='gender']:checked");

        document.querySelectorAll("input[name='fruit']");
        document.querySelectorAll("input[name='fruit']:checked");

        document.querySelector("input[name='gender']:checked").value;
        document.querySelectorAll("input[name='fruit']:checked")
            .forEach(element => {
                console.log(element.value);
            });
    });
});
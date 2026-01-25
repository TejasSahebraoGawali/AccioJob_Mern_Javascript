document.addEventListener("DOMContentLoaded", function () {

    let app = {
        students: [
            {
                name: "Jacob",
                age: 18,
                gender: "male"
            },
            {
                name: "Jenny",
                age: 19,
                gender: "female"
            }
        ],

        renderStudents() {
            const containerList = document.getElementById("list-container");

            const list = document.createElement(ul);

            for(let student of this.students) {
                
            }
        }
    }
});
$(document).ready(function () {
    /*
    TODO:   The code below attaches a `keyup` event to `#number` text field.
            The code checks if the current number entered by the user in the
            text field does not exist in the database.

            If the current number exists in the database:
            - `#number` text field background color turns to red
            - `#error` displays an error message `Number already registered`
            - `#submit` is disabled

            else if the current number does not exist in the database:
            - `#number` text field background color turns back to `#E3E3E3`
            - `#error` displays no error message
            - `#submit` is enabled
    */
    $("#number").keyup(function () {
        // your code here
        var input = this;
        var url = `/getCheckNumber?q=${input.value}`;

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // validate #number.value

                if (!xhr.response) {
                    document.querySelector("#error").innerHTML = "";
                    input.style.backgroundColor = "#e3e3e3";
                    document.querySelector("#submit").disabled = false;
                } else {
                    var response = JSON.parse(xhr.response);
                    input.style.backgroundColor = "red";
                    document.querySelector("#error").innerHTML =
                        "Number already registered";
                    document.querySelector("#submit").disabled = true;
                }
            }
        };
        xhr.open("GET", url, true);
        xhr.send();
    });

    /*
    TODO:   The code below attaches a `click` event to `#submit` button.
            The code checks if both text fields are not empty. The code
            should communicate asynchronously with the server to save
            the information in the database.

            The new contact should be displayed immediately, and without
            refreshing the page, after the values are saved in the database.

            The name and the number fields are reset to empty values.
    */
    $("#submit").click(function () {
        // your code here
        var name = document.querySelector("#name");
        var number = document.querySelector("#number");

        if (name.value != "" && number.value != "") {
            var url = `/add?name=${name.value}&number=${number.value}`;
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.send();
        }
    });

    /*
    TODO:   The code below attaches a `click` event to `.remove` buttons
            inside the `<div>` `#contacts`.
            The code deletes the specific contact associated to the
            specific `.remove` button, then removes the its parent `<div>` of
            class `.contact`.
    */
    $("#contacts").on("click", ".remove", function () {
        // your code here
    });
});

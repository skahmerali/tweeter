
// const url = "http://localhost:3000";

function signup() {
    axios({
        method: 'post',
        // url :"https://login-re-password.herokuapp.com/signup",
        url: 'http://localhost:3000/signup',
        data: {
            name: document.getElementById("signup-name").value,
            email: document.getElementById("signup-email").value,
            password: document.getElementById("signup-password").value,
            phone: document.getElementById("signup-number").value,
            gender: document.getElementById("signup-gender").value
        },
    }).then((response) => {
        if (response.data.status === 200) {
            alert(response.data.message)
            location.href = "./login.html"
        }
        else {
            alert(response.data.message);
        }
    }).catch((error) => {
        console.log(error);
    });

    return false
}



function userLogin() {
    axios({
        method: 'post',
        url: 'http://localhost:3000/login',
        // url :"https://login-re-password.herokuapp.com/login",
        data: {
            email: document.getElementById('login-email').value,
            password: document.getElementById('login-password').value,
        },
        withCredentials: true
    }).then((response) => {
        if (response.data.status === 200) {
            console.log(response.data.message);
            alert(response.data.message);
            window.location.href = "./chat app/dashbord/html"
            return
        } else {
            alert(response.data.message)
        }
    }, (error) => {
        console.log(error);
    });

    return false

}
// userEmail= document.getElementById("login-email").value;
// userPassowrd= document.getElementById("login-password").value;

// console.log(obj);
// const Http = new XMLHttpRequest();
// Http.open("POST", url + "/login");
// Http.setRequestHeader("Content-Type", "application/json");
// Http.send(JSON.stringify(obj))
// Http.onreadystatechange = (e) => {
//     if (Http.onreadystate === 4) {
//         let jsonRes = json.parse(Http.responseText)
//         console.log(jsonRes);
//         if (jsonRes === 200) {
//             alert(jsonRes.message);
//             alert("login succesfully")
//         }
//         else {
//             alert(jsonRes.message)
//             alert("sorry! invalid Password or Emmail")
//         }
//         window.location.href = "profile.html"
//     }

// }
// return false


// }



function getProfile() {
    axios({
        method: 'get',
        url: 'http://localhost:3000/profile',
        // url :"https://login-re-password.herokuapp.com/profile",
        credentials: 'include',
    }).then((response) => {
        console.log(response.data.profile.name);
        document.getElementById('pName').innerHTML = response.data.profile.name
        // document.getElementById('print-username').value = response.data.profile.name;
        // document.getElementById('print-email').value = response.data.profile.email;
        // document.getElementById('print-number').value = response.data.profile.phone;
        // document.getElementById('print-gender').value = response.data.profile.gender;
    
    }, (error) => {
        console.log(error.message);
        location.href = "./login.html"
    });
    return false
}





function post() {
    axios({
        method: 'post',
        url: 'https://twitter-jahan.herokuapp.com/tweet',
        credentials: 'include',
        data: {
            userName: document.getElementById('pName').innerHTML,
            tweet: document.getElementById('tweet').value,
        },
    }).then((response) => {
        console.log(response.data.data.message);
    }, (error) => {
        console.log(error.message);
    });
    document.getElementById('tweet').value = "";
    return false
}










function logout() {
    axios({
        method: 'post',
        url: 'http://localhost:3000/logout',
        // url:'https:login-re-password.herokuapp.com/logout'
    }).then((response) => {
        console.log(response);
        location.href = "./login.html"
    }, (error) => {
        console.log(error);
    });
    return false
}

function forget() {
    axios({
        method: 'post',
        url: "http://localhost:3000/forget-password",
        // url:'https:login-re-password.herokuapp.com/forget',
        data: {
            email: document.getElementById("email-forget").value,
        },
        withCredentials: true
    }).then((response) => {
        if (response.data.status === 200) {
            console.log(response.data.message);
            alert(response.data.message);
            window.location.href = "./forget_code.html"
            return
        } else {
            alert(response.data.message)
        }
    }, (error) => {
        console.log(error);
    });

    return false;

}

function ChangePassowd() {
    axios({
        method: 'post',
        url: "http://localhost:3000/forget-password-step2",
        // url:'https:login-re-password.herokuapp.com/otpPassword',
        data: {
            email: document.getElementById("confirm-email").value,
            otp: document.getElementById("confirm-password").value,
            newPassword: document.getElementById("confirm-otp").value,
        },
        withCredentials: true
    }).then((response) => {
        if (response.data.status === 200) {
            console.log(response.data.message);
            alert(response.data.message);
            window.location.href = "./login.html"
            return
        } else {
            alert(response.data.message)
        }
    }, (error) => {
        console.log(error);
    });
    return false;

}

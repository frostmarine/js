var email = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/; 

if (event.value!=""){if (!email.test(event.value)){event.rc=false;app.alert("\"" + event.value + "\" bukan format email yang valid.");};};

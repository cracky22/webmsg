function encrypt_message() {
  document.getElementById("p1").style.visibility = "visible";
  document.getElementById("encrypt_button").style.transition = "1s";
  document.getElementById("decrypt_button").style.transition = "1s";
  document.getElementById("encrypt_button").classList.add("inactive");
  document.getElementById("decrypt_button").classList.add("disabled");
  document.getElementById("encrypt_button").style.textDecoration = "underline";
  checkInternetConnection("https://cracky.ddns.net/?checkConnectionStatus");
  setProgress(12);
  sessionStorage.removeItem("e");
  sessionStorage.removeItem("d");

  if (document.getElementById("inputfield").value !== "") {
    setProgress(33);
    inputfieldValue = document.getElementById("inputfield").value;
    textToEncrypt_2 = replaceUmlauts(inputfieldValue);
    textToEncrypt = utf8ToBase64(textToEncrypt_2);
    url = `https://cracky.ddns.net/redir/msg/web/e/${textToEncrypt}`;
    _ctc = sessionStorage.getItem("ctc");
    localScript = document.getElementById("localScript" + _ctc);
    localScript.src = url;
    setTimeout(() => {
      setProgress(66);
      setTimeout(() => {
        encrypted_message = sessionStorage.getItem("e");
        encrypted_message_6 = utf8ToBase64(encrypted_message);
        document.getElementById("inputfield").value = encrypted_message_6;
        hf(80);
        setProgress(100);

        //encryption done, check if error occured
        const e_notAllowed = ["bnVsbA=="];
        const e_inputValue = document.getElementById("inputfield").value;

        if (!e_notAllowed.includes(e_inputValue)) {
          //alles okay
          setTimeout(() => {
            setProgress(0);
            document.getElementById("p1").style.visibility = "hidden";
            sessionStorage.removeItem("e");

            setTimeout(() => {
              value = copy();

              if (localStorage.getItem("autoclear") === "true") {
                setTimeout(() => {
                  do_cleanup();
                }, 100);
              }
            }, 100);
          }, 300);
          document
            .getElementById("encrypt_button")
            .classList.remove("inactive");
          document
            .getElementById("decrypt_button")
            .classList.remove("disabled");
          document.getElementById("encrypt_button").style.textDecoration =
            "none";
          document.getElementById("clearButton").classList.add("clearAnim");
        } else {
          setProgress(0);
          document.getElementById("p1").style.visibility = "hidden";
          errmsg = "error, please clear and retry!";
          document.getElementById("inputfield").value = errmsg;
          document
            .getElementById("encrypt_button")
            .classList.remove("inactive");
          document
            .getElementById("decrypt_button")
            .classList.remove("disabled");
          document.getElementById("encrypt_button").style.textDecoration =
            "none";
        }
      }, 750);
    }, 780);
  } else {
    setProgress(0);
    document.getElementById("p1").style.visibility = "hidden";
    document.getElementById("encrypt_button").classList.remove("inactive");
    document.getElementById("decrypt_button").classList.remove("disabled");
    document.getElementById("encrypt_button").style.textDecoration = "none";
  }
}

function decrypt_message() {
  document.getElementById("p1").style.visibility = "visible";
  document.getElementById("encrypt_button").style.transition = "1s";
  document.getElementById("decrypt_button").style.transition = "1s";
  document.getElementById("decrypt_button").classList.add("inactive");
  document.getElementById("encrypt_button").classList.add("disabled");
  document.getElementById("decrypt_button").style.textDecoration = "underline";
  checkInternetConnection("https://cracky.ddns.net/?checkConnectionStatus");
  setProgress(12);
  sessionStorage.removeItem("e");
  sessionStorage.removeItem("d");

  if (document.getElementById("inputfield").value !== "") {
    setProgress(33);
    textToDecrypt = document.getElementById("inputfield").value;

    try {
      textToDecrypt_6 = base64ToUtf8(textToDecrypt);
      textToDecrypt_ = utf8ToBase64(textToDecrypt_6);

      if (localStorage.getItem("allowDebug") === "true") {
        findInvalidCharacters(textToDecrypt);
        findInvalidCharacters(textToDecrypt_6);
        findInvalidCharacters(textToDecrypt_);
      }
    } catch (e) {
      if (e instanceof DOMException) {
        if (e instanceof DOMException) {
          setTimeout(() => {
            setProgress(0);
            errmsg = "error, please check the input and retry!";
            document.getElementById("inputfield").value = errmsg;
            document.getElementById("p1").style.visibility = "hidden";
            document.getElementById("decrypt_button").classList.remove("inactive");
            document.getElementById("encrypt_button").classList.remove("disabled");
            document.getElementById("decrypt_button").style.textDecoration ="none";
          }, 100);
        } else if (
          e.name === "DOMException" &&
          [e.code === 22, e.code === 101].includes(e.index)
        ) {
          errmsg = "error, please check the input and retry!";
          document.getElementById("inputfield").value = errmsg;
          setProgress(0);
          document.getElementById("p1").style.visibility = "hidden";
          document.getElementById("decrypt_button").classList.remove("inactive");
          document.getElementById("encrypt_button").classList.remove("disabled");
          document.getElementById("decrypt_button").style.textDecoration =
            "none";
        } else {
          throw e;
        }
      } else {
        throw e;
      }
    }
    document.getElementById("decrypt_button").classList.add("inactive");
    document.getElementById("encrypt_button").classList.add("disabled");
    document.getElementById("decrypt_button").style.textDecoration = "underline";
    url = `https://cracky.ddns.net/redir/msg/web/d/${textToDecrypt_}`;
    _ctc = sessionStorage.getItem("ctc");
    localScript = document.getElementById("localScript" + _ctc);
    localScript.src = url;
    localScript.onload = () => {};
    setTimeout(() => {
      setProgress(60);

      setTimeout(() => {
        decrypted_message = sessionStorage.getItem("d");
        setProgress(75);

        document.getElementById("inputfield").value = decrypted_message;
        hf(80);
        setProgress(100);

        setTimeout(() => {
          sessionStorage.removeItem("d");
          document.getElementById("clearButton").classList.add("clearAnim");
          check = document.getElementById("inputfield").value;

          if (check === "" || check === "null") {
            errmsg = "error, please clear and retry!";
            document.getElementById("inputfield").value = errmsg;
            setProgress(0);
            document.getElementById("p1").style.visibility = "hidden";
            document.getElementById("decrypt_button").classList.remove("inactive");
            document.getElementById("encrypt_button").classList.remove("disabled");
            document.getElementById("decrypt_button").style.textDecoration = "none";
          } else {
            setProgress(0);
            document.getElementById("p1").style.visibility = "hidden";
            document.getElementById("decrypt_button").classList.remove("inactive");
            document.getElementById("encrypt_button").classList.remove("disabled");
            document.getElementById("decrypt_button").style.textDecoration = "none";
          }

          setTimeout(() => {
            recheck = document.getElementById("inputfield").value;
            if (recheck === "" || recheck === "null") {
              errmsg = "error, please clear and retry!";
              document.getElementById("inputfield").value = errmsg;
              setProgress(0);
              document.getElementById("p1").style.visibility = "hidden";
            } else {
              setProgress(0);
              document.getElementById("p1").style.visibility = "hidden";
            }
          }, 100);
        }, 250);
      }, 750);
    }, 700);
  } else {
    setProgress(0);
    document.getElementById("p1").style.visibility = "hidden";
    document.getElementById("decrypt_button").classList.remove("inactive");
    document.getElementById("encrypt_button").classList.remove("disabled");
    document.getElementById("decrypt_button").style.textDecoration = "none";
  }
}

function utf8ToBase64(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

function base64ToUtf8(base64) {
  return decodeURIComponent(escape(atob(base64)));
}

function replaceUmlauts(str) {
  const replacements = {
    ä: "ae",
    ö: "oe",
    ü: "ue",
    Ä: "Ae",
    Ö: "Oe",
    Ü: "Ue",
    ß: "ss",
  };
  let umlautCount = 0;
  const replacedStr = str
    .split("")
    .map((char) => {
      if (replacements[char]) {
        umlautCount++;
        return replacements[char];
      }
      return char;
    })
    .join("");
  return replacedStr;
}

function copy() {
  if (document.getElementById("inputfield").value !== "") {
    textarea = document.getElementById("inputfield");
    textarea.select();
    textarea.setSelectionRange(0, 9999);
    document.execCommand("copy");
    if (localStorage.getItem("autoclear") === "true") {
      do_cleanup();
    }
  }
}

function checkInternetConnection(url) {
  fetch(url, { mode: "no-cors" })
    .then(() => {
      console.log("Internetverbindung vorhanden.");
    })
    .catch(() => {
      console.log("Keine Internetverbindung.");
      setProgress(0);
      var offlineHtml = `<br><p id="connPrompt" onclick="location.reload();"
        style="width: 285px!important; border-radius: 8px!important; padding: 1px; color: white;" 
        class="errPrompt">Du bist nicht mit dem Internet verbunden!<br>Bitte stelle eine Internetverbindung her und versuche es erneut. 
        &nbsp;&nbsp;&nbsp;&nbsp;<small style="font-family: monospace;">ConnErr408</small>
        <ic style="float: right; margin-right: 2px;">🛜</ic></p>`;
      document.getElementById("activatePrompt").innerHTML = offlineHtml;
      if (localStorage.getItem("darkmode") !== "true") {
        document.getElementById("connPrompt").style.backgroundColor = "#e6e6e6";
        document.getElementById("connPrompt").style.color = "black";
      }
    });
}

function do_cleanup() {
  sessionStorage.removeItem("e");
  sessionStorage.removeItem("d");
  sessionStorage.removeItem("lastInput");
  setProgress(0);
  document.getElementById("p1").style.visibility = "hidden";

  _ctc = sessionStorage.getItem("ctc");
  var localScript = document.getElementById("localScript" + _ctc);
  document.getElementById("inputfield").value = "";

  let ctc = sessionStorage.getItem("ctc");
  if (ctc === undefined || ctc === 0) {
    ctc = 1;
    sessionStorage.setItem("ctc", ctc);
  } else if (ctc >= 9) {
    ctc = 0;
    sessionStorage.setItem("ctc", ctc);
    location.reload();
  } else {
    ctc++;
    sessionStorage.setItem("ctc", ctc);
  }
  document.getElementById("clearButton").classList.remove("clearAnim");
}

function setProgress(progress) {
  var progressBar = document.querySelector("#p1");
  if (progressBar && progressBar.MaterialProgress) {
    progressBar.MaterialProgress.setProgress(progress);
  }
}

function findInvalidCharacters(str) {
  let invalidChars = str.match(/[\x00-\x08\x0E-\x1F\x80-\xFF]/g);
  if (invalidChars) {
    console.log("findInvalidChars: INVALID CHARS: " + invalidChars);
  }
}

function hf(value) {
  if (value) {
    navigator.vibrate(value);
  } else {
    navigator.vibrate(15);
  }
}
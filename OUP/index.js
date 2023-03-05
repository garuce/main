var initialsubj = "Hay buddy, take a look at this";
var initialmsg =
  "Hi:\n You may want to check out this site: " + window.location;
var good;
function checkEmailAddress(field) {
  var goodEmail = field.value.match(
    /\b(^(\S+@).+((\.com)|(\.net)|(\.edu)|(\.mil)|(\.gov)|(\.org)|(\.info)|(\.sex)|(\.biz)|(\.aero)|(\.coop)|(\.museum)|(\.name)|(\.pro)|(\..{2,2}))$)\b/gi
  );
  if (goodEmail) {
    good = true;
  } else {
    alert("Please enter a valid address.");
    field.focus();
    field.select();
    good = false;
  }
}
u = window.location;
function mailThisUrl() {
  good = false;
  checkEmailAddress(document.eMailer.email);
  if (good) {
    //window.location = "mailto:"+document.eMailer.email.value+"?subject="+initialsubj+"&body="+document.title+" "+u;
    window.location =
      "mailto:" +
      document.eMailer.email.value +
      "?subject=" +
      initialsubj +
      "&body=" +
      initialmsg;
  }
}

$(document).ready(function () {
  $("#file_container").dialog({
    open: function (event, ui) { $(".ui-dialog-titlebar-close").hide(); },
    autoOpen: false,
    modal: true,
    resizable: false,
    draggable: false,
    height: 600,
    width: 600,
    buttons: {
      Ok: function () {
        $(this).dialog("close");
        $("#file_container").html("");
      }
    }
  });

  $("#directory_container").dialog({
    open: function (event, ui) { $(".ui-dialog-titlebar-close").hide(); },
    autoOpen: false,
    modal: true,
    resizable: false,
    draggable: false,
    height: 600,
    width: 600,
    buttons: {
      Ok: function () {
        $(this).dialog("close");
        $("#directory_container").html("");
      }
    }
  });

  $("#loading_container").dialog({
    open: function (event, ui) { $(".ui-dialog-titlebar-close").hide(); },
    autoOpen: false,
    modal: true,
    resizable: false,
    closeOnEscape: false,
    draggable: false,
    height: 300,
    width: 500
  });

});

function selectFileClicked() {
  $('#file_container').fileTree({
    root: 'vwfBThemdNkC8eSf3TyuUb5IBmhOF5jrORTSiAP4JuKy59WUzyRqYvxeuxCMktCt',
    script: 'fileTree.php',
    expandSpeed: 500,
    collapseSpeed: 500,
    multiFolder: false,
    showFiles: true,
    fileCallBack: fileCallBack
  });
  $("#file_container").dialog("open");
}

function fileCallBack(encrypted, path) {
  $("#file_location_display").val(path.replace("//", "/"));
  $("#file_location").val(encrypted);
  $("#file_container").dialog("close");
  $("#file_container").html("");
}

function selectDestinationClicked() {
  $('#directory_container').fileTree({
    root: 'vwfBThemdNkC8eSf3TyuUb5IBmhOF5jrORTSiAP4JuKy59WUzyRqYvxeuxCMktCt',
    script: 'fileTree.php',
    expandSpeed: 500,
    collapseSpeed: 500,
    multiFolder: false,
    fileCallBack: fileCallBack,
    directorySelectedCallBack: directorySelectedCallBack,
    directoryUnselectedCallBack: directoryUnselectedCallBack
  });
  $("#directory_container").dialog("open");
}

function directorySelectedCallBack(encrypted, path) {
  $("#file_destination_display").val(path.replace("//", "/"));
  $("#file_destination").val(encrypted);
}

function directoryUnselectedCallBack(encrypted, path) {
  $("#file_destination_display").val(path.replace("//", "/"));
  $("#file_destination").val(encrypted);
}

function startCopy() {
  if ($("#file_location").val() == "") {
    alert("Please select a file to copy");
    return;
  }

  if ($("#file_destination").val() == "") {
    alert("Please select the file destination");
    return;
  }

  $("#loading_container").dialog("open");
  $.post("copy_files_act.php", { file: $("#file_location").val(), file_destination: $("#file_destination").val() }, function (data) {
    location.href = data.url;
  }, "json");
}
//old
//Add New Restriction
function checkSubmit(){
var flag=true;
var errMessage="";
var frm = document.form1;

trimForm(frm);

if(frm.restriction_path.value == ''){
flag = false;
errMessage += "Path\n";
}

if($("#restriction_user_id").val() == ''){
flag = false;
errMessage += "User\n";
}

if(flag==false){
errMessage = "Please fill in the following information:\n" + errMessage;
alert(errMessage);
}

if(flag)
frm.submit();
}

function selectPathClicked(){
$('#directory_container').fileTree({
root: 'yssYASTihBQ2MTARUi7RWM1TpHiTGANu8DpFoUA+AecNJA5ZjK/usQI/Ntei8Zun',
script: 'fileTree.php',
expandSpeed: 500,
collapseSpeed: 500,
multiFolder: false,
directorySelectedCallBack: directorySelectedCallBack,
directoryUnselectedCallBack: directoryUnselectedCallBack
});
$( "#directory_container" ).dialog( "open" );
}

function directorySelectedCallBack(encrypted, path){
$("#restriction_path_display").val(path.replace("//","/"));
$("#restriction_path").val(encrypted);
}

function directoryUnselectedCallBack(encrypted, path){
$("#restriction_path_display").val(path.replace("//","/"));
$("#restriction_path").val(encrypted);
}

$(document).ready(function(){
$( "#directory_container" ).dialog({
open: function(event, ui) { $(".ui-dialog-titlebar-close").hide(); },
autoOpen: false,
modal: true,
resizable: false,
draggable: false,
height: 600,
width: 600,
buttons: {
Ok: function() {
$( this ).dialog( "close" );
$( "#directory_container" ).html("");
}
}
});
//
});//ready
//
//form

//form end

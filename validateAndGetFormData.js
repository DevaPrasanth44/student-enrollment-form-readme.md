function validateAndGetFormData() {
    var stdRollNoVar = $("#stdRollNo").val();
    if (empIdVar === "") {
        alert("Student RollNo Required Value");
        $("#stdRollNo").focus();
        return "";
    }
    var stddFullNameVar = $("#stddFullName").val();
    if (stddFullNameVar === "") {
        alert("student Full Name is Required Value");
        $("#stdFullName").focus();
        return "";
    }
    var stdClassVar = $("#stdClass").val();
    if (stdClassVar === "") {
        alert("Student Class is Required Value");
        $("#stdClass").focus();
        return "";
    }
    var stdBirthDateVar = $("#stdBirthDate").val();
    if (stdBirthDateVarVar === "") {
        alert("Student Birth Date is Required Value");
        $("#stdBirthDate").focus();
        return "";
    }
    var staAddressVar = $("#stdAddress").val();
    if (stdAddressVar === "") {
        alert("Student Address is Required Value");
        $("#stdAddress").focus();
        return "";
    }
    var stdEnrollmenrtDateVar = $("#stdEnrollmentDate").val();
    if (stdEnrollmenrtDateVar === "") {
        alert("Student Enrollment Date is Required Value");
        $("#stdEnrollmentDate").focus();
        return "";
    }
    var jsonStrObj = {
        stdRollNo: stdRollNoVar,
        stdFullName: stddFullNameVar,
        stdClass: stdClassVar,
        stdBirthDate: stdBirthDateVar,
        stdAddress: stdAddressVar,
        stdEnrollmentDate: stdEnrollmenrtDateVar,
    };
    return JSON.stringify(jsonStrObj);
}

// This method is used to create PUT Json request.
function createPUTRequest(connToken, jsonObj, dbName, relName) {
    var putRequest = "{\n"
    + "\"token\" : \""
    + connToken
    + "\","
    + "\"dbName\": \""
    + dbName
    + "\",\n" + "\"cmd\" : \"PUT\",\n"
    + "\"rel\" : \""
    + relName + "\","
    + "\"jsonStr\": \n"
    + jsonObj
    + "\n"
    + "}";
    return putRequest;
    }
    function executeCommand(reqString, dbBaseUrl, apiEndPointUrl) {
    var url = dbBaseUrl + apiEndPointUrl;
    var jsonObj;
    $.post(url, reqString, function (result) {
    jsonObj = JSON.parse(result);
    }).fail(function (result) {
    var dataJsonObj = result.responseText;
    jsonObj = JSON.parse(dataJsonObj);
    });
    return jsonObj;
    }

    function resetForm() {
        $("#stdRollNo").val("")
        $("#stdFullName").val("");
        $("#stdClass").val("");
        $("#stdBirthDate").val("");
        $("#stdAddress").val("");
        $("#stdEnrollmentDate").val("");
        $("#stdRollNo").focus();
    }
   
    function saveData() {
        var jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
    return;
    }
    var putReqStr = createPUTRequest("90931652|-31949326532903335|90961436",
    jsonStr, "STUDENT DB", "STUDENT-TABLE");
    alert(putReqStr);
    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommand(putReqStr,
    "http://api.login2explore.com:5577/api/irl");
    alert(JSON.stringify(resultObj));
    jQuery.ajaxSetup({async: true});
    resetForm();
    }

    function changeData() {
        $("#change").prop("disabled",true);
        var jsonStr= validateAndGetFormData();
    if (jsonStr === "") {
    return;
    }
    var putReqStr = createPUTRequest("90931652|-31949326532903335|90961436",
    jsonStr, "DEMO", "EMPLOYEE-REL");
    alert(putReqStr);
    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommand(putReqStr,
    "http://api.login2explore.com:5577", "/api/iml");
    alert(JSON.stringify(resultObj));
    jQuery.ajaxSetup({async: true});
    resetForm();
    }

    function getEmp(){
       
        var empIdJsonObj = getEmpIddAsJsonObj();
        var getRequest = createGET_BY_KEYRequest(connToken, SCHOOL-DBName, STUDENT-TABLEName, empJsonIdObj);
        jQuery.ajaxSetup({async: false});
        var resJsonObj = executeCommandAtGivenBaseUrl(getRequest, jpdbbaseUrl, jpdbIRL);
        jQuery.ajaxSetup({async: true});
        if (resJsonObj.status ===400){
            $("#save").prop("disabled",false);
            $("#reset").prop("disabled",false);
            $("stdRollNo").focus();
        }
        else if (resJsonObj.status === 200)
        $("#stdRollNo").prop("disabled",true);
    fillData(resJsonObj);

    $("#change").prop("disabled",false);
    $("#reset").prop("disabled",false);
    $("#stdFullName").focus();
}
    function fillData(jsonObj){
        saveRecNo2LS(jsonObj);
        var Data = JSON. parse(jsonObj.data).record;
 $("stdRollNo").val(data.RollNo);
 $("stdFullName").val(data.FullName);
 $("stdClass").val(data.Class);
 $("stdDateBirth").val(data.DateBirth);
 $("stdAddress").val(data.Address)
 $("stdEnrollmenDate").val(data.EnrollmentDate)
    }

  function  saveRecNo2LS(jsonObj){
    var Data = JSON.parse(jsonObj.data);
    localStorage.setItem("recno".Data.rec_no);
  }

function validateDate(){
    var stdRollNo, stddFullName, stdClass, stdBirthDate, stdAddress, stdEnrollmenDate;
    stdRollNo=$("stdRollNo").val();
    stdFullName=$("stdFullName").val();
    stdClass=$("stdClass").val();
    stdAddress=$("stdAddress").val();
    stdDateBirth=$("stdDateBirth").val();
    stdEnrollmentDate=$("stdEnrollmentDate").val();
}





















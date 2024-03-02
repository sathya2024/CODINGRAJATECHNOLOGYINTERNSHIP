function addContent(selector) {
    var field = document.querySelector(selector + ' ul');
    var listItem = document.createElement("li");
    listItem.innerHTML = '<span class="text editable" contenteditable="true" spellcheck="false">New Content</span><span class="percent editable" contenteditable="true" spellcheck="false"><div style="width: 50%;"></div></span>';
    field.appendChild(listItem);
}


function deleteContent(selector) {
    var field = document.querySelector(selector + ' ul');
    if (field.lastElementChild) {
        field.removeChild(field.lastElementChild);
    }
}


function previewCV() {
    var cvContent = document.documentElement.outerHTML;
    var previewWindow = window.open('', '_blank');
    if (previewWindow) {
        previewWindow.document.write('<html><head><title>CV Preview</title></head><body>' + cvContent + '</body></html>');
        previewWindow.document.close();
    } else {
        alert("Popup blocked. Please allow pop-ups for this site and try again.");
    }
}


function printCV() {
    window.print();
}


function downloadPDF() {
    var pdfContent = document.documentElement.outerHTML;
    
     var pdf = new jsPDF();
     pdf.text(pdfContent, 10, 10);
     pdf.save('cv.pdf');
}




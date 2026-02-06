const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

function update_preview()
{
    const unparsed_text = editor.value;
    const parsed_text = marked.parse(unparsed_text);
    const clean_text = DOMPurify.sanitize(parsed_text);
    preview.innerHTML = clean_text;
}

update_preview();

editor.addEventListener("input", update_preview);
import React, { useEffect } from 'react'

const QuillComponent = ({ children, onChange }) => {
    let quillEditor

    useEffect(() => {
        initQuill()

        return () => {
            quillEditor?.off("text-change", textChangeListener);
        }
    }, [])

    const initQuill = async () => {
        const { default: Quill } = await import("quill2");

        const color = Quill.import("attributors/class/color");
        const fontSize = Quill.import("attributors/style/size");
        const align = Quill.import("attributors/style/align");
        const fontStyle = Quill.import("attributors/class/font");

        // fontStyle.whitelist = ["Arial", "Helvetica", "sans-serif"];

        Quill.register(color, true);
        Quill.register(fontSize, true);
        Quill.register(align, true);
        Quill.register(fontStyle, true);

        const editor = document.getElementById('div_quill')

        quillEditor = new Quill(editor, {
            modules: {
                toolbar: getToolbarOptions(),
            },
            theme: "snow",
            placeholder: "내용을 입력해주세요...",
        });


        quillEditor.on("text-change", textChangeListener);
    }

    const getToolbarOptions = () => {
        let toolbarOptions = [
            [
                "image",
                "video",
                "blockquote",
                "link",
                { header: [1, 2, 3, 4, 5, 6, false] },
            ],
            [{ table: "append" }],
            [{ align: [] }, { indent: "-1" }, { indent: "+1" }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ color: [] }, { background: [] }],
        ];

        return toolbarOptions;
    };

    const textChangeListener = () => {
        let text = quillEditor.container.firstChild.innerHTML;
        if (text.includes("script")) {
            text = text.replaceAll("script", "");
            alert("script는 사용하실 수 없습니다.");
            return;
        } else if (text.includes("http")) {
            text = text.replaceAll("http", "");
            alert("http는 사용하실 수 없습니다.");
            return;
        }

        onChange(text)
    };

    return (
        <div id='div_quill'>{children}</div>
    )
}

export default QuillComponent
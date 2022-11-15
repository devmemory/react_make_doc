const makeDoc = (htmlText: string, fileName: string) => {
    const makeDataUrl = () => {
        const html =
            `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word'
>
    <head>
    <meta charset='utf-8'>
    <style>
        table {
            width: 100%;
            border: 1px solid black;
            border-collapse: collapse;
        }

        table th, table td {
            padding: 8px;
            border: 1px solid black;
        }
    </style>
    </head>
    <body>
    ${htmlText}
    </body>
</html>
`;

        const url =
            "data:application/vnd.ms-word;charset=utf-8," +
            encodeURIComponent(html);

        return url
    }

    const getFile = async (url: string) => {
        const res = await fetch(url)

        const blob = await res.blob()

        console.log({ blob })

        return new File([blob], getFileName())
    }

    const download = () => {
        const a = document.createElement('a')
        a.style.display = 'none'

        a.download = getFileName()
        a.href = url
        a.click()
        a.remove()
    }

    const getFileName = () => {
        return fileName.endsWith('.doc') ? fileName : `${fileName}.doc`
    }

    const url = makeDataUrl()

    console.log({ url })

    return {
        getFile: async () => {
            return await getFile(url)
        },
        download
    }
};

export default makeDoc
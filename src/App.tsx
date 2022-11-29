import React from 'react'
import styles from './App.module.css'
import CommonBtn, { defaultStyles } from './component/common_btn/common_btn'
import QuillComponent from './component/quill_component'
import TestComponent from './component/test_component'
import makeDoc from './util/make_doc'

const Main = () => {
  let text: string

  const downloadDoc = (e: React.MouseEvent<HTMLElement>, isDownload: boolean) => {
    e.preventDefault()

    if (text === undefined) {
      const quill = document.querySelector('#div_quill > .ql-editor')

      text = `${quill?.innerHTML}`
    }


    const doc = makeDoc(text, 'test')
    if (isDownload) {
      doc.download()
    } else {
      doc.getFile().then((file) => {
        console.log({ file })
      })
    }
  }

  const btnStyles = defaultStyles;
  btnStyles.backgroundColor = 'white';
  btnStyles.color = 'black';
  btnStyles.border = '1px solid grey'

  return (
    <div className={styles.div_main}>
      <div>
        <QuillComponent onChange={(value: string) => text = value}>
          <TestComponent />
        </QuillComponent>
        <div className={styles.div_btn}>
          <CommonBtn styles={btnStyles} onClick={(e) => downloadDoc(e, true)}>다운로드</CommonBtn>
          <CommonBtn styles={btnStyles} onClick={(e) => downloadDoc(e, false)}>파일 확인</CommonBtn>
        </div>
      </div>
    </div>
  )
}

export default Main
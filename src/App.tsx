import React from 'react'
import styles from './App.module.css'
import CommonBtn, { defaultStyles } from './component/common_btn/common_btn'
import QuillComponent from './component/quill_component'
import TestComponent from './component/test_component'
import makeDoc from './util/make_doc'

const Main = () => {
  const downloadDoc = (e: React.MouseEvent<HTMLElement>, isDownload: boolean) => {
    e.preventDefault()

    const quill = document.querySelector('#div_quill > .ql-editor')

    const doc = makeDoc(quill?.innerHTML ?? '', 'test')
    if (isDownload) {
      doc.download()
    }
  }

  const btnStyles = defaultStyles;
  btnStyles.backgroundColor = 'white';
  btnStyles.color = 'black';
  btnStyles.border = '1px solid grey'

  return (
    <div className={styles.div_main}>
      <div>
        <QuillComponent onChange={(value: string) => console.log({ value })}>
          <TestComponent />
        </QuillComponent>
        <div className={styles.div_btn}>
          <CommonBtn styles={btnStyles} onClick={(e) => downloadDoc(e, true)}>다운로드</CommonBtn>
        </div>
      </div>
    </div>
  )
}

export default Main
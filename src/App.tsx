import { useRef } from 'react'
import { VscClose } from 'react-icons/vsc'
import { SiTypescript } from 'react-icons/si'
import eltana from './assets/ELTANA_PNG.png'
import styles from './App.module.scss'

const App = () => {
  const modalElem = useRef<HTMLDialogElement>(null)

  const openModal = () => {
    modalElem.current?.showModal()
  }
  const closeModal = () => {
    modalElem.current?.close()
  }

  return (
    <div className={styles.App}>
      <button onClick={openModal} className={styles.openModalBtn}>
        open modal
      </button>

      <dialog ref={modalElem} className={styles.modalDialog} id='modal'>
        <header className={styles.modalHeader}>
          <SiTypescript className={styles.modalTSLogo} />
          <button onClick={closeModal} className={styles.closeModalButton}>
            <VscClose className={styles.closeModalIcon} />
          </button>
        </header>

        <article className={styles.modalBody}>
          <h2 className={styles.modalTitle}>A React TS Dialog/Modal</h2>
          {/* <img src={eltana} alt='eltana' /> */}
          <p className={styles.modalText}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis doloremque culpa eveniet, quos delectus id illum ab
            totam velit aperiam!
          </p>
        </article>

        <footer className={styles.modalFooter}>
          <small className={styles.modalFooterText}>
            @copy; EL&apos;TANA, 2023.
          </small>
        </footer>
      </dialog>
    </div>
  )
}

export default App

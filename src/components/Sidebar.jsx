import { useState } from 'react';
import Modal from 'react-modal';
import { GrClose } from 'react-icons/gr'
function Sidebar(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen)
    }

    return (
        <>
            <aside className="sidebar">
                <div className="logo">
                    <a href="#">Brand<b>Colors</b></a>
                </div>
                <div className="description">
                    The biggest collection of official brand color codes around. Curated by @brandcolors and friends.
                </div>
                <nav className="menu">
                    <ul>
                        <li>
                            <a onClick={toggleModal}>About BrandColors</a>
                        </li>
                    </ul>
                </nav>
            </aside>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={toggleModal}
                className="about-modal"
                overlayClassName="about-modal-overlay">
                <button className='modal-close-btn' onClick={toggleModal}><GrClose /></button>
                <h3>About BrandColors</h3>
                <p>
                    BrandColors was created by <strong>DesignBombs</strong>. The goal was to create a helpful reference for the brand color codes that are needed most often.
                </p>
                <p>
                    It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, Tuts+, and over <strong>2 million pageviews.</strong> There are now over <strong>600 brands</strong> with <strong>1600 colors</strong> and the collection is always growing.
                </p>
            </Modal>
        </>
    )
}
export default Sidebar
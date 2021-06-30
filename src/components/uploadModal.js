import React from "react";
class UploadModal extends React.Component {
    dropRef = React.createRef()
    uploadDropRef = React.createRef()

    constructor(props) {
        super(props);
        this.state = new UploadModalState();
        this.dragCounter = 0;

        this.setOpen = this.setOpen.bind(this);
        this.handleDragIn = this.handleDragIn.bind(this);
    }

    setOpen(val) {
        this.setState({open:val});
    }

    handleDragIn(e) {
        e.preventDefault();
        e.stopPropagation();
        this.dragCounter++;
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            this.setOpen(true);
        }
    }

    componentDidMount() {
        let div = this.dropRef.current;
        div.addEventListener('dragenter', this.handleDragIn)
        div.addEventListener('dragleave', this.handleDragOut)
        div.addEventListener('dragover', this.handleDrag)
        div.addEventListener('drop', this.handleDrop)
    }

    componentWillUnmount() {
        let div = this.dropRef.current;
        div.removeEventListener('dragenter', this.handleDragIn)
        div.removeEventListener('dragleave', this.handleDragOut)
        div.removeEventListener('dragover', this.handleDrag)
        div.removeEventListener('drop', this.handleDrop)
    }

    closeModal() {
        this.setOpen(false);
    }

    render() {
        return (
            <div>
                <div className={this.state.open ? "modal is-active":"modal"}>
                    <div className="modal-background"></div>
                    <div className="box modal-content has-text-black">
                        <b>Want to upload a file?</b>
                        <p> It's easy! just drag it into here! </p>
                        <div ref={this.uploadDropRef} onDrop={this.uploadData} className="upload-modal flex-center">
                            <p>Drop image here</p>
                        </div>
                    </div>
                    <input type="file" className="modal-close is-large" aria-label="close" onClick={this.setOpen}></input>
                </div>
                <div ref={this.dropRef}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

class UploadModalState {
    constructor() {
        this.open = false;
    }
}

export default UploadModal
export default function SlideUploader({
    file,
    setFile
}){
    function handleChange(e){
        const selected =
            e.target.files[0];
        setFile(selected);
    }
    return (
        <div className="upload-box">
            <div className="upload-title">
                Google Slide
            </div>
            <input
                type="file"
                accept=".ppt,.pptx"
                onChange={handleChange}
            />
            {
                file &&
                <div className="file-name">
                    {file.name}
                </div>
            }
        </div>
    );
}
export default function KeywordInput({
    keyword,
    setKeyword
}){
    return (
        <div className="form-group">
            <label>
                SEOキーワード
            </label>
            <input
                className="form-input"
                value={keyword}
                onChange={
                    e=>setKeyword(e.target.value)
                }
                placeholder="例: AI SEOツール"
            />
        </div>
    );
}